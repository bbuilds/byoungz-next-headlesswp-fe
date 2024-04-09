//import all generated types
export * from "./generated/wp";

export interface GraphQLResponse<T = any> {
  data?: T;
  errors?: Array<{ message: string }>;
}
