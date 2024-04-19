import { describe, expect, test } from "vitest";
import { render, act } from "@testing-library/react";
import { MobileNavigation } from "@/src/components";
import { axe } from "vitest-axe";

const globalNavigation = {
  menuItems: {
    edges: [
      {
        node: {
          uri: "/category/pro-tips-and-guides/",
          label: "Adventure Almanac",
          databaseId: 3745,
          mainMenuIcon: {
            menuIcon: "globe",
          },
        },
      },
      {
        node: {
          uri: "/category/shadow-work/",
          label: "Shadow Work",
          databaseId: 3746,
          mainMenuIcon: {
            menuIcon: "eye",
          },
        },
      },
      {
        node: {
          uri: "/blog",
          label: "All Posts",
          databaseId: 3747,
          mainMenuIcon: {
            menuIcon: "ufo",
          },
        },
      },
      {
        node: {
          uri: "/contact/",
          label: "Contact",
          databaseId: 3748,
          mainMenuIcon: {
            menuIcon: "grave",
          },
        },
      },
    ],
  },
};

describe("MobileNavigation", () => {
  //@TODO fix the test https://reactjs.org/link/wrap-tests-with-act
  test("renders a MobileNavigation component", () => {
    const { getByText } = render(
      <MobileNavigation globalNavigation={globalNavigation} />,
    );

    globalNavigation.menuItems.edges.forEach(({ node }) => {
      let { label, uri } = node;
      const link = getByText(label);
      expect(link).toBeTruthy();
      //remove the trailing / from the uri
      uri = uri.replace(/\/$/, "");
      expect(link.closest("a")).toHaveAttribute("href", `${uri}`);
    });
  });

  test("is accessible", async () => {
    const { container } = render(
      <MobileNavigation globalNavigation={globalNavigation} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
