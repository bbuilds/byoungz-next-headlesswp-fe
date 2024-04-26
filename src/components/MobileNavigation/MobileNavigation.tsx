import * as React from "react";
import Link from "next/link";
import { Menu, MenuItem } from "@/src/lib/types";
import { GlobalMenuItem, ColorModeToggle } from "@/src/components";
import LogoText from "@/images/logo-text.svg";
export type MobileNavigationProps = {
  globalNavigation: Menu;
};

export function MobileNavigation({ globalNavigation }: MobileNavigationProps) {
  const menuItems = globalNavigation.menuItems?.edges;
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div
      id="mobile-navigation"
      data-component="MobileNavigation"
      className="flex items-end"
    >
      <button
        aria-label={`${isOpen ? "Close" : "Open"} mobile navigation`}
        className={`nav-icon fixed right-[20px] top-[15px] z-[10001] lg:hidden  ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="relative size-full">
          <span
            className={"absolute block w-full bg-black dark:bg-white"}
          ></span>
          <span
            className={"absolute block w-full bg-black dark:bg-white"}
          ></span>
          <span
            className={"absolute block w-full bg-black dark:bg-white"}
          ></span>
          <span
            className={"absolute block w-full bg-black dark:bg-white"}
          ></span>
        </div>
      </button>
      <div
        className={`fixed inset-0 z-[1000] ${isOpen ? "pointer-events-auto" : "pointer-events-none"}`}
      >
        <button
          aria-hidden="true"
          tabIndex={-1}
          className={`absolute inset-0 z-10 h-screen w-screen bg-blurredBlack backdrop-blur transition-opacity duration-200 ease-in-out ${isOpen ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsOpen(false)}
        ></button>
        <nav
          aria-label="mobile navigation"
          className="absolute left-0 top-[50px] z-20 flex w-2/3 flex-col"
        >
          <ul className="flex flex-col">
            <li
              style={{
                transitionDelay: "100ms",
                transitionDuration: "100ms",
                transitionProperty: "opacity, transform",
                transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
                opacity: isOpen ? 1 : 0,
                transform: `translateX(${isOpen ? 0 : -100}%)`,
              }}
            >
              <Link
                href="/"
                className="flex items-center p-3"
                tabIndex={isOpen ? 0 : -1}
              >
                <span className="sr-only">
                  Link to homepage of BYOUNGZ Digital Nomad
                </span>
                <LogoText className="h-8 w-auto fill-offBlack dark:fill-swampGreen" />
              </Link>
            </li>
            {menuItems?.map((menuItem, index) => (
              <li
                key={index}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  transitionDuration: "500ms",
                  transitionProperty: "opacity, transform",
                  transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
                  opacity: isOpen ? 1 : 0,
                  transform: `translateX(${isOpen ? 0 : -100}%)`,
                }}
              >
                <GlobalMenuItem
                  menuItem={menuItem.node as MenuItem}
                  tabIndex={isOpen ? 0 : -1}
                />
              </li>
            ))}
          </ul>
          {/* TODO Soscial media */}
          <div
            className="p-3"
            style={{
              transitionDelay: "450ms",
              transitionDuration: "500ms",
              transitionProperty: "opacity, transform",
              transitionTimingFunction: "cubic-bezier(0.19, 1, 0.22, 1)",
              opacity: isOpen ? 1 : 0,
              transform: `translateX(${isOpen ? 0 : -100}%)`,
            }}
          >
            <ColorModeToggle tabIndex={isOpen ? 0 : -1} />
          </div>
        </nav>
      </div>
    </div>
  );
}

export default MobileNavigation;
