import { describe, expect, test } from "vitest";

import { isExternalLink } from "@/src/lib/utils";

describe("isExternalLink", () => {
  test("detects external link", () => {
    const response = isExternalLink("https://google.com");

    expect(response).toBe(true);
  });
  test("detects internal link", () => {
    const response = isExternalLink("/foo/bar");

    expect(response).toBe(false);
  });
});
