import { describe, expect, test, vi } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { ColorModeToggle } from "@/src/components";
import { ThemeProvider } from "next-themes";
import "@testing-library/jest-dom/vitest";

describe("ColorModeToggle", () => {
  test("renders a ColorModeToggle component", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ColorModeToggle />
      </ThemeProvider>,
    );
    expect(getByRole("button")).toBeTruthy();
  });

  test("toggles the color mode", () => {
    const { getByRole } = render(
      <ThemeProvider>
        <ColorModeToggle />
      </ThemeProvider>,
    );
    const button = getByRole("button");

    expect(button).toHaveAttribute(
      "aria-label",
      "Switch between dark and light mode (currently light)",
    );
    fireEvent.click(button);
    expect(button).toHaveAttribute(
      "aria-label",
      "Switch between dark and light mode (currently dark)",
    );
  });
});
