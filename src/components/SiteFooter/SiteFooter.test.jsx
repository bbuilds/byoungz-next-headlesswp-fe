import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { SiteFooter } from "@/src/components";
import { axe } from "vitest-axe";

describe("SiteFooter", () => {
  test("renders a SiteFooter component", () => {
    const { getByText } = render(<SiteFooter />);

    expect(getByText("Link to Byoungz Instagram")).toBeTruthy();
    expect(getByText("Link to Byoungz Facebook")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<SiteFooter />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
