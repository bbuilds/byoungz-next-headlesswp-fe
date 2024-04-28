import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import { AboutSection } from "@/src/components";
import { axe } from "vitest-axe";

const text =
  '<p>I&#8217;m a full time <a href="https://brandenbuilds.com" rel="noopener" target="_blank">software developer</a> / web enthusiast and a part-time cosmic wave surfer. I live the digital nomad life and like to share what I&#8217;ve learned along the way. </p>\n';

const image = {
  altText: "Who is BYOUNGZ?",
  sourceUrl:
    "http://byoungzapi.local/wp-content/uploads/2021/06/byoungz-about-1.png",
  mediaDetails: {
    height: 667,
    width: 1000,
  },
};

describe("AboutSection", () => {
  test("renders a AboutSection component", () => {
    const { getByText, getAllByAltText } = render(
      <AboutSection text={text} image={image} />,
    );

    expect(getByText("WHO IS")).toBeTruthy();
    expect(getAllByAltText("Who is BYOUNGZ?")).toBeTruthy();
  });

  test("is accessible", async () => {
    const { container } = render(<AboutSection text={text} image={image} />);
    expect(await axe(container)).toHaveNoViolations();
  });
});
