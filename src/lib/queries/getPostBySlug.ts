import { fetchGraphQL } from "@/src/lib/api";
import { Post } from "@/src/lib/types";

/**
 * Fetch a single blog post by slug.
 */
export async function getPostBySlug(slug: string) {
  const query = `
        query GetPost($slug: ID!) {
            post(id: $slug, idType: SLUG) {
                slug
                title
                tags {
                    nodes {
                        slug
                        name
                    }
                }
                categories {
                    nodes {
                        slug
                        name
                    }
                }
                content
                date
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
                travelJournal {
                    location
                }
                excerpt
                seo {
                    breadcrumbs {
                        text
                        url
                    }
                    title
                    metaDesc
                    focuskw
                    metaKeywords
                    metaRobotsNoindex
                    metaRobotsNofollow
                    opengraphTitle
                    opengraphDescription
                    opengraphImage {
                        altText
                        sourceUrl
                        mediaDetails {
                            height
                            width
                        }
                    }
                    canonical
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

  return response.data.post as Post;
}
