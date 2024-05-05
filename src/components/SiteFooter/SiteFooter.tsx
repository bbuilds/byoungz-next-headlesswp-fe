import * as React from "react";
import { SmartLink } from "@/src/components";
import LogoText from "@/images/logo-text.svg";
import FacebookIcon from "@/images/facebook.svg";
import InstagramIcon from "@/images/instagram.svg";
import { SOCIAL_MEDIA_URLS } from "@/src/lib/constants";

export function SiteFooter() {
  return (
    <footer data-component="SiteFooter" className="bg-grey-500 py-8 text-sm">
      <div className="mx-auto max-w-5xl px-4">
        <div className="lg:flex lg:items-end  lg:justify-between">
          <div className="mb-8 text-center lg:mb-0 lg:text-left">
            <SmartLink href="/" classNames="text-white">
              <LogoText className="mx-auto mb-4 size-auto max-w-[10.9375rem] dark:fill-swampGreen md:ml-0" />
              <span className="sr-only">BYOUNGZ Logo links to home page.</span>
            </SmartLink>
            <span className="flex">
              {`© ${new Date().getFullYear()} BYOUNGZ Digital Nomad.`}
            </span>
          </div>
          <div className="text-center lg:w-1/4 lg:text-left">
            <div className="mb-4 flex justify-center gap-x-2 lg:justify-end">
              <SmartLink href={SOCIAL_MEDIA_URLS.FACEBOOK}>
                <FacebookIcon className="h-auto w-10 dark:fill-swampGreen" />
                <span className="sr-only">Link to Byoungz Facebook</span>
              </SmartLink>
              <SmartLink href={SOCIAL_MEDIA_URLS.INSTAGRAM}>
                <InstagramIcon className="h-auto w-10 dark:fill-swampGreen" />
                <span className="sr-only">Link to Byoungz Instagram</span>
              </SmartLink>
            </div>
            <nav>
              <ul className="flex list-none justify-center space-x-4 lg:justify-end">
                <li>
                  <SmartLink classNames="underline" href="/privacy-policy">
                    Privacy Policy
                  </SmartLink>
                </li>
                <li>
                  <SmartLink classNames="underline" href="/sitemap">
                    Sitemap
                  </SmartLink>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
