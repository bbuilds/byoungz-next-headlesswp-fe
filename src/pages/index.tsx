import { GetStaticProps } from "next";
import { getHomepageEntry, getGlobals } from "@/src/lib/queries";
import type {
  Post,
  SiteGlobals,
  MediaItem,
  IgPost,
  HomePageEntry,
} from "@/src/lib/types";
import {
  Layout,
  HomePageFeaturedPosts,
  AboutSection,
  InstagramFeed,
  RecentPostsSection,
  SchemaMarkup,
} from "@/src/components";

interface HomeProps {
  entry: HomePageEntry;
  siteGlobals: SiteGlobals;
  igPosts?: IgPost[];
}

export default function Home({ entry, siteGlobals, igPosts }: HomeProps) {
  const page = entry.page;
  const posts = entry.posts;
  const featuredPost = page.homePageTemplate?.homeFeaturedPost;
  const secondaryPosts = page.homePageTemplate?.homeSecondaryPosts;

  return (
    <Layout siteGlobals={siteGlobals} entry={page}>
      <h1 className="sr-only">BYOUNGZ Digital Nomad and Shadow Work Blog</h1>
      {featuredPost && secondaryPosts && (
        <HomePageFeaturedPosts
          featuredPost={featuredPost}
          secondaryPosts={secondaryPosts as Post[]}
        />
      )}
      <div className="flex w-full flex-col gap-y-10 py-20 lg:gap-y-20 lg:py-20">
        <AboutSection
          text={page.homePageTemplate?.homeAboutContent as string}
          image={page.homePageTemplate?.homeAboutImage as MediaItem}
        />
        {posts && (
          <RecentPostsSection
            title={page.homePageTemplate?.homeRecentBlogTitle as string}
            posts={posts}
          />
        )}
        {igPosts && igPosts.length > 0 && (
          <InstagramFeed
            title={page.homePageTemplate?.homeIgTitle as string}
            igPosts={igPosts}
          />
        )}
      </div>
      {entry.page.seo?.schema?.raw && (
        <SchemaMarkup id="homepage-schema" text={entry.page.seo.schema.raw} />
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  //https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/#fields
  const fields = `id,media_url,media_type,permalink, caption`;
  const igUrl = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${process.env.INSTAGRAM_USER_TOKEN}`;
  //@TODO add error handling
  const igData = await fetch(igUrl).then((res) => res.json());

  //@TODO make more robust error handling
  if (igData.error) {
    // console.log("igData error", igData.error);
    igData.data = [];
  }

  const entry = await getHomepageEntry();
  const siteGlobals = await getGlobals();
  return {
    props: { entry, siteGlobals: { ...siteGlobals }, igPosts: igData.data },
    revalidate: 10,
  };
};
