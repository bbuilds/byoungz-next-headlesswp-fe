import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { PageBanner } from "@/src/components";
import { axe } from "vitest-axe";

describe("PageBanner", () => {
  test("renders a PageBanner component", () => {
    const { getByText } = render(<PageBanner title="Hello world!" />);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<PageBanner title="Hello world!" />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
