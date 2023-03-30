import { request, gql } from "graphql-request";

const signupGql = gql`
  mutation SignUp($phoneNumber: String!) {
    signup(SignupUserInput: { phone: $phoneNumber }) {
      password
    }
  }
`;

export function signupController(phoneNumber: string) {
  return request("http://localhost:3000/graphql", signupGql, {
    phoneNumber,
  });
}
