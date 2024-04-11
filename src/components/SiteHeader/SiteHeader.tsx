import * as React from "react";
import Link from "next/link";
import { Menu } from "@/lib/types";
import LogoHand from "@/images/logo-hand.svg";
import LogoText from "@/images/logo-text.svg";

export type SiteHeaderProps = {
  globalNavigation: Menu;
};

export function SiteHeader({ globalNavigation }: SiteHeaderProps) {
  const menuItems = globalNavigation.menuItems?.edges;
  console.log("menuItems", menuItems);

  return (
    <header id="site-header" data-component="SiteHeader">
      <nav>
        <ul>
          <li>
            <Link href="/" className="flex items-center pr-2">
              <span className="sr-only">
                Link to homepage of BYOUNGZ Digital Nomad
              </span>
              <LogoHand className="mr-2 h-auto w-6 fill-black md:w-8 dark:fill-swampGreen" />
              <LogoText className="h-12 w-auto fill-black dark:fill-swampGreen" />
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default SiteHeader;
