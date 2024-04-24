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
            modified
            date
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
          }
        }
        homeIgTitle
        homeRecentBlogTitle
        homeSecondaryPosts {
          ... on Post {
            title
            modified
            date
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
            seo {
              title
              metaDesc
              focuskw
              metaKeywords
              metaRobotsNoindex
              metaRobotsNofollow
              opengraphTitle
              opengraphDescription
              canonical
              schema {
                raw
              }
              opengraphImage {
                altText
                sourceUrl
                mediaDetails {
                  height
                  width
                }
              }
            }
          }
        }
      }
    }
  }
  `;

  const response = await fetchGraphQL(query);

  return response.data.page as Page;
}
