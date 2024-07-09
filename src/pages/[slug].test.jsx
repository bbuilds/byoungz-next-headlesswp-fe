import { describe, expect, test } from "vitest";
import { render } from "@testing-library/react";
import SinglePost from "@/src/pages/[slug]";

const entry = {
  slug: "swimming-spots-in-puerto-rico",
  title: "Dope Swimming Spots in Puerto Rico",
  tags: {
    nodes: [
      {
        slug: "puerto-rico",
        name: "puerto rico",
      },
      {
        slug: "waterfalls",
        name: "waterfalls",
      },
    ],
  },
  categories: {
    nodes: [
      {
        slug: "pro-tips-and-guides",
        name: "Tips and Guides",
      },
    ],
  },
  content:
    '\n<p>Don&#8217;t let the size of <a href="http://byoungzapi.local/san-juan-hit-list/">Puerto Rico</a> fool you, this Caribbean island is home to 100s of waterfalls, countless swimming holes, or &#8220;charcos&#8221; which directly translates to puddle, and pristine beaches. After spending over two months driving around Puerto Rico, here is my list of favorite swimming holes.</p>\n\n\n\n<p>Please note, a lot of places may be on private property and I&#8217;m leaving those out. I am not condoning trespassing.</p>\n\n\n\n<h2 class="wp-block-heading" id="puerto-rico-waterfalls">Puerto Rico Waterfalls</h2>\n\n\n\n<figure class="wp-block-image size-full"><img loading="lazy" decoding="async" width="1000" height="564" src="http://byoungzapi.local/wp-content/uploads/2021/11/salto-santa-clara-puerto-rico.jpeg" alt="Santa Clara Waterfall in Puerto Rico" class="wp-image-3547" srcset="http://byoungzapi.local/wp-content/uploads/2021/11/salto-santa-clara-puerto-rico.jpeg 1000w, http://byoungzapi.local/wp-content/uploads/2021/11/salto-santa-clara-puerto-rico-300x169.jpeg 300w, http://byoungzapi.local/wp-content/uploads/2021/11/salto-santa-clara-puerto-rico-768x433.jpeg 768w" sizes="(max-width: 1000px) 100vw, 1000px" /></figure>\n\n\n\n<ol>\n<li><a href="https://goo.gl/maps/CJmuQLA12AhnBRJs6" target="_blank" rel="noreferrer noopener">Salto Santa Clara</a> &#8211; Located down in Yauco, a 2+ hours drive from San Jaun, this was my absolute favorite waterfall. It&#8217;s away form tourists, it&#8217;s an adventure to get down to and has a ton of swimming holes along the way.</li>\n\n\n\n<li><a href="https://goo.gl/maps/CJmuQLA12AhnBRJs6" target="_blank" rel="noreferrer noopener">Salto Santa Clara</a> &#8211; Located down in Yauco, a 2+ hours drive from San Jaun, this was my absolute favorite waterfall. It&#8217;s away form tourists, it&#8217;s an adventure to get down to and has a ton of swimming holes along the way.</li>\n\n\n\n<li><a href="https://goo.gl/maps/CJmuQLA12AhnBRJs6" target="_blank" rel="noreferrer noopener">Salto Santa Clara</a> &#8211; Located down in Yauco, a 2+ hours drive from San Jaun, this was my absolute favorite waterfall. It&#8217;s away form tourists, it&#8217;s an adventure to get down to and has a ton of swimming holes along the way.</li>\n\n\n\n<li><a href="https://goo.gl/maps/CJmuQLA12AhnBRJs6" target="_blank" rel="noreferrer noopener">Salto Santa Clara</a> &#8211; Located down in Yauco, a 2+ hours drive from San Jaun, this was my absolute favorite waterfall. It&#8217;s away form tourists, it&#8217;s an adventure to get down to and has a ton of swimming holes along the way.</li>\n\n\n\n<li><a href="https://goo.gl/maps/CJmuQLA12AhnBRJs6" target="_blank" rel="noreferrer noopener">Salto Santa Clara</a> &#8211; Located down in Yauco, a 2+ hours drive from San Jaun, this was my absolute favorite waterfall. It&#8217;s away form tourists, it&#8217;s an adventure to get down to and has a ton of swimming holes along the way.</li>\n</ol>\n\n\n\n<h2 class="wp-block-heading" id="puerto-rico-swimming-holes">Puerto Rico Swimming Holes</h2>\n\n\n\n<figure class="wp-block-image size-full"><img loading="lazy" decoding="async" width="1000" height="971" src="http://byoungzapi.local/wp-content/uploads/2021/11/cuevas-arnelas-puerto-rico.jpeg" alt="" class="wp-image-3550" srcset="http://byoungzapi.local/wp-content/uploads/2021/11/cuevas-arnelas-puerto-rico.jpeg 1000w, http://byoungzapi.local/wp-content/uploads/2021/11/cuevas-arnelas-puerto-rico-300x291.jpeg 300w, http://byoungzapi.local/wp-content/uploads/2021/11/cuevas-arnelas-puerto-rico-768x746.jpeg 768w" sizes="(max-width: 1000px) 100vw, 1000px" /></figure>\n\n\n\n<ol>\n<li><a href="https://goo.gl/maps/mHm8DecNyxeVk5ix8" target="_blank" rel="noreferrer noopener">El Hippie Waterfall</a> &#8211; listed as a waterfall that is 1+ hour south east of San Juan, but this is a large swimming hole area as well and my favorite. Located at the south end of El Yunque.</li>\n\n\n\n<li><a href="https://goo.gl/maps/Qz8824nwZB89r8CU7" target="_blank" rel="noreferrer noopener">Manati Springs</a> &#8211; crystal clear swimming holes tucked away on hiking trails. DO NOT PARK ON THE STREET OR YOU WILL BE FINED.</li>\n\n\n\n<li><a href="https://goo.gl/maps/7DfwjwHv6FudLUyc9" target="_blank" rel="noreferrer noopener">Cuevas Arenales Caves (Charco Azul)</a> &#8211; this is another must see place about ~1hour southwest of San Juan. Tour companies will try to claim the parking on a residential house but its open to the public (for a small parking fee 100% worth it.) Do not drive all the way down the very steep road and caution parking on the street. This spot is infamous for tourist cars getting broken into.</li>\n\n\n\n<li><a href="https://goo.gl/maps/7DfwjwHv6FudLUyc9" target="_blank" rel="noreferrer noopener">Cuevas Arenales Caves (Charco Azul)</a> &#8211; this is another must see place about ~1hour southwest of San Juan. Tour companies will try to claim the parking on a residential house but its open to the public (for a small parking fee 100% worth it.) Do not drive all the way down the very steep road and caution parking on the street. This spot is infamous for tourist cars getting broken into.</li>\n</ol>\n\n\n\n<h2 class="wp-block-heading" id="puerto-rico-beaches">Puerto Rico Beaches</h2>\n\n\n\n<ol>\n<li><a href="https://goo.gl/maps/poJETMLkcEYo3pf3A" target="_blank" rel="noreferrer noopener">Culebra</a> &#8211; if you&#8217;re going to do one island off of Puerto Rico, this is the island.</li>\n\n\n\n<li><a href="https://goo.gl/maps/2JsqZYP8pdjoEHQT7" target="_blank" rel="noreferrer noopener">Playa Teresa</a> &#8211; recommended by a local thrill seeker as his favorite beach located on the east coast.</li>\n\n\n\n<li><a href="https://goo.gl/maps/MiAXxohB1D9EjgDZA" target="_blank" rel="noreferrer noopener">Playa Sucia</a> &#8211; Down in Cabo Rojo, this beach was magical and plenty of shade to rest in.</li>\n\n\n\n<li><a href="https://goo.gl/maps/pCjovAeLnwmdppVZ9" target="_blank" rel="noreferrer noopener">Seven Seas</a> &#8211; located on the very NE tip, this beach connected to a natural reserve that is worth hiking. I recommend walking all the way to <a href="https://goo.gl/maps/BmJieTorUxmRa26w7" target="_blank" rel="noreferrer noopener">Natural La Zanja</a> for some secluded rock pool swimming.</li>\n\n\n\n<li><a href="https://goo.gl/maps/YktPLskGfgqLwneh7" target="_blank" rel="noreferrer noopener">Playa Corcega</a> &#8211; On the west coast below Rincon.</li>\n</ol>\n',
  date: "2021-11-24T16:55:11",
  featuredImage: {
    node: {
      altText: "Puerto Rico Waterfalls",
      sourceUrl:
        "http://byoungzapi.local/wp-content/uploads/2021/11/waterfall-puerto-rico.jpeg",
      mediaDetails: {
        height: 679,
        width: 1200,
      },
    },
  },
  travelJournal: {
    location: "Puerto Rico",
  },
  excerpt:
    "<p>This Caribbean paradise is packed full of dope swimming holes that consist of hundreds of waterfalls, rivers, beaches, and more!</p>\n",
  seo: {
    breadcrumbs: [
      {
        text: "Home",
        url: "http://byoungzapi.local/",
      },
      {
        text: "Dope Swimming Spots in Puerto Rico",
        url: "http://byoungzapi.local/swimming-spots-in-puerto-rico/",
      },
    ],
    title: "Dope Swimming Spots in Puerto Rico - BYOUNGZ Digital Nomad",
    metaDesc:
      "This Caribbean paradise is packed full of dope swimming holes that consist of hundreds of waterfalls, rivers, beaches, and more!",
    focuskw: "",
    metaKeywords: "",
    metaRobotsNoindex: "index",
    metaRobotsNofollow: "follow",
    opengraphTitle:
      "Dope Swimming Spots in Puerto Rico - BYOUNGZ Digital Nomad",
    opengraphDescription:
      "This Caribbean paradise is packed full of dope swimming holes that consist of hundreds of waterfalls, rivers, beaches, and more!",
    opengraphImage: {
      altText: "Puerto Rico Waterfalls",
      sourceUrl:
        "http://byoungzapi.local/wp-content/uploads/2021/11/waterfall-puerto-rico.jpeg",
      mediaDetails: {
        height: 679,
        width: 1200,
      },
    },
    canonical: "http://localhost:3000swimming-spots-in-puerto-rico/",
    schema: {
      raw: '{"@context":"https://schema.org","@graph":[{"@type":"Article","@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/#article","isPartOf":{"@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/"},"author":{"name":"Branden","@id":"http://byoungzapi.local/#/schema/person/edd855cc6849b8f868b3ce2bd1a140f3"},"headline":"Dope Swimming Spots in Puerto Rico","datePublished":"2021-11-24T16:55:11+00:00","dateModified":"2024-05-06T17:29:46+00:00","mainEntityOfPage":{"@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/"},"wordCount":601,"commentCount":0,"publisher":{"@id":"http://byoungzapi.local/#/schema/person/edd855cc6849b8f868b3ce2bd1a140f3"},"image":{"@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/#primaryimage"},"thumbnailUrl":"http://byoungzapi.local/wp-content/uploads/2021/11/waterfall-puerto-rico.jpeg","keywords":["puerto rico","waterfalls"],"articleSection":["Tips and Guides"],"inLanguage":"en-US","potentialAction":[{"@type":"CommentAction","name":"Comment","target":["http://byoungzapi.local/swimming-spots-in-puerto-rico/#respond"]}]},{"@type":"WebPage","@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/","url":"http://byoungzapi.local/swimming-spots-in-puerto-rico/","name":"Dope Swimming Spots in Puerto Rico - BYOUNGZ Digital Nomad","isPartOf":{"@id":"http://byoungzapi.local/#website"},"primaryImageOfPage":{"@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/#primaryimage"},"image":{"@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/#primaryimage"},"thumbnailUrl":"http://byoungzapi.local/wp-content/uploads/2021/11/waterfall-puerto-rico.jpeg","datePublished":"2021-11-24T16:55:11+00:00","dateModified":"2024-05-06T17:29:46+00:00","description":"This Caribbean paradise is packed full of dope swimming holes that consist of hundreds of waterfalls, rivers, beaches, and more!","breadcrumb":{"@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/#breadcrumb"},"inLanguage":"en-US","potentialAction":[{"@type":"ReadAction","target":["http://byoungzapi.local/swimming-spots-in-puerto-rico/"]}]},{"@type":"ImageObject","inLanguage":"en-US","@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/#primaryimage","url":"http://byoungzapi.local/wp-content/uploads/2021/11/waterfall-puerto-rico.jpeg","contentUrl":"http://byoungzapi.local/wp-content/uploads/2021/11/waterfall-puerto-rico.jpeg","width":1200,"height":679,"caption":"Puerto Rico Waterfalls"},{"@type":"BreadcrumbList","@id":"http://byoungzapi.local/swimming-spots-in-puerto-rico/#breadcrumb","itemListElement":[{"@type":"ListItem","position":1,"name":"Home","item":"http://byoungzapi.local/"},{"@type":"ListItem","position":2,"name":"Dope Swimming Spots in Puerto Rico"}]},{"@type":"WebSite","@id":"http://byoungzapi.local/#website","url":"http://byoungzapi.local/","name":"BYOUNGZ Digital Nomad","description":"","publisher":{"@id":"http://byoungzapi.local/#/schema/person/edd855cc6849b8f868b3ce2bd1a140f3"},"potentialAction":[{"@type":"SearchAction","target":{"@type":"EntryPoint","urlTemplate":"http://byoungzapi.local/?s={search_term_string}"},"query-input":"required name=search_term_string"}],"inLanguage":"en-US"},{"@type":["Person","Organization"],"@id":"http://byoungzapi.local/#/schema/person/edd855cc6849b8f868b3ce2bd1a140f3","name":"Branden","image":{"@type":"ImageObject","inLanguage":"en-US","@id":"http://byoungzapi.local/#/schema/person/image/","url":"http://byoungzapi.local/wp-content/uploads/2021/06/byoungz-about-1.png","contentUrl":"http://byoungzapi.local/wp-content/uploads/2021/06/byoungz-about-1.png","width":1000,"height":667,"caption":"Branden"},"logo":{"@id":"http://byoungzapi.local/#/schema/person/image/"}}]}',
    },
  },
};

const siteGlobals = {
  globalGeneralSettings: {
    title: "BYOUNGZ Digital Nomad",
    description: "",
  },
  globalSeo: {
    meta: {
      author: {
        title: ", Author at BYOUNGZ Digital Nomad",
      },
    },
    openGraph: {
      defaultImage: null,
    },
    schema: {
      companyName: "",
      siteName: "BYOUNGZ Digital Nomad",
      homeUrl: "http://byoungzapi.local",
      personName: "branden",
      siteUrl: "http://byoungzapi.local",
    },
  },
  globalMainNavigation: {
    menuItems: {
      edges: [
        {
          node: {
            uri: "/category/pro-tips-and-guides/",
            label: "Adventure Almanac",
            databaseId: 3745,
            mainMenuIcon: {
              menuIcon: "globe",
            },
          },
        },
        {
          node: {
            uri: "/category/shadow-work/",
            label: "Shadow Work",
            databaseId: 3746,
            mainMenuIcon: {
              menuIcon: "eye",
            },
          },
        },
        {
          node: {
            uri: "/blog",
            label: "All Posts",
            databaseId: 3747,
            mainMenuIcon: {
              menuIcon: "ufo",
            },
          },
        },
        {
          node: {
            uri: "/contact/",
            label: "Contact",
            databaseId: 3748,
            mainMenuIcon: {
              menuIcon: "grave",
            },
          },
        },
      ],
    },
  },
};

describe("Single Post Page", () => {
  test("renders a heading", () => {
    const { getByRole } = render(
      <SinglePost entry={entry} siteGlobals={siteGlobals} />,
    );
    const heading = getByRole("heading", { level: 1 });
    expect(heading).toHaveTextContent("Dope Swimming Spots in Puerto Rico");
  });
});
