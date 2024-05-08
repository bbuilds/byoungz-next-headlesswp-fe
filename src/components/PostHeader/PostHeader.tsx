import * as React from "react";
import Image from "next/image";
import { SmartLink } from "@/src/components";
import { SeoPostTypeBreadcrumbs, MediaItem, Category } from "@/src/lib/types";
import { formatDateLocale } from "@/src/lib/utils";

export type PostHeaderProps = {
  title: string;
  featuredImage?: MediaItem;
  categories?: Category[];
  travelLocation?: string;
  travelDate?: string;
  modifiedDate?: string;
};

export function PostHeader({
  title,
  featuredImage,
  categories,
  travelLocation,
  travelDate,
  modifiedDate,
}: PostHeaderProps) {
  const isModified = travelDate !== modifiedDate;

  return (
    <header data-component="PostHeader">
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
                  classNames="text-sm dark:text-swampGreen text-verdunGreen"
                  href={`/category/${category.slug}`}
                >
                  {category.name}
                  {categories.length !== i + 1 ? <span>, </span> : ""}
                </SmartLink>
              );
            })}
          </div>
        )}
        <h1 id="post-top" className="mb-3 scroll-m-20 text-4xl">
          {title}
        </h1>
        <p className="text-sm">
          {travelLocation && <span>{`Roaming ${travelLocation} on `}</span>}
          {travelDate && (
            <time dateTime={travelDate}>{formatDateLocale(travelDate)}</time>
          )}
        </p>
        {isModified && (
          <p className="font-bold text-sm">
            {` (last updated ${formatDateLocale(modifiedDate as string)})`}
          </p>
        )}
      </div>
    </header>
  );
}

export default PostHeader;
