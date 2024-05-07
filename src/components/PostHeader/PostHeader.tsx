import * as React from "react";
import Image from "next/image";
import { Breadcrumbs, SmartLink } from "@/src/components";
import { SeoPostTypeBreadcrumbs, MediaItem, Category } from "@/src/lib/types";
import { formatDateLocale } from "@/src/lib/utils";

export type PostHeaderProps = {
  title: string;
  breadcrumbs?: SeoPostTypeBreadcrumbs[];
  featuredImage?: MediaItem;
  categories?: Category[];
  travelLocation?: string;
  travelDate?: string;
};

export function PostHeader({
  breadcrumbs,
  title,
  featuredImage,
  categories,
  travelLocation,
  travelDate,
}: PostHeaderProps) {
  return (
    <header data-component="PostHeader">
      {breadcrumbs && (
        <div className="p-4">
          <Breadcrumbs links={breadcrumbs} />
        </div>
      )}
      {featuredImage && (
        <picture className="relative flex size-full grow">
          <div className="absolute inset-0 bg-blurredBlack opacity-10" />
          <Image
            src={featuredImage.sourceUrl as string}
            alt={featuredImage.altText as string}
            width={featuredImage.mediaDetails?.width as number}
            height={featuredImage.mediaDetails?.height as number}
            className="aspect-video size-full overflow-hidden object-cover object-center"
          />
        </picture>
      )}
      <div className="p-4">
        {categories && (
          <div className="py-1">
            {categories.map((category, i) => {
              return (
                <SmartLink
                  key={category.name}
                  classNames="text-xs dark:text-swampGreen text-verdunGreen"
                  href={`/category/${category.slug}`}
                >
                  {category.name}
                  {categories.length !== i + 1 ? <span>, </span> : ""}
                </SmartLink>
              );
            })}
          </div>
        )}
        <h1>{title}</h1>
        <p>
          {travelLocation && <span>{`Roaming ${travelLocation} on `}</span>}
          {travelDate && (
            <time className="text-sm" dateTime={travelDate}>
              {formatDateLocale(travelDate)}
            </time>
          )}
        </p>
      </div>
    </header>
  );
}

export default PostHeader;
