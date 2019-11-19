import gql from "graphql-tag";

export const GET_NEWS = gql`
    query getUsers {users {email}}
`;