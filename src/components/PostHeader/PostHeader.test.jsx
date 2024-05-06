import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { PostHeader } from "@/src/components";
import { axe } from "vitest-axe";

describe("PostHeader", () => {
  test("renders a PostHeader component", () => {
    const { getByText } = render(<PostHeader>Hello world!</PostHeader>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<PostHeader>Hello world!</PostHeader>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
