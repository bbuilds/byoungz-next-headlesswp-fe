import { GetStaticProps, GetStaticPaths } from "next";
import {
  getPostBySlug,
  getGlobals,
  getAllPostsWithSlug,
} from "@/src/lib/queries";
import {
  Breadcrumbs,
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

  if (!entry || !siteGlobals) {
    return <ErrorPage statusCode={500} />;
  }

  if (!router.isFallback && !entry?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  const useToc = entry.extraPostItems?.useToc;

  console.log("entry", entry);

  const postDate = entry.date;
  const modifiedDate = entry.modified;

  return (
    <Layout siteGlobals={siteGlobals} entry={entry}>
      <article className="w-screen py-20 lg:py-20">
        <div className="container relative mx-auto flex items-start justify-center">
          <div className="w-full flex-1 px-4 md:max-w-[70%] md:px-0">
            {entry.seo?.breadcrumbs && (
              <div className="pb-4">
                <Breadcrumbs
                  links={entry.seo?.breadcrumbs as SeoPostTypeBreadcrumbs[]}
                />
              </div>
            )}
            <div className="overflow-hidden rounded-md bg-black">
              <PostHeader
                title={entry.title as string}
                featuredImage={entry.featuredImage?.node}
                categories={entry.categories?.nodes}
                travelLocation={entry.travelJournal?.location || ""}
                travelDate={postDate as string}
                modifiedDate={modifiedDate as string}
              />
              <hr className="mx-4 w-24 border-t-2 border-dashed border-white" />
              <section className="px-6 py-8">
                <RichText text={entry.content as string} />
              </section>
            </div>
          </div>
          {useToc && (
            <aside className="sticky top-[80px] mt-[28px] hidden md:ml-auto md:block md:max-h-[calc(-108px+100vh)] md:shrink-0 md:basis-1/4 md:overflow-auto">
              <TableOfContents blogContent={entry.content as string} />
            </aside>
          )}
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
