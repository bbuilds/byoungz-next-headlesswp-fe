import { describe, expect, test } from "vitest";
import { render, fireEvent } from "@testing-library/react";
import { SearchForm } from "@/src/components";
import { axe } from "vitest-axe";

describe("SearchForm", () => {
  test("renders a SearchForm component", () => {
    const { getByPlaceholderText, getByRole } = render(<SearchForm />);

    const inputElement = getByPlaceholderText("Search Blog");
    const buttonElement = getByRole("button", { name: /Send Search/i });

    expect(inputElement).toBeTruthy();
    expect(buttonElement).toBeTruthy();
  });

  test("updates search input value on change", () => {
    const { getByPlaceholderText } = render(<SearchForm />);
    const inputElement = getByPlaceholderText("Search Blog");

    fireEvent.change(inputElement, { target: { value: "digital nomad" } });

    expect(inputElement.value).toBe("digital nomad");
  });
  test("is accessible", async () => {
    const { container } = render(<SearchForm />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
