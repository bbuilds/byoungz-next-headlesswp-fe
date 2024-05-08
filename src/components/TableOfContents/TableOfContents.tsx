import * as React from "react";
import parse from "html-react-parser";
import { SmartLink } from "@/src/components";

export type TableOfContentsProps = {
  blogContent: string;
};

export function TableOfContents({ blogContent }: TableOfContentsProps) {
  //@TODO Implement active states for the Table of Contents
  const content = parse(blogContent) as JSX.Element[];

  React.useEffect(() => {
    const root = document.documentElement;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = "auto";
    };
  }, []);

  const headings = content
    .filter((node: JSX.Element) =>
      node?.props?.className?.includes("wp-block-heading"),
    )
    .map((node: JSX.Element) => node.props);

  return headings ? (
    <div data-component="TableOfContents">
      <h2 className="font-bold text-lg">Table of Contents</h2>
      <ul className="text-sm">
        <li className="mt-2">
          <SmartLink classNames="hover:dark:text-swampGreen" href="#post-top">
            Top
          </SmartLink>
        </li>
        {headings.map((heading: any, index: number) => (
          <li key={index} className="mt-2">
            <SmartLink
              classNames="hover:dark:text-swampGreen"
              href={`#${heading.id}`}
            >
              {heading.children}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
}

export default TableOfContents;
