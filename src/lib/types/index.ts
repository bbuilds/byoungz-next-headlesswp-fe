//import all generated types
export * from "./generated/wp";
import { Menu, GeneralSettings, SeoConfig } from "@/src/lib/types";
export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{ message: string }>;
}
export type SiteGlobals = {
  globalMainNavigation: Menu;
  globalGeneralSettings: GeneralSettings;
  globalSeo: SeoConfig;
};
