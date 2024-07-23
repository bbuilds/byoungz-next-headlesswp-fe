import { fetchGraphQL } from "@/src/lib/api";
import { PostConnection } from "@/src/lib/types";

export async function getPostsBySearch(
  searchQuery?: string,
  postAmount?: number,
  after?: string,
): Promise<PostConnection> {
  const query = `
    query GetSearchResults( $searchQuery: String, $postAmount: Int, $after: String) {
      posts: posts(first: $postAmount, after: $after, where: {search: $searchQuery}) {
        edges {
          node {
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
          }
          cursor
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  `;

  const variables = {
    searchQuery: searchQuery,
    postAmount: postAmount,
    after: after,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.posts;
}
