import * as React from "react";
import parse from "html-react-parser";
import { SmartLink } from "@/src/components";

export type TableOfContentsProps = {
  blogContent: string;
};

export function TableOfContents({ blogContent }: TableOfContentsProps) {
  const content = parse(blogContent) as JSX.Element[];

  const headings = content
    .filter((node: JSX.Element) =>
      node?.props?.className?.includes("wp-block-heading"),
    )
    .map((node: JSX.Element) => node.props);

  return headings ? (
    <div data-component="TableOfContents">
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading: any, index: number) => (
          <li key={index}>
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
