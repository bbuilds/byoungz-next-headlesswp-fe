import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { TableOfContents } from "@/src/components";
import { axe } from "vitest-axe";

const string =
  "<h2 class='wp-block-heading'>Staying Sad with Stoicism</h2><h3 class='wp-block-heading'>Meditation</h3><p>The ancient Stoics were big on meditation but were a bit different. They focused more on taking time to take a step back and reflect on their day and interactions with people. Marcus Aurelius, <em>Meditations</em>, is a perfect example of a journal and reflections they called meditations.</p>";

describe("TableOfContents", () => {
  test("renders a TableOfContents component", () => {
    const { getByText } = render(<TableOfContents blogContent={string} />);

    expect(getByText("Top")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<TableOfContents blogContent={string} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
