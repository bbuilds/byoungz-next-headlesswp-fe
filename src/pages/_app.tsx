import * as React from "react";
import "@/src/styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";
import { a11yReport } from "@/src/lib/utils";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

//Adds report to console in dev mode if there are accessibility issues
void a11yReport(React);
