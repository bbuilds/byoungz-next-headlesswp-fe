import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { HomePageFeaturedPosts } from "@/src/components";
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

const secondaryPosts = [
  {
    title: "Devil's Bathtub: Virginia's Famous Bathtub",
    modified: "2021-11-25T13:46:30",
    date: "2021-03-04T20:01:00",
    uri: "/devils-bathtub-virginia/",
    featuredImage: {
      node: {
        altText: "Devil's Bathtub located in Southwestern Virginia",
        sourceUrl:
          "http://byoungzapi.local/wp-content/uploads/2021/08/devilsbathtub-featured.jpeg",
        mediaDetails: {
          height: 788,
          width: 1400,
        },
      },
    },
    categories: {
      nodes: [
        {
          name: "Adventure Journal",
        },
      ],
    },
  },
  {
    title: "Sad Boys Guide to Lucid Dreaming",
    modified: "2021-11-25T13:46:29",
    date: "2021-09-21T14:38:00",
    uri: "/sad-boys-guide-to-lucid-dreaming/",
    featuredImage: {
      node: {
        altText: "Lucid Dreaming Neon Sign",
        sourceUrl:
          "http://byoungzapi.local/wp-content/uploads/2021/09/it-was-all-a-lucid-dream-neon.jpg",
        mediaDetails: {
          height: 675,
          width: 1200,
        },
      },
    },
    categories: {
      nodes: [
        {
          name: "Shadow Work",
        },
      ],
    },
  },
];

describe("HomePageFeaturedPosts", () => {
  test("renders a HomePageFeaturedPosts component", () => {
    const { getByText } = render(
      <HomePageFeaturedPosts
        featuredPost={featuredPost}
        secondaryPosts={secondaryPosts}
      />,
    );

    expect(getByText("San Juan Hit List")).toBeTruthy();
    expect(
      getByText("Devil's Bathtub: Virginia's Famous Bathtub"),
    ).toBeTruthy();
    expect(getByText("Sad Boys Guide to Lucid Dreaming")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(
      <HomePageFeaturedPosts
        featuredPost={featuredPost}
        secondaryPosts={secondaryPosts}
      />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
