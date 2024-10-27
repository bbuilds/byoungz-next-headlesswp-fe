export const runtime = "edge";

import fetch from "isomorphic-unfetch";
import { NextRequest, NextResponse } from "next/server";

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_DOMAIN as string;
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_DOMAIN as string;

// Global regex search allows replacing all URLs
const HOSTNAME_REGEX = new RegExp(WORDPRESS_URL, "g");

function replace(string: string, regex: RegExp, replacement: string): string {
  return string.replace(regex, replacement);
}

export default async function proxy(req: NextRequest) {
  let content: string;
  let contentType: string | null;

  // Fetch the requested page with manual redirect option
  const upstreamRes = await fetch(`${WORDPRESS_URL}${req.nextUrl.pathname}`, {
    redirect: "manual",
  });

  // Check for redirects
  if (upstreamRes.status > 300 && upstreamRes.status < 310) {
    const location = upstreamRes.headers.get("location");

    if (!location) {
      throw new Error("No location header in redirect response");
    }

    const locationURL = new URL(location, upstreamRes.url);

    // Follow redirect if on a WordPress domain
    if (locationURL.href.includes(WORDPRESS_URL)) {
      const response2 = await fetch(locationURL.toString(), {
        redirect: "manual",
      });
      content = await response2.text();
      contentType = response2.headers.get("content-type");
    } else {
      // Prevent redirect loops
      throw new Error(
        `abort proxy to non-wordpress target ${locationURL.href} to avoid redirect loops`,
      );
    }
  } else {
    // Get original response text
    content = await upstreamRes.text();
    contentType = upstreamRes.headers.get("content-type");
  }

  // If the current URL includes 'sitemap'
  if (req.url && req.url.includes("sitemap")) {
    // Replace WordPress URLs with the current site URL
    content = replace(content, HOSTNAME_REGEX, FRONTEND_URL);

    // Change sitemap xsl file path to local
    const sitemapFind = "//(.*)main-sitemap.xsl"; // The Yoast internal template
    const sitemapReplace = "/main-sitemap.xsl"; // Our custom template
    const SITEMAP_XSL_REGEX = new RegExp(sitemapFind, "g");
    content = replace(content, SITEMAP_XSL_REGEX, sitemapReplace);
  }

  // Create a response with the content and appropriate headers
  const response = new NextResponse(content);
  response.headers.set("Content-Type", contentType || "text/html");
  response.headers.set("Cache-Control", "max-age=60");

  return response;
}
