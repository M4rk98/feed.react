import {client} from "../util/ApolloGraphQl";
import {GET_NEWS} from "../constants/query/news";
import {POST_SIGN_IN} from "../constants/mutation/user";
import {POST_CREATE_ARTICLE} from "../constants/mutation/news";

export function getNews() {
    return client.query({
        query: GET_NEWS
    });
}

export function createArticle(data) {
    return client.mutate({
        mutation: POST_CREATE_ARTICLE,
        variables: data
    })
}