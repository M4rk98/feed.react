import gql from "graphql-tag";

export const POST_CREATE_ARTICLE = gql`
    mutation (
        $title: String!,
        $content: String!,
        $highlighted: Int!
    ) {
        createArticle(
            title: $title,
            content: $content,
            highlighted: $highlighted,
        )
    }
`;