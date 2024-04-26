import { describe, expect, test } from "vitest";

import { formatDateLocale } from "@/src/lib/utils";

describe("formatDateLocale", () => {
  test("executes successfully", () => {
    const response = formatDateLocale("2021-08-24T16:58:00");

    expect(response).toBe("August 24, 2021");
  });
});
