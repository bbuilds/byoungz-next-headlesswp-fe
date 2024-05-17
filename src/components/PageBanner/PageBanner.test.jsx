import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { PageBanner } from "@/src/components";
import { axe } from "vitest-axe";

describe("PageBanner", () => {
  test("renders a PageBanner component", () => {
    const { getByText } = render(<PageBanner>Hello world!</PageBanner>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<PageBanner>Hello world!</PageBanner>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
