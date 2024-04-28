import { fetchGraphQL } from "@/src/lib/api";
import { SiteGlobals } from "@/src/lib/types";

export async function getGlobals() {
  const query = `
  query getGlobals {
    globalGeneralSettings: generalSettings {
      title
      description
    }
    globalSeo: seo {
      meta {
        author {
          title
        }
      }
      openGraph {
        defaultImage {
          altText
          sourceUrl
        }
      }
      schema {
        companyName
        siteName
        homeUrl
        personName
        siteUrl
      }
    }
    globalMainNavigation: menu(id: "main-nav", idType: SLUG) {
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

  const response = await fetchGraphQL(query);

  return response.data as SiteGlobals;
}
