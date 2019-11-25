import {createArticle, getNews} from "../api/NewsApi";

export function NewsServiceModel() {

    function readNews() {
        return getNews();
    }

    function postCreateArticle(data) {
        return createArticle(data)
    }

    return {
        readNews,
        postCreateArticle
    }

}