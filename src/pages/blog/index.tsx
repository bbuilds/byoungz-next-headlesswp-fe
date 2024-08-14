import * as React from "react";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import {
  getGlobals,
  getAllPostsEntry,
  getPostsBySearch,
  getAllPosts,
} from "@/src/lib/queries";
import type { SiteGlobals, Page, Post, PostConnection } from "@/src/lib/types";
import { Layout, SearchBox, PostList, PageBanner } from "@/src/components";

interface BlogIndexProps {
  entry: Page;
  siteGlobals: SiteGlobals;
  postsData: PostConnection;
}

export default function BlogIndex({
  entry,
  siteGlobals,
  postsData,
}: BlogIndexProps) {
  const router = useRouter();
  const initialQuery = (router.query.q as string) || "";
  const [searchQuery, setSearchQuery] = React.useState(initialQuery);
  const [isSearching, setIsSearching] = React.useState(false);
  const [queryResultsPosts, setQueryResultsPosts] = React.useState<Post[]>(
    postsData?.edges?.map((edge) => edge.node) ?? [],
  );
  const [pageInfo, setPageInfo] = React.useState(postsData?.pageInfo);
  const [searchForText, setSearchForText] = React.useState("");

  const fetchPosts = async (searchQuery: string) => {
    setIsSearching(true);
    const res = await getPostsBySearch(searchQuery, 9);
    const posts = res.edges?.map((edge) => edge.node) ?? [];
    setQueryResultsPosts(posts);
    setPageInfo(res.pageInfo);
  };

  const handleSearchFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.length === 0) return;
    fetchPosts(searchQuery);
    setSearchForText(searchQuery);
    router.push({
      pathname: router.pathname,
      query: { q: searchQuery },
    });
  };

  const resetSearch = () => {
    setSearchQuery("");
    setQueryResultsPosts(postsData?.edges?.map((edge) => edge.node) ?? []);
    setPageInfo(postsData?.pageInfo);
    setIsSearching(false);
    setSearchForText("");
    router.push({
      pathname: router.pathname,
      query: {},
    });
  };

  React.useEffect(() => {
    if (initialQuery) {
      fetchPosts(initialQuery);
      setSearchForText(initialQuery);
    }
  }, [initialQuery]);

  return (
    <Layout siteGlobals={siteGlobals} entry={entry}>
      <PageBanner title="All Blog Posts" subtitle={searchForText} />
      <div className="container mx-auto w-full space-y-10 py-10 lg:space-y-20 lg:py-20">
        <section>
          <SearchBox
            searchQuery={searchQuery}
            handleSearchFormSubmit={handleSearchFormSubmit}
            setSearchQuery={setSearchQuery}
            handleResetSearch={resetSearch}
          />
        </section>
        <section>
          <PostList
            posts={queryResultsPosts}
            displayAmount={9}
            initialPageInfo={pageInfo}
            isSearching={isSearching}
            searchQuery={searchQuery}
          />
        </section>
      </div>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const [siteGlobals, postsData, entry] = await Promise.all([
    getGlobals(),
    getAllPosts("", 9),
    getAllPostsEntry(),
  ]);

  return {
    props: {
      entry,
      siteGlobals,
      postsData,
    },
    revalidate: 10,
  };
};
