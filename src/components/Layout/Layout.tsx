import * as React from "react";
import type { Menu } from "@/src/lib/types";
import { SiteHeader, MobileNavigation } from "@/src/components";

export type LayoutProps = {
  globalNavigation: Menu;
  children: React.ReactNode;
};

export function Layout({ globalNavigation, children }: LayoutProps) {
  return (
    <div
      data-component="Layout"
      className="flex min-h-screen flex-col antialiased"
    >
      <MobileNavigation globalNavigation={globalNavigation} />
      <SiteHeader globalNavigation={globalNavigation} />
      {children}
    </div>
  );
}

export default Layout;
