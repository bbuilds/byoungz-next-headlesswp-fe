import { fetchGraphQL } from "@/src/lib/api";
import { RootQueryToPostConnection } from "@/src/lib/types";

export async function getAllPostsWithSlug() {
  const query = `
    query getAllPostsWithSlug {
      posts(first: 100) {
        nodes {
          slug
        }
      }
    }
  `;

  const response = await fetchGraphQL(query);

  return response.data.posts as RootQueryToPostConnection;
}
