import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Breadcrumbs } from "@/src/components";
import { axe } from "vitest-axe";

describe("Breadcrumbs", () => {
  test("renders a Breadcrumbs component", () => {
    const { getByText } = render(<Breadcrumbs>Hello world!</Breadcrumbs>);

    expect(getByText("Hello world!")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<Breadcrumbs>Hello world!</Breadcrumbs>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
