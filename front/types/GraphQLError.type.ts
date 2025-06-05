export type GraphQLError = {
    message: string;
    locations?: { line: number; column: number }[];
    path?: string[];
    extensions?: any;
  };
  
export type GraphQLResponse<T> = {
    data: T;
    errors?: GraphQLError[];
  };
  