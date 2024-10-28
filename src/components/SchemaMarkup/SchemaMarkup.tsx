import * as React from "react";
import Script from "next/script";

export type SchemaMarkupProps = {
  text: string;
  id: string;
};

export function SchemaMarkup({ text, id }: SchemaMarkupProps) {
  const authorDomain = process.env.NEXT_PUBLIC_WORDPRESS_DOMAIN as string;
  const siteDomain = process.env.NEXT_PUBLIC_FRONTEND_DOMAIN as string;

  if (text.includes(authorDomain)) {
    text = text.replace(new RegExp(authorDomain, "g"), siteDomain);
  }
  return (
    <Script
      id={id}
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(text),
      }}
    />
  );
}

export default SchemaMarkup;
