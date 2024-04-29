import { GetStaticProps } from "next";
import { getHomepageEntry, getGlobals } from "@/src/lib/queries";
import type {
  Page,
  Post,
  SiteGlobals,
  MediaItem,
  IgPost,
} from "@/src/lib/types";
import {
  Layout,
  HomePageFeaturedPosts,
  AboutSection,
  InstagramFeed,
} from "@/src/components";

interface HomeProps {
  entry: Page;
  siteGlobals: SiteGlobals;
  igPosts?: IgPost[];
}

export default function Home({ entry, siteGlobals, igPosts }: HomeProps) {
  const featuredPost = entry.homePageTemplate?.homeFeaturedPost;
  const secondaryPosts = entry.homePageTemplate?.homeSecondaryPosts;

  return (
    <Layout siteGlobals={siteGlobals} entry={entry}>
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
        <div className="flex w-full flex-col gap-y-10 py-20 lg:gap-y-20 lg:py-20">
          <AboutSection
            text={entry.homePageTemplate?.homeAboutContent as string}
            image={entry.homePageTemplate?.homeAboutImage as MediaItem}
          />
          {igPosts && (
            <InstagramFeed
              title={entry.homePageTemplate?.homeIgTitle as string}
              igPosts={igPosts}
            />
          )}
        </div>
      </main>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  //https://developers.facebook.com/docs/instagram-basic-display-api/reference/media/#fields
  const fields = `id,media_url,media_type,permalink, caption`;
  const igUrl = `https://graph.instagram.com/me/media?fields=${fields}&access_token=${process.env.INSTAGRAM_USER_TOKEN}`;
  //@TODO add error handling
  const igData = await fetch(igUrl).then((res) => res.json());

  const entry = await getHomepageEntry();
  const siteGlobals = await getGlobals();

  return {
    props: { entry, siteGlobals: { ...siteGlobals }, igPosts: igData.data },
    revalidate: 10,
  };
};
