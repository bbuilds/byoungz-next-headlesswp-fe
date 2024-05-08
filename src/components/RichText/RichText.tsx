import * as React from "react";
import { SmartLink } from "@/src/components";
import parse, { Element, domToReact } from "html-react-parser";

export type RichTextProps = {
  text: string;
};

const parser = (input: string) =>
  parse(input, {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.attribs) {
        switch (domNode.name) {
          case "a":
            return (
              <SmartLink
                href={domNode.attribs.href}
                classNames={"anchor-hover"}
              >
                {domToReact(domNode.children as Element[])}
              </SmartLink>
            );
        }
      }
    },
  });

export function RichText({ text }: RichTextProps) {
  const ref = React.useRef(null);
  return (
    <div ref={ref} data-component="RichText" className="richtext">
      {parser(text)}
    </div>
  );
}

export default RichText;
