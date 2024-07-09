import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { PostHeader } from "@/src/components";
import { axe } from "vitest-axe";

const data = {
  title: "Dope Swimming Spots in Puerto Rico",
  breadcrumbs: [
    {
      text: "Home",
      url: "http://byoungzapi.local/",
    },
    {
      text: "Dope Swimming Spots in Puerto Rico",
      url: "http://byoungzapi.local/swimming-spots-in-puerto-rico/",
    },
  ],
  date: "2021-09-01",
  categories: [
    {
      name: "Travel",
      url: "http://byoungzapi.local/category/travel/",
    },
  ],
};

describe("PostHeader", () => {
  test("renders a PostHeader component", () => {
    const { getByText } = render(
      <PostHeader
        title={data.title}
        breadcrumbs={data.breadcrumbs}
        travelData={data.date}
        categories={data.categories}
      />,
    );
    expect(getByText("Dope Swimming Spots in Puerto Rico")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(
      <PostHeader
        title={data.title}
        breadcrumbs={data.breadcrumbs}
        travelData={data.date}
        categories={data.categories}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
