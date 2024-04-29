import * as React from "react";
import { SectionHeader, SmartLink } from "@/src/components";
import InstagramIcon from "@/images/instagram.svg";
import { IgPost } from "@/src/lib/types";
import Image from "next/image";
import { SOCIAL_MEDIA_URLS } from "@/src/lib/constants";

export type InstagramFeedProps = {
  title: string;
  igPosts: IgPost[];
};

export function InstagramFeed({ title, igPosts }: InstagramFeedProps) {
  return (
    <section data-component="InstagramFeed">
      <div className="container mx-auto mb-8 flex w-full flex-wrap items-center lg:justify-between">
        <SectionHeader text={title} />
        <SmartLink
          href={SOCIAL_MEDIA_URLS.INSTAGRAM}
          classNames="mr-4 flex items-center uppercase md:mr-8 md:text-2xl dark:text-swampGreen"
        >
          <span className="mr-2">@BYOUNGZ</span>
          <InstagramIcon className="h-4 w-auto lg:h-7" />
        </SmartLink>
      </div>
      <div className="flex flex-wrap justify-center gap-2 md:flex-nowrap">
        {igPosts.map((post, index) => {
          if (index > 5) return null;
          return (
            <SmartLink
              key={post.id}
              href={post.permalink}
              classNames="block aspect-square overflow-hidden relative flex-1"
            >
              {post.media_type === "IMAGE" && (
                <Image
                  src={post.media_url}
                  alt={post.caption}
                  width={488}
                  height={488}
                />
              )}
              {post.media_type === "VIDEO" && (
                <>
                  <video
                    className="w-full object-cover"
                    muted
                    width={488}
                    height={488}
                  >
                    <source src={post.media_url} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  <span className="sr-only">{post.caption}</span>
                </>
              )}
            </SmartLink>
          );
        })}
      </div>
    </section>
  );
}

export default InstagramFeed;
