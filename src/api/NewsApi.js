import {client} from "../util/ApolloGraphQl";
import {GET_NEWS} from "../constants/query/news";

export function getNews() {
    return client.query({
        query: GET_NEWS
    });
}