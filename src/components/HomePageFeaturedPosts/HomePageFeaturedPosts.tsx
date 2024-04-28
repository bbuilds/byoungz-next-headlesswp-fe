import * as React from "react";
import type {
  Page_Homepagetemplate_HomeFeaturedPost,
  Post,
  MediaItem,
  Category,
} from "@/src/lib/types";
import { CardArticleFeatured } from "@/src/components";

export type HomePageFeaturedPostsProps = {
  featuredPost: Page_Homepagetemplate_HomeFeaturedPost;
  secondaryPosts: Post[];
};

export function HomePageFeaturedPosts({
  featuredPost,
  secondaryPosts,
}: HomePageFeaturedPostsProps) {
  const featuredImage = featuredPost.featuredImage?.node;

  return (
    <section className="flex w-full max-w-[150rem] flex-wrap">
      <h2 className="sr-only">Featured Posts Section</h2>
      <div className="size-full lg:flex lg:h-[80vh] lg:overflow-hidden">
        <div className="lg:h-full lg:w-[65%] lg:grow">
          <CardArticleFeatured
            featuredImage={featuredImage as MediaItem}
            categories={featuredPost.categories?.nodes as Category[]}
            date={featuredPost.date as string}
            uri={featuredPost.uri as string}
            title={featuredPost.title as string}
          />
        </div>
        <div className="hidden lg:flex lg:w-[35%] lg:flex-col">
          {secondaryPosts.map((post, index) => {
            return (
              <CardArticleFeatured
                key={index}
                featuredImage={post.featuredImage?.node as MediaItem}
                categories={post.categories?.nodes as Category[]}
                date={post.date as string}
                uri={post.uri as string}
                title={post.title as string}
                isSecondary={true}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default HomePageFeaturedPosts;
