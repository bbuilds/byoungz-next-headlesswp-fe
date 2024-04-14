import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { GlobalMenuItem } from "@/src/components";
import { axe } from "vitest-axe";
import { act } from "react-dom/test-utils";

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
    const { getByText } = render(<GlobalMenuItem menuItem={data.node} />);

    expect(getByText("Adventure Almanac")).toBeTruthy();
  });
  test("is accessible", async () => {
    act(async () => {
      const { container } = render(<GlobalMenuItem menuItem={data.node} />);
      expect(await axe(container)).toHaveNoViolations();
    });
  });
});
