//import all generated types
export * from "./generated/wp";
import { Menu, GeneralSettings, SeoConfig, Page, Post } from "@/src/lib/types";
export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{ message: string }>;
}
export type SiteGlobals = {
  globalMainNavigation: Menu;
  globalGeneralSettings: GeneralSettings;
  globalSeo: SeoConfig;
};

export type IgPost = {
  id: string;
  media_url: string;
  media_type: string;
  permalink: string;
  caption: string;
};

export type HomePageEntry = {
  page: Page;
  posts: Post[];
};
