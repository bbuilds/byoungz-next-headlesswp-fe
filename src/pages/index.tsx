import { GetStaticProps } from "next";
import getMenuBySlug from "@/lib/queries/getMenuBySlug";
import type { Menu } from "@/lib/types";
import { Layout } from "@/components";

interface HomeProps {
  globalNavigation: Menu;
}

export default function Home({ globalNavigation }: HomeProps) {
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

  return {
    props: { globalNavigation },
    revalidate: 10,
  };
};
