import { fetchGraphQL } from "@/src/lib/api";
import { Menu } from "@/src/lib/types";

/**
 * Fetch a menu by slug.
 */
export async function getMenuBySlug(slug: string) {
  const query = `
    query GetMenuBySlug($slug: ID = "URI") {
      menu(id: $slug, idType: SLUG) {
        menuItems {
          edges {
            node {
              uri
              label
              databaseId
              mainMenuIcon {
                menuIcon
              }
            }
          }
        }
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.menu as Menu;
}
