import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { Breadcrumbs } from "@/src/components";
import { axe } from "vitest-axe";

const breadcrumbs = [
  {
    text: "Home",
    url: "http://byoungzapi.local/",
  },
  {
    text: "Dope Swimming Spots in Puerto Rico",
    url: "http://byoungzapi.local/swimming-spots-in-puerto-rico/",
  },
];

describe("Breadcrumbs", () => {
  test("renders a Breadcrumbs component", () => {
    const { getByText } = render(<Breadcrumbs links={breadcrumbs} />);

    expect(getByText("Dope Swimming Spots in Puerto Rico")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<Breadcrumbs links={breadcrumbs} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
