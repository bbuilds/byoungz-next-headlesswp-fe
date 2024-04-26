import { GetStaticProps } from "next";
import { getMenuBySlug, getHomepageEntry } from "@/src/lib/queries";
import type { Menu, Page, Post } from "@/src/lib/types";
import { Layout, HomePageFeaturedPosts } from "@/src/components";

interface HomeProps {
  globalNavigation: Menu;
  entry: Page;
}

export default function Home({ globalNavigation, entry }: HomeProps) {
  const featuredPost = entry.homePageTemplate?.homeFeaturedPost;
  const secondaryPosts = entry.homePageTemplate?.homeSecondaryPosts;

  return (
    <Layout globalNavigation={globalNavigation}>
      <main
        className={`flex min-h-screen flex-col items-center justify-between font-noto-sans`}
      >
        <h1 className="sr-only">BYOUNGZ Digital Nomad and Shadow Work Blog</h1>
        {featuredPost && secondaryPosts && (
          <HomePageFeaturedPosts
            featuredPost={featuredPost}
            secondaryPosts={secondaryPosts as Post[]}
          />
        )}
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const globalNavigation = await getMenuBySlug("main-nav");
  const entry = await getHomepageEntry();

  return {
    props: { globalNavigation, entry },
    revalidate: 10,
  };
};
