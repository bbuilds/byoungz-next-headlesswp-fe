import * as React from "react";
import { MenuItem } from "@/src/lib/types";
import Link from "next/link";
import GlobeIcon from "@/images/globe.svg";
import GraveIcon from "@/images/grave.svg";
import IllIcon from "@/images/illuminati.svg";
import UfoIcon from "@/images/ufo.svg";

export type GlobalMenuItemProps = {
  menuItem: MenuItem;
};

export function GlobalMenuItem({ menuItem }: GlobalMenuItemProps) {
  return menuItem.uri ? (
    <li data-component="GlobalMenuItem">
      <Link href={menuItem.uri} className="flex items-center pr-2">
        <span>{menuItem.label}</span>
      </Link>
    </li>
  ) : null;
}

export default GlobalMenuItem;
