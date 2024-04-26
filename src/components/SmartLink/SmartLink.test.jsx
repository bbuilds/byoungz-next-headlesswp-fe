import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { SmartLink } from "@/src/components";
import { axe } from "vitest-axe";

describe("SmartLink", () => {
  test("renders a SmartLink component with external link", () => {
    const { getByText } = render(
      <SmartLink href="https://brandenbuilds.com">Hello world!</SmartLink>,
    );
    const link = getByText("Hello world!");
    expect(link).toBeTruthy();
    expect(link.nodeName).toBe("A");
    expect(link.getAttribute("href")).toBe("https://brandenbuilds.com");
    expect(link.getAttribute("target")).toBe("_blank");
  });

  test("renders a SmartLink component with internal link", () => {
    const { container, getByText } = render(
      <SmartLink href="/hello-world">Hello world!</SmartLink>,
    );

    const link = getByText("Hello world!");

    expect(link).toBeInTheDocument();
    expect(link.nodeName).toBe("A");
    expect(link.getAttribute("href")).toBe("/hello-world");
    expect(link.getAttribute("target")).toBeNull();
  });

  test("is accessible", async () => {
    const { container } = render(
      <SmartLink href="https://brandenbuilds.com">Hello world!</SmartLink>,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
