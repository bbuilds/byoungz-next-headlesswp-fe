import { Menu } from "@/lib/types";
import * as React from "react";

export type SiteHeaderProps = {
  globalNavigation: Menu;
};

export function SiteHeader({ globalNavigation }: SiteHeaderProps) {
  console.log("globalNavigation", globalNavigation);
  return (
    <header id="site-header" data-component="SiteHeader">
      <p>hello</p>
    </header>
  );
}

export default SiteHeader;
