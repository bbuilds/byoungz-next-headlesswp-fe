import * as React from "react";
import type { Post, PostConnectionPageInfo } from "@/src/lib/types";
import { CardArticle } from "@/src/components/CardArticle/CardArticle";
import { usePostList } from "@/src/lib/hooks";

export type PostListProps = {
  posts: Post[];
  initialPageInfo?: PostConnectionPageInfo;
  displayAmount?: 3 | 6 | 9;
  useLoadMore?: boolean;
  slug?: string;
  isSearching?: boolean;
  searchQuery?: string;
};

export function PostList({
  posts,
  initialPageInfo,
  displayAmount = 3,
  useLoadMore = true,
  slug,
  isSearching,
  searchQuery,
}: PostListProps) {
  const { list, hasMore, handleLoadMore } = usePostList(
    posts,
    initialPageInfo,
    displayAmount,
    slug,
    isSearching,
    searchQuery,
  );

  return (
    <div data-component="PostList">
      <div className="mb-10 flex items-center justify-between">
        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {list.map((post) => (
            <li key={post.id}>
              <CardArticle post={post} />
            </li>
          ))}
        </ul>
      </div>
      {useLoadMore && (
        <>
          {hasMore ? (
            <div className="my-8 text-center">
              <button className="decor-link" onClick={handleLoadMore}>
                Load More
              </button>
            </div>
          ) : (
            <p className="text-center">No more posts</p>
          )}
        </>
      )}
    </div>
  );
}

export default PostList;
