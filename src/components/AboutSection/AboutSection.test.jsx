import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { AboutSection } from "@/src/components";
import { axe } from "vitest-axe";

describe("AboutSection", () => {
  test("renders a AboutSection component", () => {
    const { getByText } = render(<AboutSection>Hello world!</AboutSection>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<AboutSection>Hello world!</AboutSection>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
