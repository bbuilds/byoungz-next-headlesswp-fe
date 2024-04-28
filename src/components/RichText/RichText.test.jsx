import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { RichText } from "@/src/components";
import { axe } from "vitest-axe";

describe("RichText", () => {
  test("renders a RichText component", () => {
    const { getByText } = render(<RichText text={"testing"} />);

    expect(getByText("testing")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<RichText text={"testing"} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
