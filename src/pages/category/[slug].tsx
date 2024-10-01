import { GetStaticProps, GetStaticPaths } from "next";
import {
  getAllCategories,
  getGlobals,
  getAllPosts,
  getCategoryBySlug,
} from "@/src/lib/queries";
import { Layout, PageBanner, PostList } from "@/src/components";
import { SiteGlobals, Category, Page, PostConnection } from "@/src/lib/types";
import ErrorPage from "next/error";

interface SinglePostProps {
  entry: Category;
  postsData: PostConnection;
  siteGlobals: SiteGlobals;
}

export default function SingleCategory({
  entry,
  postsData,
  siteGlobals,
}: SinglePostProps) {
  if (!siteGlobals) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <Layout siteGlobals={siteGlobals} entry={entry as Page}>
      <PageBanner title={`Posts categorized in: ${entry.name}`} />
      <section className="container mx-auto py-10 lg:py-20">
        <PostList
          posts={postsData.edges.map((edge) => edge.node)}
          initialPageInfo={postsData.pageInfo}
          displayAmount={9}
          slug={entry.slug as string}
        />
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params?.slug) {
    return { notFound: true };
  }

  const [siteGlobals, postsData, entry] = await Promise.all([
    getGlobals(),
    getAllPosts(params.slug as string, 9),
    getCategoryBySlug(params.slug as string),
  ]);

  if (!entry) {
    return { notFound: true };
  }

  return {
    props: {
      entry,
      siteGlobals,
      postsData,
    },
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
    fallback: false,
  };
};
