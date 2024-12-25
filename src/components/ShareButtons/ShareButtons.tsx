import * as React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
  EmailShareButton,
  EmailIcon,
} from "next-share";

export interface ShareButtonsProps {
  url: string;
  quote: string;
  title: string;
}

export function ShareButtons({ title, url, quote }: ShareButtonsProps) {
  return (
    <div data-component="ShareButtons" className="flex items-center gap-x-4">
      <span className="text-base">Share:</span>
      <FacebookShareButton url={url} quote={quote}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <RedditShareButton url={url} title={title}>
        <RedditIcon size={32} round />
      </RedditShareButton>
      <TwitterShareButton url={url} title={title}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <EmailShareButton
        url={url}
        subject={`Read this article: ${title}`}
        body={quote}
      >
        <EmailIcon size={32} round />
      </EmailShareButton>
    </div>
  );
}

export default ShareButtons;
