import * as React from "react";
import type { SiteGlobals, Page, Post } from "@/src/lib/types";
import {
  SiteHeader,
  MobileNavigation,
  Meta,
  SiteFooter,
} from "@/src/components";

export type LayoutProps = {
  children: React.ReactNode;
  siteGlobals: SiteGlobals;
  entry: Page | Post;
};

export function Layout({ children, siteGlobals, entry }: LayoutProps) {
  const globalMainNavigation = siteGlobals.globalMainNavigation;

  return (
    <div
      data-component="Layout"
      className="flex min-h-screen flex-col antialiased"
    >
      <Meta siteGlobals={siteGlobals} entry={entry} />
      <MobileNavigation globalNavigation={globalMainNavigation} />
      <SiteHeader globalNavigation={globalMainNavigation} />
      <main
        className={`flex min-h-screen flex-col items-center justify-between font-noto-sans`}
      >
        {children}
      </main>
      <SiteFooter />
    </div>
  );
}

export default Layout;
