import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";

import { GlobalMenuItem } from "@/src/components";

const data = {
  node: {
    uri: "/category/pro-tips-and-guides/",
    label: "Adventure Almanac",
    databaseId: 3745,
    mainMenuIcon: {
      menuIcon: "globe",
    },
  },
};

describe("GlobalMenuItem", () => {
  test("renders a GlobalMenuItem component", () => {
    const { container, getByText } = render(
      <GlobalMenuItem menuItem={data.node} />,
    );

    expect(getByText("Adventure Almanac")).toBeTruthy();
  });
});
