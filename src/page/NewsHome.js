import {
    Route,
    useRouteMatch
} from "react-router-dom";
import React, {useEffect} from "react";
import NewsFeed from "./news_feed/NewsFeed";
import NewsCreation from "./news_creation/NewsCreation";
import Switch from "@material-ui/core/Switch";
import {NavigationTop} from "../layout/NavigationTop";
import CssBaseline from "@material-ui/core/CssBaseline";

function NewsHome() {
    const match = useRouteMatch();

    return (
        <NavigationTop>
            <Route
                exact
                path={`${match.path}`}
                component={NewsFeed}
            />
            <Route
                exact
                path={`${match.path}new`}
                component={NewsCreation}
            />
            <CssBaseline />
        </NavigationTop>

    )

}

export default NewsHome