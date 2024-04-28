import * as React from "react";
import LogoText from "@/images/logo-text.svg";
import { MediaItem } from "@/src/lib/types";
import Image from "next/image";
import { RichText } from "@/src/components";

export type AboutSectionProps = {
  text: string;
  image: MediaItem;
};

export function AboutSection({ text, image }: AboutSectionProps) {
  return (
    <section className="py-12 md:py-20" data-component="AboutSection">
      <h2 className="sr-only">BYOUNGZ About Section</h2>
      <div className="mx-auto flex w-full max-w-5xl flex-wrap md:items-center">
        <div className="w-full px-8 md:w-1/2">
          {/* <hr className="dashed border-t-3 mx-0 mb-4 w-24 border-dashed border-white" /> */}
          <div>
            <span className="mb-4 flex flex-col uppercase md:text-2xl">
              WHO IS
            </span>
            <LogoText className="mb-4 w-72 fill-offBlack dark:fill-swampGreen" />
            <RichText text={text} />
          </div>
        </div>
        <div className="flex w-full justify-center p-8 md:w-1/2 md:justify-end md:p-0">
          <Image
            src={image.sourceUrl as string}
            alt={image.altText as string}
            width={image.mediaDetails?.width as number}
            height={image.mediaDetails?.height as number}
            className="w-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
