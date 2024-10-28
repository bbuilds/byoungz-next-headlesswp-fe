import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { SchemaMarkup } from "@/src/components";
import { axe } from "vitest-axe";

describe("SchemaMarkup", () => {
  test("renders a SchemaMarkup component", () => {
    const { getByText } = render(<SchemaMarkup>Hello world!</SchemaMarkup>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<SchemaMarkup>Hello world!</SchemaMarkup>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
