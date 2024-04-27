import { GetStaticProps } from "next";
import { getHomepageEntry, getGlobals } from "@/src/lib/queries";
import type { Page, Post, SiteGlobals } from "@/src/lib/types";
import { Layout, HomePageFeaturedPosts } from "@/src/components";

interface HomeProps {
  entry: Page;
  siteGlobals: SiteGlobals;
}

export default function Home({ entry, siteGlobals }: HomeProps) {
  const featuredPost = entry.homePageTemplate?.homeFeaturedPost;
  const secondaryPosts = entry.homePageTemplate?.homeSecondaryPosts;

  return (
    <Layout siteGlobals={siteGlobals}>
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
  const entry = await getHomepageEntry();
  const siteGlobals = await getGlobals();

  return {
    props: { entry, siteGlobals: { ...siteGlobals } },
    revalidate: 10,
  };
};
