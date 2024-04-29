import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { InstagramFeed } from "@/src/components";
import { axe } from "vitest-axe";

describe("InstagramFeed", () => {
  test("renders a InstagramFeed component", () => {
    const { getByText } = render(<InstagramFeed>Hello world!</InstagramFeed>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<InstagramFeed>Hello world!</InstagramFeed>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
