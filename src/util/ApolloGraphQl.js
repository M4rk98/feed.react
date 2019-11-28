import {ApolloClient} from 'apollo-client';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {createHttpLink} from 'apollo-link-http';
import store from "../store";
import {setContext} from 'apollo-link-context';
import {BASE_URL} from "../constants/Routing";


const cache = new InMemoryCache();
const httpLink = createHttpLink({
    uri: BASE_URL,
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from redux if it exists
    const token = store.getState().user.token;
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});
export const client = new ApolloClient({
    cache,
    link: authLink.concat(httpLink),
});