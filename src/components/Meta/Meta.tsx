import * as React from "react";
import Head from "next/head";
import Script from "next/script";
import { Page, Post, SiteGlobals } from "@/src/lib/types";

export type MetaProps = {
  entry: Page | Post;
  siteGlobals: SiteGlobals;
};

export function Meta({ entry, siteGlobals }: MetaProps) {
  const isBlogPost = entry?.contentTypeName === "post";

  const entrySeo = entry.seo;
  const title =
    entrySeo?.title || (siteGlobals.globalGeneralSettings.title as string);

  let fullSchema;
  if (entrySeo?.schema?.raw) {
    fullSchema = JSON.parse(entrySeo.schema.raw);
  }

  const robotsIndex =
    entrySeo?.metaRobotsNoindex === "noindex" ? "noindex" : "index";
  const robotsFollow =
    entrySeo?.metaRobotsNofollow === "nofollow" ? "nofollow" : "follow";

  const robots = `${robotsIndex}, ${robotsFollow}`;

  const metaDescription =
    entrySeo?.metaDesc ||
    entry?.excerpt?.replace(/(<([^>]+)>)/gi, "").trim() ||
    (siteGlobals?.globalGeneralSettings?.description as string);
  const keywords =
    entrySeo?.metaKeywords || "travel, digital nomad, shadow work";

  const ogImage =
    entrySeo?.opengraphImage?.mediaItemUrl ||
    (siteGlobals?.globalSeo?.openGraph?.defaultImage?.sourceUrl as string);

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <meta name="keywords" content={keywords} />
        <meta
          property="og:type"
          content={`${isBlogPost ? "article" : "website"}`}
        />
        <meta property="og:title" content={entrySeo?.opengraphTitle || title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={entrySeo?.opengraphUrl as string} />
        <meta property="og:image" content={ogImage} />
        {/** @TODO fix canonical */}
        <link rel="canonical" href={entrySeo?.canonical as string} />
        <meta name="robots" content={robots} />
      </Head>
      {fullSchema && (
        <Script type="application/ld+json" id="json-markup">
          {JSON.stringify({ ...fullSchema })}
        </Script>
      )}
    </>
  );
}

export default Meta;
