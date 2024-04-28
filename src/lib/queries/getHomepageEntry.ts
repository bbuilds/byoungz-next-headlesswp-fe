import { fetchGraphQL } from "@/src/lib/api";
import { Page } from "@/src/lib/types";

export async function getHomepageEntry() {
  const query = `
  query GetHomePageContent {
    page(id: "112", idType: DATABASE_ID) {
      homePageTemplate {
        homeAboutContent
        homeFeaturedPost {
          ... on Post {
            title
            date
            uri
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
            modified
          }
        }
        homeIgTitle
        homeRecentBlogTitle
        homeSecondaryPosts {
          ... on Post {
            title
            modified
            date
            uri
            featuredImage {
              node {
                altText
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
            categories {
              nodes {
                name
              }
            }
          }
        }
      }
      title(format: RAW)
      contentTypeName
      seo {
        focuskw
        metaDesc
        metaKeywords
        opengraphImage {
          mediaItemUrl
        }
        canonical
        opengraphTitle
        opengraphUrl
        schema {
          raw
        }
        title
      }
    }
  }
  `;

  const response = await fetchGraphQL(query);

  return response.data.page as Page;
}
