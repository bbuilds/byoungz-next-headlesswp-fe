import { beforeAll, vi } from "vitest";
import "@testing-library/jest-dom/vitest";
import * as matchers from "vitest-axe/matchers";
import { expect } from "vitest";

expect.extend(matchers);

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated but needed
    removeListener: vi.fn(), // deprecated but needed
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

beforeAll(() => {
  vi.mock("next/router", () => {
    return {
      useRouter: () => ({
        asPath: "/",
        route: "/",
        pathname: "/",
        query: {},
        isFallback: false,
      }),
    };
  });
});
