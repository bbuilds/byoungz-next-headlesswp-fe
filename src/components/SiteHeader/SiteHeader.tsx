import * as React from "react";
import Link from "next/link";
import { Menu, MenuItem } from "@/src/lib/types";
import LogoHand from "@/images/logo-hand.svg";
import LogoText from "@/images/logo-text.svg";
import { GlobalMenuItem, SearchForm } from "@/src/components";

export type SiteHeaderProps = {
  globalNavigation: Menu;
};

export function SiteHeader({ globalNavigation }: SiteHeaderProps) {
  const menuItems = globalNavigation.menuItems?.edges;

  return (
    <header
      id="site-header"
      data-component="SiteHeader"
      className="relative flex items-center justify-between border-b border-b-grey-300 px-[2vw] dark:border-b-grey-600 print:hidden"
    >
      <nav>
        <ul className="flex h-12 items-center gap-x-3">
          <li>
            <Link href="/" className="flex items-center">
              <span className="sr-only">
                Link to homepage of BYOUNGZ Digital Nomad
              </span>
              <LogoText className="h-8 w-auto fill-offBlack dark:fill-swampGreen" />
            </Link>
          </li>
          {menuItems?.map((menuItem, index) => (
            <li key={index}>
              <GlobalMenuItem menuItem={menuItem.node as MenuItem} />
            </li>
          ))}
        </ul>
      </nav>
      <div>
        <SearchForm />
      </div>
    </header>
  );
}

export default SiteHeader;
