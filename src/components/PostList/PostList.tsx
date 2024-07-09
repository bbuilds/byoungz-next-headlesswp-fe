import * as React from "react";
import type { Post, PostConnectionPageInfo } from "@/src/lib/types";
import { CardArticle } from "@/src/components/CardArticle/CardArticle";
import { getAllPosts } from "@/src/lib/queries";

export type PostListProps = {
  posts: Post[];
  initialPageInfo?: PostConnectionPageInfo;
  displayAmount?: 3 | 6 | 9;
  useLoadMore?: boolean;
  slug?: string;
};

export function PostList({
  posts,
  initialPageInfo,
  displayAmount = 3,
  useLoadMore = true,
  slug,
}: PostListProps) {
  const [list, setList] = React.useState<Post[]>(posts.slice(0, displayAmount));
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
        const res = await getAllPosts(slug, displayAmount, endCursor);
        setList((prevList) => [...prevList, ...res.nodes]);
        setHasMore(res.pageInfo.hasNextPage);
        setEndCursor(res.pageInfo.endCursor || "");
        setLoading(false);
      }
    };
    fetchPosts();
  }, [loading, hasMore, slug, displayAmount, endCursor]);

  const handleLoadMore = React.useCallback(() => {
    setLoading(true);
  }, []);

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
