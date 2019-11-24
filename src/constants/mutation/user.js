import gql from "graphql-tag";

export const POST_SIGN_UP = gql`
    mutation (
        $username: String!,
        $email: String!,
        $password: String!
    ) {
        signUp(username: $username, email: $email, password: $password) {
            token
        }
    }
`;

export const POST_SIGN_IN = gql`
    mutation (
        $username: String!,
        $password: String!
    ) {
        signIn(username: $username, password: $password) {
            token
        }
    }
`;