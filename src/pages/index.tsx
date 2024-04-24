import { GetStaticProps } from "next";
import { getMenuBySlug, getHomepageEntry } from "@/src/lib/queries";
import type { Menu, Page } from "@/src/lib/types";
import { Layout } from "@/src/components";

interface HomeProps {
  globalNavigation: Menu;
  entry: Page;
}

export default function Home({ globalNavigation, entry }: HomeProps) {
  return (
    <Layout globalNavigation={globalNavigation}>
      <main
        className={`flex min-h-screen flex-col items-center justify-between p-24 font-noto-sans`}
      ></main>
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
