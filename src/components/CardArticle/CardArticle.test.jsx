import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { CardArticle } from "@/src/components";
import { axe } from "vitest-axe";

const post = {
  date: "2021-12-13T20:17:00",
  excerpt:
    "<p>Puerto Rico is slept on when it comes to hiking and mountian adventures. Everyone knows of easy waterfals and beautiful beaches. </p>\n",
  featuredImage: {
    node: {
      altText: "on top of Cerro el Rodadero Puerto Rico",
      sourceUrl:
        "http://byoungzapi.local/wp-content/uploads/2022/01/cerro-el-rodadero.jpg",
      mediaDetails: {
        width: 1000,
        height: 562,
      },
    },
  },
  id: "cG9zdDozNjY4",
  uri: "/10-favorite-day-trips-in-puerto-rico/",
  title: "10 Favorite Day Trips in Puerto Rico",
};

describe("CardArticle", () => {
  test("renders a CardArticle component", () => {
    const { getByText, getByAltText } = render(<CardArticle post={post} />);

    expect(getByText("10 Favorite Day Trips in Puerto Rico")).toBeTruthy();
    expect(
      getByAltText("on top of Cerro el Rodadero Puerto Rico"),
    ).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<CardArticle post={post} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
