import { GetStaticProps, GetStaticPaths } from "next";
import { getPageBySlug, getGlobals } from "@/src/lib/queries";
import { Layout, SmartLink } from "@/src/components";
import { SiteGlobals, Page } from "@/src/lib/types";
import ErrorPage from "next/error";

interface Custom404PageProps {
  entry: Page;
  siteGlobals: SiteGlobals;
}

export default function Custom404Page({
  entry,
  siteGlobals,
}: Custom404PageProps) {
  if (!siteGlobals) {
    return <ErrorPage statusCode={500} />;
  }

  return (
    <Layout siteGlobals={siteGlobals} entry={entry}>
      <article className="w-screen py-20">
        <div className="container relative mx-auto flex flex-col items-center justify-center">
          <h1 className="mb-10 text-4xl">Error 404: Soul not found</h1>
          <p className="text-xl">
            <SmartLink classNames="anchor-hover" href="/">
              Return to home page.
            </SmartLink>
          </p>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const siteGlobals = await getGlobals();
  const entry = await getPageBySlug("error-404");

  return {
    props: { entry, siteGlobals: { ...siteGlobals } },
    revalidate: 10,
  };
};
