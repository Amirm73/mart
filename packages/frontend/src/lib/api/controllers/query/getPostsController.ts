import request, { gql } from "graphql-request";

const getPostsGql = gql`
  query {
    posts {
      id
      title
    }
  }
`;

export function getPostsController() {
  return request("https://jsonplaceholder.ir/graphql", getPostsGql);
}
