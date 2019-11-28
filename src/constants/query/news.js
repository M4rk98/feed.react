import gql from "graphql-tag";

export const GET_NEWS = gql`
    query get {news {title}}
`;