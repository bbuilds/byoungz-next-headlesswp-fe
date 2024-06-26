import * as React from "react";
import Image from "next/image";
import type { MediaItem, Category } from "@/src/lib/types";
import { formatDateLocale } from "@/src/lib/utils";
import { SmartLink } from "@/src/components";

export type CardArticleFeaturedProps = {
  featuredImage?: MediaItem;
  categories?: Category[];
  date: string;
  uri: string;
  title: string;
  isSecondary?: boolean;
};

export function CardArticleFeatured({
  featuredImage,
  categories,
  date,
  uri,
  title,
  isSecondary,
}: CardArticleFeaturedProps) {
  return (
    <article
      data-component="CardArticleFeatured"
      className={`flex w-full flex-col  ${isSecondary ? "grow" : "h-full"}`}
    >
      {featuredImage && (
        <picture className="relative flex size-full grow">
          <div className="absolute inset-0 bg-blurredBlack opacity-20" />
          <Image
            src={featuredImage.sourceUrl as string}
            alt={featuredImage.altText as string}
            width={featuredImage.mediaDetails?.width as number}
            height={featuredImage.mediaDetails?.height as number}
            className="size-full overflow-hidden object-cover object-center lg:absolute lg:inset-0"
          />
        </picture>
      )}
      <div className="relative bg-grey-100 p-4 dark:bg-black">
        <header>
          <p className="flex items-center gap-x-1">
            {categories &&
              categories.map((category) => {
                if (category.name !== "Personal") {
                  return (
                    <span
                      key={category.name}
                      className="font-bold dark:text-swampGreen"
                    >
                      {category.name}
                    </span>
                  );
                }
                return null;
              })}
            <span>|</span>
            <span className="text-offBlack text-sm dark:text-white">
              {formatDateLocale(date)}
            </span>
          </p>
          <SmartLink href={uri} classNames="block link-guard group">
            <h2
              className={`transition-colors duration-300 ease-in-out text-2xl group-hover:text-verdunGreen group-hover:dark:text-swampGreen md:mt-2 ${isSecondary ? "lg:text-xl" : "lg:text-3xl"}`}
            >
              {title}
            </h2>
            <span
              className="absolute bottom-0 right-0 z-20  bg-verdunGreen px-2 font-bold leading-none text-white opacity-0 transition-opacity duration-300 ease-in-out text-xl group-hover:opacity-100 dark:bg-swampGreen dark:text-black"
              aria-hidden="true"
            >
              &gt;
            </span>
          </SmartLink>
        </header>
      </div>
    </article>
  );
}

export default CardArticleFeatured;
