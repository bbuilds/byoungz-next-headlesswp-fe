import * as React from "react";
import MagnifyingGlass from "@/images/magnifying-glass.svg";

export type SearchBoxProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  handleSearchFormSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function SearchBox({
  searchQuery,
  setSearchQuery,
  handleSearchFormSubmit,
}: SearchBoxProps) {
  return (
    <div data-component="SearchBox" className="w-full">
      <div className="relative">
        <form onSubmit={handleSearchFormSubmit}>
          <label
            htmlFor="search-input"
            className="mb-4 block font-grenze text-xl lg:mb-8 lg:text-3xl"
          >
            Search Byoungz Posts
          </label>
          <div className="flex items-center">
            <input
              name="search-input"
              id="search-input"
              type="search"
              className="w-full rounded border border-grey-300 bg-white px-2 py-4 leading-normal text-offBlack text-base"
              placeholder={"Search Byoungz"}
              required={true}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button
              type="submit"
              className="flex items-center p-3 text-black transition-colors duration-200 dark:text-white dark:hover:bg-black"
            >
              <span className="sr-only">Send Search</span>
              <MagnifyingGlass className="size-5" aria-hidden={true} />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
