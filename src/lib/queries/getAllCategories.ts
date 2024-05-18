import { fetchGraphQL } from "@/src/lib/api";
import { RootQueryToCategoryConnection } from "@/src/lib/types";

export async function getAllCategories() {
  const query = `
    query GetAllCategories {
      categories {
        nodes {
          slug
        }
      }
    }
  `;

  const response = await fetchGraphQL(query);

  return response.data.categories as RootQueryToCategoryConnection;
}
