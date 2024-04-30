import * as React from "react";
import { SectionHeader, PostList } from "@/src/components";
import type { Post } from "@/src/lib/types";

export type RecentPostsSectionProps = {
  title: string;
  posts: Post[];
};

export function RecentPostsSection({ title, posts }: RecentPostsSectionProps) {
  return (
    <section data-component="RecentPostsSection">
      <div className="container mx-auto">
        <SectionHeader text={title} />
        <PostList posts={posts} displayAmount={3} useLoadMore={false} />
      </div>
    </section>
  );
}

export default RecentPostsSection;
