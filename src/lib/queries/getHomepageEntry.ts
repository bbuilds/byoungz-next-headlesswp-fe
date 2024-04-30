import { fetchGraphQL } from "@/src/lib/api";
import { HomePageEntry } from "@/src/lib/types";

export async function getHomepageEntry() {
  const query = `
  query GetHomePageContent {
    page(id: "112", idType: DATABASE_ID) {
      homePageTemplate {
        homeAboutContent
        homeAboutImage {
          altText
          sourceUrl
          mediaDetails {
            height
            width
          }
        }
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
    posts(
      where: {orderby: {field: DATE, order: DESC}, status: PUBLISH}
      first: 3
    ) {
      nodes {
        date
        excerpt
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
              width
              height
            }
          }
        }
        id
        uri
        title
      }
    }
  }
  `;

  const response = await fetchGraphQL(query);

  return {
    page: response.data.page,
    posts: response.data.posts.nodes,
  } as HomePageEntry;
}
