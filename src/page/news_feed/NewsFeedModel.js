import {useEffect, useState} from "react";
import {NewsServiceModel} from "../../service/NewsServiceModel";

export function NewsFeedModel() {
    const featuredPosts = [
        {
            title: 'Featured post',
            date: 'Nov 12',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
        },
        {
            title: 'Post title',
            date: 'Nov 11',
            description:
                'This is a wider card with supporting text below as a natural lead-in to additional content.',
        },
    ];

    const newsServiceModel = NewsServiceModel();
    const [news, setNews] = useState([]);

    async function getNews() {
        const {error, loading, data } = await newsServiceModel.readNews();

        if(!error) {
            setNews(data);
        }

        return error;
    }


    useEffect(() => {
        getNews()
    }, [getNews]);

    return {
        states: {
            featuredPosts,
            news
        }
    }

}