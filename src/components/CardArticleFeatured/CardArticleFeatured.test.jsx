import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { CardArticleFeatured } from "@/src/components";
import { axe } from "vitest-axe";

const featuredPost = {
  title: "San Juan Hit List",
  date: "2021-08-24T16:58:00",
  uri: "/san-juan-hit-list/",
  categories: {
    nodes: [
      {
        name: "Tips and Guides",
      },
    ],
  },
  featuredImage: {
    node: {
      altText: "San Juan Puerto Rico Flag",
      sourceUrl:
        "http://byoungzapi.local/wp-content/uploads/2021/10/san-juan-puerto-rico-hit-list.jpeg",
      mediaDetails: {
        height: 564,
        width: 1000,
      },
    },
  },
  modified: "2021-11-25T13:46:30",
};

describe("CardArticleFeatured", () => {
  test("renders a CardArticleFeatured component", () => {
    const { getByText } = render(
      <CardArticleFeatured
        featuredImage={postMessage.featuredImage}
        categories={featuredPost.categories?.nodes}
        date={featuredPost.date}
        uri={featuredPost.uri}
        title={featuredPost.title}
      />,
    );

    expect(getByText("San Juan Hit List")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(
      <CardArticleFeatured
        featuredImage={postMessage.featuredImage}
        categories={featuredPost.categories?.nodes}
        date={featuredPost.date}
        uri={featuredPost.uri}
        title={featuredPost.title}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
