import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { ShareButtons } from "@/src/components";
import { axe } from "vitest-axe";

describe("ShareButtons", () => {
  test("renders a ShareButtons component", () => {
    const { getByText } = render(<ShareButtons>Hello world!</ShareButtons>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<ShareButtons>Hello world!</ShareButtons>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
