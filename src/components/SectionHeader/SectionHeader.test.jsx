import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { SectionHeader } from "@/src/components";
import { axe } from "vitest-axe";

describe("SectionHeader", () => {
  test("renders a SectionHeader component", () => {
    const { getByText } = render(<SectionHeader text={"Hello world!"} />);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<SectionHeader text={"Hello world!"} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
