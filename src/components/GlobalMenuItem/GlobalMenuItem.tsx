import * as React from "react";
import { MenuItem } from "@/src/lib/types";
import Link from "next/link";
import GlobeIcon from "@/images/globe.svg";
import GraveIcon from "@/images/grave.svg";
import IllIcon from "@/images/illuminati.svg";
import UfoIcon from "@/images/ufo.svg";

export type GlobalMenuItemProps = {
  menuItem: MenuItem;
  tabIndex?: number;
};

export function GlobalMenuItem({
  menuItem,
  tabIndex = 0,
}: GlobalMenuItemProps) {
  const SvgIcon = (icon: string) => {
    switch (icon) {
      case "globe":
        return <GlobeIcon className="mr-1.5 size-4" />;
      case "grave":
        return <GraveIcon className="mr-1.5 size-4" />;
      case "eye":
        return <IllIcon className="mr-1.5 size-4" />;
      case "ufo":
        return <UfoIcon className="mr-1.5 size-4" />;
      default:
        return null;
    }
  };

  return menuItem.uri ? (
    <Link
      data-component="GlobalMenuItem"
      href={menuItem.uri}
      className="flex h-16 items-center px-3 pr-2 text-offBlack transition-colors duration-200 hover:text-verdunGreen dark:text-white dark:hover:bg-black dark:hover:text-burntOrange lg:h-12"
      tabIndex={tabIndex}
    >
      {SvgIcon(menuItem.mainMenuIcon?.menuIcon || "")}
      <span className="capitalize text-xl lg:text-base">{menuItem.label}</span>
    </Link>
  ) : null;
}

export default GlobalMenuItem;
