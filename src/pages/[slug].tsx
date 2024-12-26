export const runtime = "experimental-edge";
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
  SchemaMarkup,
  ShareButtons,
} from "@/src/components";
import { SiteGlobals, Post, SeoPostTypeBreadcrumbs } from "@/src/lib/types";
import ErrorPage from "next/error";

interface SinglePostProps {
  entry: Post;
  siteGlobals: SiteGlobals;
}

export default function SinglePost({ entry, siteGlobals }: SinglePostProps) {
  if (!siteGlobals) {
    return <ErrorPage statusCode={500} />;
  }
  const {
    seo,
    title,
    featuredImage,
    categories,
    travelJournal,
    date,
    modified,
    content,
    extraPostItems,
  } = entry;
  const useToc = extraPostItems?.useToc;

  return (
    <Layout siteGlobals={siteGlobals} entry={entry}>
      <article className="w-screen py-20 lg:py-20">
        <div className="container relative mx-auto flex items-start justify-center">
          <div className="w-full flex-1 px-4 md:max-w-[70%] md:px-0">
            {seo?.breadcrumbs && (
              <div className="pb-4">
                <Breadcrumbs
                  links={seo.breadcrumbs as SeoPostTypeBreadcrumbs[]}
                />
              </div>
            )}
            <div className="overflow-hidden rounded-md bg-grey-100 dark:bg-black">
              <PostHeader
                title={title as string}
                featuredImage={featuredImage?.node}
                categories={categories?.nodes}
                travelLocation={travelJournal?.location || ""}
                travelDate={date as string}
                modifiedDate={modified as string}
              />
              <hr className="mx-4 w-24 border-t-2 border-dashed border-white" />
              <section className="px-6 py-8">
                <RichText text={content as string} />
              </section>

              {seo &&
                seo?.opengraphDescription &&
                seo?.opengraphTitle &&
                seo.title && (
                  <footer className="border-t border-solid border-t-grey-300 px-6 py-8 dark:border-t-grey-600">
                    <ShareButtons
                      url={`${process.env.NEXT_PUBLIC_FRONTEND_DOMAIN}/${entry.slug}`}
                      quote={seo.opengraphDescription}
                      title={seo.title}
                    />
                  </footer>
                )}
            </div>
          </div>
          {useToc && (
            <aside className="sticky top-[80px] mt-[28px] hidden md:ml-auto md:block md:max-h-[calc(-108px+100vh)] md:shrink-0 md:basis-1/4 md:overflow-auto">
              <TableOfContents blogContent={content as string} />
            </aside>
          )}
        </div>
      </article>
      {seo?.schema?.raw && (
        <SchemaMarkup id="article-schema" text={seo?.schema?.raw} />
      )}
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;

  if (!params) {
    return { notFound: true };
  }

  const { slug } = params;

  const [shellResponse, contentResponse] = await Promise.all([
    getGlobals(),
    getPostBySlug(slug as string),
  ]);

  return {
    props: { entry: contentResponse, siteGlobals: { ...shellResponse } },
    revalidate: 10,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const allPosts = await getAllPostsWithSlug();

  const newPaths: { params: { slug: string } }[] = [];

  allPosts.nodes.map((node: Post) => {
    newPaths.push({ params: { slug: node.slug as string } });
  });

  return {
    paths: newPaths,
    fallback: "blocking",
  };
};
