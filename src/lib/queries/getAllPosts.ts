import { fetchGraphQL } from "@/src/lib/api";
import { Post } from "@/src/lib/types";

export async function getAllPosts(
  categorySlug?: string,
  postAmount?: number,
  tagSlugIn?: string[],
) {
  const query = `
  query GetPosts($categorySlug: String, $postAmount: Int, $tagSlugIn: [String]) {
    posts(
      where: {status: PUBLISH, categoryName: $categorySlug, orderby: {field: DATE, order: DESC}, tagSlugIn: $tagSlugIn}
      first: $postAmount
    ) {
      nodes {
        id
        title
        slug
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
    tagSlugIn: tagSlugIn,
  };

  const response = await fetchGraphQL(query, variables);

  return response.data.posts.nodes as Post[];
}
