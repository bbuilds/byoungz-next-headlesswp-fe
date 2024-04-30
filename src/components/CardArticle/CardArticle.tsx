import * as React from "react";
import type { Post } from "@/src/lib/types";
import Image from "next/image";
import { formatDateLocale } from "@/src/lib/utils";
import parse, { Element, domToReact } from "html-react-parser";
import { SmartLink } from "@/src/components";

export type CardArticleProps = {
  post: Post;
};

export function CardArticle({ post }: CardArticleProps) {
  const featuredImage = post.featuredImage?.node;
  const date = formatDateLocale(post.modified || (post.date as string));
  // const categories = post.categories?.nodes;
  // const tags = post.tags?.nodes;

  return (
    <article data-component="CardArticle" className="overflow-hidden rounded">
      <SmartLink
        href={`${post.uri}`}
        classNames="block group relative h-full border-2 border-transparent hover:dark:border-swampGreen transition-colors duration-300"
        aria-label={post.title}
      >
        {featuredImage && (
          <picture className="relative flex size-full grow">
            <div className="absolute inset-0 bg-blurredBlack opacity-10" />
            <Image
              src={featuredImage.sourceUrl as string}
              alt={featuredImage.altText as string}
              width={featuredImage.mediaDetails?.width as number}
              height={featuredImage.mediaDetails?.height as number}
              className="size-full overflow-hidden object-cover object-center"
            />
            <span className="absolute bottom-0 left-0 rounded-tr p-2 dark:bg-swampGreen dark:text-black">
              <strong className="text-xs">{date}</strong>
            </span>
          </picture>
        )}
        <div className="relative p-4 dark:bg-black dark:text-white">
          <h2 className="mb-2 transition-colors duration-300 ease-in-out text-xl group-hover:dark:text-swampGreen">
            {post.title}
          </h2>
          {parse(post.excerpt as string, {
            replace: (domNode) => {
              if (domNode instanceof Element && domNode.attribs) {
                switch (domNode.name) {
                  case "a":
                    return <>{domToReact(domNode.children as Element[])}</>;
                }
              }
            },
          })}
        </div>

        {/* <div className="sr-only" aria-hidden="true">
        {categories &&
          categories.length > 0 &&
          categories.map((category) => {
            return <span key={category.slug}>{category.slug}</span>;
          })}
        {tags &&
          tags.length > 0 &&
          tags.map((tag) => {
            return (
              <span key={tag.slug}>
                {tag.slug}
              </span>
            );
          })}
      </div> */}
      </SmartLink>
    </article>
  );
}

export default CardArticle;
