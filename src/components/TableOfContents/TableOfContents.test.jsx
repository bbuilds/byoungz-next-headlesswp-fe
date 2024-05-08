import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { TableOfContents } from "@/src/components";
import { axe } from "vitest-axe";

describe("TableOfContents", () => {
  test("renders a TableOfContents component", () => {
    const { getByText } = render(<TableOfContents>Hello world!</TableOfContents>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<TableOfContents>Hello world!</TableOfContents>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
