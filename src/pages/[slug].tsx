import { GetStaticProps, GetStaticPaths } from "next";
import {
  getPostBySlug,
  getGlobals,
  getAllPostsWithSlug,
} from "@/src/lib/queries";
import {
  Layout,
  PostHeader,
  RichText,
  TableOfContents,
} from "@/src/components";
import { SiteGlobals, Post, SeoPostTypeBreadcrumbs } from "@/src/lib/types";
import ErrorPage from "next/error";
import { useRouter } from "next/router";

interface SinglePostProps {
  entry: Post;
  siteGlobals: SiteGlobals;
}

export default function SinglePost({ entry, siteGlobals }: SinglePostProps) {
  const router = useRouter();

  console.log("entry", entry);

  if (!entry || !siteGlobals) {
    return <ErrorPage statusCode={500} />;
  }

  if (!router.isFallback && !entry?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  return (
    <Layout siteGlobals={siteGlobals} entry={entry}>
      <article className="w-screen py-20 lg:py-20">
        <div className="container relative mx-auto flex items-start justify-center">
          <div className="w-full max-w-[70%] flex-1 overflow-hidden rounded-md bg-black">
            <PostHeader
              breadcrumbs={entry.seo?.breadcrumbs as SeoPostTypeBreadcrumbs[]}
              title={entry.title as string}
              featuredImage={entry.featuredImage?.node}
              categories={entry.categories?.nodes}
              travelLocation={entry.travelJournal?.location || ""}
              travelDate={entry.date as string}
            />
            <hr className="mx-4 w-24 border-t-2 border-dashed border-white" />
            <section className="p-8">
              <RichText text={entry.content as string} />
            </section>
          </div>

          <aside className="sticky hidden md:ml-auto md:block md:shrink-0 md:basis-1/5">
            <TableOfContents blogContent={entry.content as string} />
          </aside>
        </div>
      </article>
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
  const entry = await getPostBySlug(slug as string);

  return {
    props: { entry, siteGlobals: { ...siteGlobals } },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  const newPaths: { params: { slug: any } }[] = [];

  allPosts.nodes.map((node: Post) => {
    newPaths.push({ params: { slug: node.slug } });
  });

  return {
    paths: newPaths,
    fallback: true,
  };
};
