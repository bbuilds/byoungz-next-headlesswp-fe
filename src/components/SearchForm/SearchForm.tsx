import * as React from "react";
import MagnifyingGlass from "@/images/magnifying-glass.svg";

export type SearchFormProps = {
  text?: string;
};

export function SearchForm({ text }: SearchFormProps) {
  const [searchVal, setSearchVal] = React.useState("");

  return (
    <form
      data-component="SearchForm"
      role="search"
      action="/blog"
      method="GET"
      className="flex h-12 items-center border-x border-grey-300 pl-3 dark:border-grey-600"
    >
      <label htmlFor="default-search" className="sr-only">
        Search Digital Nomad Blog
      </label>
      <div className="flex items-center">
        <input
          type="search"
          id="default-search"
          name="q"
          className="bg-transparent px-2 text-sm"
          placeholder="Search Blog"
          required={true}
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center p-3 text-black transition-colors duration-200 dark:text-white dark:hover:bg-black"
        >
          <span className="sr-only">Send Search</span>
          <MagnifyingGlass className="size-5" />
        </button>
      </div>
      {text}
    </form>
  );
}

export default SearchForm;
