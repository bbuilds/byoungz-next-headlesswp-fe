import { fetchGraphQL } from "@/src/lib/api";
import { RootQueryToPostConnection } from "@/src/lib/types";

export async function getAllPostsWithSlug() {
  async function fetchPosts(after: string | null = null) {
    const query = `
      query getAllPostsWithSlug($after: String) {
        posts(first: 100, after: $after, where: {status: PUBLISH}) {
          pageInfo {
            hasNextPage
            endCursor
          }
          nodes {
            slug
          }
        }
      }
    `;

    const response = await fetchGraphQL(query, { after });
    return response.data.posts;
  }

  let allPosts: any = { nodes: [] };
  let hasNextPage = true;
  let endCursor = null;

  while (hasNextPage) {
    const response = await fetchPosts(endCursor);
    allPosts.nodes = [...allPosts.nodes, ...response.nodes];
    hasNextPage = response.pageInfo.hasNextPage;
    endCursor = response.pageInfo.endCursor;
  }

  return allPosts as RootQueryToPostConnection;
}
