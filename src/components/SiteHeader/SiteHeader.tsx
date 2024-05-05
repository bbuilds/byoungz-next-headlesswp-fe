import * as React from "react";
import { Menu, MenuItem } from "@/src/lib/types";
import LogoText from "@/images/logo-text.svg";
import {
  GlobalMenuItem,
  SearchForm,
  ColorModeToggle,
  SmartLink,
} from "@/src/components";

export type SiteHeaderProps = {
  globalNavigation: Menu;
};

export function SiteHeader({ globalNavigation }: SiteHeaderProps) {
  const menuItems = globalNavigation.menuItems?.edges;

  return (
    <header
      id="site-header"
      data-component="SiteHeader"
      className="sticky top-0 z-50 flex items-center border-b border-b-grey-300 px-[2vw] py-2 dark:border-b-grey-600 lg:py-0 print:hidden"
    >
      <SmartLink href="/" classNames="flex items-center lg:mr-8">
        <span className="sr-only">
          Link to homepage of BYOUNGZ Digital Nomad
        </span>
        <LogoText className="h-8 w-auto fill-offBlack dark:fill-swampGreen" />
      </SmartLink>
      <nav className="hidden lg:block" aria-label="desktop navigation">
        <ul className="flex h-12 items-center gap-x-3">
          {menuItems?.map((menuItem, index) => (
            <li key={index}>
              <GlobalMenuItem menuItem={menuItem.node as MenuItem} />
            </li>
          ))}
        </ul>
      </nav>
      <div className="ml-auto hidden items-center lg:flex">
        <SearchForm />
        <div className="border-r border-grey-300 dark:border-grey-600">
          <ColorModeToggle />
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
