import React from 'react';
import './App.css';
import NewsFeed from "../page/news_feed/NewsFeed";
import {MainTheme} from "../theme/MainTheme";
import {ThemeProvider} from '@material-ui/core/styles';
import {ApolloProvider} from '@apollo/react-hooks';
import {client} from "../util/ApolloGraphQl";
import {SnackbarProvider} from "notistack";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import {URL_NEWS} from "../constants/Routing";
import NewsHome from "../page/NewsHome";

function App() {
    return (
        <Router>
            <ApolloProvider client={client}>
                <SnackbarProvider maxSnack={3}>
                    <ThemeProvider theme={MainTheme}>
                        <Switch>
                            <Route path={'/'} render={() => <NewsHome />} />
                        </Switch>
                    </ThemeProvider>
                </SnackbarProvider>
            </ApolloProvider>
        </Router>
);
}

export default App;
