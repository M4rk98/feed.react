import {client} from "../util/ApolloGraphQl";
import {POST_SIGN_IN, POST_SIGN_UP} from "../constants/mutation/user";

export function signUp(data) {
    return client.mutate({
        mutation: POST_SIGN_UP,
        variables: data
    });
}

export function signIn(data) {
    return client.mutate({
        mutation: POST_SIGN_IN,
        variables: data
    });
}