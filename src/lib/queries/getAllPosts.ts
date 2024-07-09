import { fetchGraphQL } from "@/src/lib/api";
import type { PostConnection } from "@/src/lib/types";

export async function getAllPosts(
  categorySlug?: string,
  postAmount?: number,
  after?: string,
  tagSlugIn?: string[],
): Promise<PostConnection> {
  const query = `
    query GetPosts($categorySlug: String, $postAmount: Int, $after: String, $tagSlugIn: [String]) {
      posts(
        where: {status: PUBLISH, categoryName: $categorySlug, orderby: {field: DATE, order: DESC}, tagSlugIn: $tagSlugIn}
        first: $postAmount
        after: $after
      ) {
        pageInfo {
          hasNextPage
          endCursor
        }
        nodes {
          id
          title
          uri
          date
          modified
          excerpt
          categories {
            nodes {
              name
            }
          }
          tags {
            nodes {
              name
            }
          }
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
          extraPostItems {
            frontPageTitle
          }
        }
      }
    }
  `;

  const variables = {
    categorySlug: categorySlug,
    postAmount: postAmount,
    after: after,
    tagSlugIn: tagSlugIn,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.posts;
}
