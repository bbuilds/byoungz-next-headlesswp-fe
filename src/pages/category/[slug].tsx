import { GetStaticProps, GetStaticPaths } from "next";
import {
  getAllCategories,
  getGlobals,
  getAllPosts,
  getCategoryBySlug,
} from "@/src/lib/queries";
import { Layout, PageBanner, PostList } from "@/src/components";
import { SiteGlobals, Post, Category, Page } from "@/src/lib/types";
import ErrorPage from "next/error";

interface SinglePostProps {
  entry: Category;
  posts: Post[];
  siteGlobals: SiteGlobals;
}

export default function SingleCategory({
  entry,
  posts,
  siteGlobals,
}: SinglePostProps) {
  if (!entry || !siteGlobals) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <Layout siteGlobals={siteGlobals} entry={entry as Page}>
      <PageBanner title={`Posts categorized in: ${entry.name}`} />
      <section className="container mx-auto py-10 lg:py-20">
        <PostList posts={posts} displayAmount={9} />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  if (!params) {
    return { notFound: true };
  }

  const { slug } = params;

  const siteGlobals = await getGlobals();
  const posts = await getAllPosts(slug as string);
  const entry = await getCategoryBySlug(slug as string);

  return {
    props: { entry, siteGlobals: { ...siteGlobals }, posts },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allCategories = await getAllCategories();

  const newPaths: { params: { slug: any } }[] = [];

  allCategories.nodes.map((node: Category) => {
    newPaths.push({ params: { slug: node.slug } });
  });

  return {
    paths: newPaths,
    fallback: true,
  };
};
