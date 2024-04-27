import * as React from "react";
import type { SiteGlobals } from "@/src/lib/types";
import { SiteHeader, MobileNavigation } from "@/src/components";

export type LayoutProps = {
  children: React.ReactNode;
  siteGlobals: SiteGlobals;
};

export function Layout({ children, siteGlobals }: LayoutProps) {
  const globalMainNavigation = siteGlobals.globalMainNavigation;

  return (
    <div
      data-component="Layout"
      className="flex min-h-screen flex-col antialiased"
    >
      <MobileNavigation globalNavigation={globalMainNavigation} />
      <SiteHeader globalNavigation={globalMainNavigation} />
      {children}
    </div>
  );
}

export default Layout;
