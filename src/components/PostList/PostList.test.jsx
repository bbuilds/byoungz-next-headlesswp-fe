import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { PostList } from "@/src/components";
import { axe } from "vitest-axe";

const posts = [
  {
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
  },
  {
    date: "2021-11-24T16:55:11",
    excerpt:
      "<p>This Caribbean paradise is packed full of dope swimming holes that consist of hundreds of waterfalls, rivers, beaches, and more!</p>\n",
    featuredImage: {
      node: {
        altText: "Puerto Rico Waterfalls",
        sourceUrl:
          "http://byoungzapi.local/wp-content/uploads/2021/11/waterfall-puerto-rico.jpeg",
        mediaDetails: {
          width: 1200,
          height: 679,
        },
      },
    },
    id: "cG9zdDozNTM1",
    uri: "/swimming-spots-in-puerto-rico/",
    title: "Dope Swimming Spots in Puerto Rico",
  },
  {
    date: "2021-10-14T17:38:37",
    excerpt:
      "<p>This is a guide to finding what has helped me achieve the goals I set out to do while digging through Stoic teachings and philosophy.</p>\n",
    featuredImage: {
      node: {
        altText: "Modern stoicism pratice of self reflection",
        sourceUrl:
          "http://byoungzapi.local/wp-content/uploads/2021/10/sad-boys-guide-modern-stoicism.jpg",
        mediaDetails: {
          width: 1200,
          height: 675,
        },
      },
    },
    id: "cG9zdDozNTAz",
    uri: "/sad-boys-guide-to-modern-stoicism/",
    title: "Sad Boys Guide to Modern Stoicism",
  },
];

describe("PostList", () => {
  test("renders a PostList component", () => {
    const { getByText, container } = render(
      <PostList posts={posts} displayAmount={3} useLoadMore={false} />,
    );
    //grab posts from container and expect the array to be 3
    expect(container.querySelectorAll("li").length).toBe(3);
    expect(getByText("Dope Swimming Spots in Puerto Rico")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(
      <PostList posts={posts} displayAmount={3} useLoadMore={false} />,
    );
    expect(await axe(container)).toHaveNoViolations();
  });
});
