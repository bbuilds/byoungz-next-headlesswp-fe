export const runtime = "edge";

import fetch from "isomorphic-unfetch";
import { NextApiRequest, NextApiResponse } from "next";

const WORDPRESS_URL = process.env.NEXT_PUBLIC_WORDPRESS_DOMAIN as string;
const FRONTEND_URL = process.env.NEXT_PUBLIC_FRONTEND_DOMAIN as string;

// Global regex search allows replacing all URLs
const HOSTNAME_REGEX = new RegExp(WORDPRESS_URL, "g");

function replace(string: string, regex: RegExp, replacement: string): string {
  return string.replace(regex, replacement);
}

export default async function proxy(
  req: NextApiRequest,
  res: NextApiResponse,
): Promise<void> {
  let content: string;
  let contentType: string | null;

  // Get the page that was requested. The manual option allows us to process redirects manually.
  const upstreamRes = await fetch(`${WORDPRESS_URL}${req.url}`, {
    redirect: "manual",
  });

  // Check for redirects.
  if (upstreamRes.status > 300 && upstreamRes.status < 310) {
    const location = upstreamRes.headers.get("location");

    if (!location) {
      throw new Error("No location header in redirect response");
    }

    const locationURL = new URL(location, upstreamRes.url);

    // Follow once only if on a WordPress domain.
    if (locationURL.href.includes(WORDPRESS_URL)) {
      const response2 = await fetch(locationURL.toString(), {
        redirect: "manual",
      });
      content = await response2.text();
      contentType = response2.headers.get("content-type");
    } else {
      // If there were more than two redirects, throw an error.
      throw new Error(
        `abort proxy to non-wordpress target ${locationURL.href} to avoid redirect loops`,
      );
    }
  } else {
    // There are no redirects, get original response text.
    content = await upstreamRes.text();
    contentType = upstreamRes.headers.get("content-type");
  }

  // If the current URL includes 'sitemap'.
  if (req.url && req.url.includes("sitemap")) {
    // Replace WordPress URLs with the current site URL.
    content = replace(content, HOSTNAME_REGEX, FRONTEND_URL);

    // Change sitemap xsl file path to local
    const sitemapFind = "//(.*)main-sitemap.xsl"; // The Yoast internal template.
    const sitemapReplace = "/main-sitemap.xsl"; // Our custom template.
    const SITEMAP_XSL_REGEX = new RegExp(sitemapFind, "g");
    content = replace(content, SITEMAP_XSL_REGEX, sitemapReplace);
  }

  res.setHeader("Content-Type", contentType || "text/html");
  res.setHeader("Cache-Control", "max-age=60");

  res.send(content);
}
