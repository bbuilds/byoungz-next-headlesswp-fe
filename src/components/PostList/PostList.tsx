import * as React from "react";
import type { Post } from "@/src/lib/types";
import { CardArticle } from "@/src/components/CardArticle/CardArticle";

export type PostListProps = {
  posts: Post[];
  displayAmount?: 3 | 6 | 9;
  useLoadMore?: boolean;
};

export function PostList({
  posts,
  displayAmount = 3,
  useLoadMore = true,
}: PostListProps) {
  const [list, setList] = React.useState<Post[]>(posts.slice(0, displayAmount));
  const [loadMore, setLoadMore] = React.useState<Boolean>(false);
  const [hasMore, setHasMore] = React.useState<Boolean>(
    posts.length > displayAmount,
  );

  React.useEffect(() => {
    if (loadMore && hasMore) {
      const currentLength = list.length;
      const isMore = currentLength < posts.length;
      const nextResults = isMore
        ? posts.slice(currentLength, currentLength + 3)
        : [];
      setList([...list, ...nextResults]); // Fix: Remove the type assertion
      setLoadMore(false);
    }
  }, [loadMore, hasMore, list, posts]);

  React.useEffect(() => {
    const isMore = list.length < posts.length;
    setHasMore(isMore);
  }, [list, posts]);

  React.useEffect(() => {
    setList([...posts.slice(0, displayAmount)]);
  }, [displayAmount, posts]);

  const handleLoadMore = () => {
    setLoadMore(true);
  };

  return (
    <div data-component="PostList">
      <div className="mb-10 flex items-center justify-between">
        <ul className="grid grid-cols-1 gap-12 md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {list.map((post) => {
            return (
              <li key={post.id}>
                <CardArticle post={post} />
              </li>
            );
          })}
        </ul>
      </div>
      {useLoadMore && (
        <>
          {hasMore ? (
            <div className="my-8 text-center">
              <button onClick={handleLoadMore}>Load More</button>
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
