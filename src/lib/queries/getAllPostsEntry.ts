import { fetchGraphQL } from "@/src/lib/api";
import { Page } from "@/src/lib/types";

export async function getAllPostsEntry() {
  const query = `
  query GetAllPostsEntry {
    page(id: "2989", idType: DATABASE_ID) { 
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
