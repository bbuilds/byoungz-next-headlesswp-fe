import * as React from "react";
import { useTheme } from "next-themes";
import MoonIcon from "@/images/moon.svg";
import SunIcon from "@/images/sun.svg";

export function ColorModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  //https://github.com/pacocoursey/next-themes?tab=readme-ov-file#avoid-hydration-mismatch
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) {
    return null;
  }

  return (
    <div data-component="ColorModeToggle">
      <button
        onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        aria-live="polite"
        aria-label={`Switch between dark and light mode (currently ${resolvedTheme})`}
        className={`border-x border-grey-300 p-3 transition-colors duration-200 dark:border-grey-600 dark:hover:bg-black ${resolvedTheme === "dark" ? "text-white" : "text-black"}`}
      >
        {resolvedTheme === "dark" ? (
          <SunIcon className="size-6" />
        ) : (
          <MoonIcon className="size-6" />
        )}
      </button>
    </div>
  );
}

export default ColorModeToggle;
