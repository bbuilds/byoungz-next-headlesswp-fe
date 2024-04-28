import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { RichText } from "@/src/components";
import { axe } from "vitest-axe";

describe("RichText", () => {
  test("renders a RichText component", () => {
    const { getByText } = render(<RichText>Hello world!</RichText>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<RichText>Hello world!</RichText>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
