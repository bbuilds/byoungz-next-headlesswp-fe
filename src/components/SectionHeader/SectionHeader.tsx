import * as React from "react";

export type SectionHeaderProps = {
  text: string;
};

export function SectionHeader({ text }: SectionHeaderProps) {
  return (
    <header data-component="SectionHeader">
      <hr className="mx-0 mb-4 w-24 border-t-2 border-dashed border-white" />
      <h2 className="mb-8 uppercase md:text-3xl">{text}</h2>
    </header>
  );
}

export default SectionHeader;
