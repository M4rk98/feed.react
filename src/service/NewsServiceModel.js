import {getNews} from "../api/NewsApi";

export function NewsServiceModel() {

    function readNews() {
        return getNews();
    }

    return {
        readNews
    }

}