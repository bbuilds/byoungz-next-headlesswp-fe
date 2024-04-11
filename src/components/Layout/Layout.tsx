import * as React from "react";
import type { Menu } from "@/lib/types";
import { SiteHeader } from "@/components";

export type LayoutProps = {
  globalNavigation: Menu;
  children: React.ReactNode;
};

export function Layout({ globalNavigation, children }: LayoutProps) {
  return (
    <div data-component="Layout">
      <SiteHeader globalNavigation={globalNavigation} />
      <main>{children}</main>
    </div>
  );
}

export default Layout;
