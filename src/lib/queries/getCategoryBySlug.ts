import { fetchGraphQL } from "@/src/lib/api";
import { Category } from "@/src/lib/types";

export async function getCategoryBySlug(slug: string) {
  const query = `
    query getCategroyBySlug($slug: ID = "URI") {
      category(id: $slug, idType: SLUG) {
        name
        seo {
          metaDesc
          title
          schema {
            raw
          }
        }
      }
    }
  `;

  const variables = {
    slug: slug,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.category as Category;
}
