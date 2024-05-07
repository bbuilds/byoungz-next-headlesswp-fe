import * as React from "react";
import Script from "next/script";
import type { SeoPostTypeBreadcrumbs } from "@/src/lib/types";
import { SmartLink } from "@/src/components";
import RightIcon from "@/images/right-chevron.svg";

export type BreadcrumbsProps = {
  links: SeoPostTypeBreadcrumbs[];
};

export function Breadcrumbs({ links }: BreadcrumbsProps) {
  const breadcrumbsSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: links.map((link, index) => {
      return {
        "@type": "ListItem",
        position: index + 1,
        name: link.text,
        item: link.url,
      };
    }),
  };

  return (
    <nav data-component="Breadcrumbs" aria-label="Breadcrumb">
      <ol className="inline-flex list-none p-0">
        {links.map((link, index) => {
          return (
            <li key={link.url} className="flex items-center text-xs">
              <SmartLink
                href={link.url as string}
                classNames="dark:text-swampGreen"
              >
                <span>{link.text}</span>
              </SmartLink>
              {index + 1 !== links.length ? (
                <RightIcon className="mx-2 size-3 fill-verdunGreen dark:fill-swampGreen" />
              ) : (
                ""
              )}
            </li>
          );
        })}
      </ol>
      <Script type="application/ld+json" id="breadcrumbs-json-markup">
        {JSON.stringify(breadcrumbsSchema)}
      </Script>
    </nav>
  );
}

export default Breadcrumbs;
