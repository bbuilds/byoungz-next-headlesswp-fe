import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { SearchBox } from "@/src/components";
import { axe } from "vitest-axe";

describe("SearchBox", () => {
  test("renders a SearchBox component", () => {
    const { getByText } = render(<SearchBox />);

    expect(getByText("Search Byoungz Posts")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<SearchBox>Hello world!</SearchBox>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
