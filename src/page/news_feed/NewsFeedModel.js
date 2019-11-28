import {useEffect, useState} from "react";
import {NewsServiceModel} from "../../service/NewsServiceModel";

export function NewsFeedModel() {

    const newsServiceModel = NewsServiceModel();
    const [news, setNews] = useState([]);

    useEffect(() => {
        getNews()
    }, []);


    async function getNews() {
        const {error, loading, data } = await newsServiceModel.readNews();
        if(!error) {
            setNews(data.news);
        }

        return error;
    }

    return {
        states: {
            news
        }
    }

}