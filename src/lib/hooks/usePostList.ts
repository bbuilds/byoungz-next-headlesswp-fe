import * as React from "react";
import type { Post, PostConnectionPageInfo } from "@/src/lib/types";
import { getAllPosts, getPostsBySearch } from "@/src/lib/queries";

export const usePostList = (
  initialPosts: Post[],
  initialPageInfo?: PostConnectionPageInfo,
  displayAmount = 3,
  slug?: string,
  isSearching?: boolean,
  searchQuery?: string,
) => {
  const [list, setList] = React.useState<Post[]>(
    initialPosts.slice(0, displayAmount),
  );
  const [endCursor, setEndCursor] = React.useState<string>(
    initialPageInfo?.endCursor || "",
  );
  const [hasMore, setHasMore] = React.useState<boolean>(
    initialPageInfo?.hasNextPage || false,
  );
  const [loading, setLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    const fetchPosts = async () => {
      if (loading && hasMore) {
        const res =
          isSearching && searchQuery
            ? await getPostsBySearch(searchQuery, displayAmount, endCursor)
            : await getAllPosts(slug, displayAmount, endCursor);

        setList((prevList) => [
          ...prevList,
          ...res.edges.map((edge) => edge.node),
        ]);
        setHasMore(res.pageInfo.hasNextPage);
        setEndCursor(res.pageInfo.endCursor || "");
        setLoading(false);
      }
    };

    fetchPosts();
  }, [
    loading,
    hasMore,
    slug,
    displayAmount,
    endCursor,
    isSearching,
    searchQuery,
  ]);

  React.useEffect(() => {
    setList(initialPosts.slice(0, displayAmount));
  }, [initialPosts, displayAmount]);

  React.useEffect(() => {
    setEndCursor(initialPageInfo?.endCursor || "");
    setHasMore(initialPageInfo?.hasNextPage || false);
  }, [initialPageInfo]);

  const handleLoadMore = React.useCallback(() => {
    setLoading(true);
  }, []);

  return { list, hasMore, handleLoadMore, loading };
};

export default usePostList;
