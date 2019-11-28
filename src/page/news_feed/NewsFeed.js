import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Container from '@material-ui/core/Container';
import {useStyles} from "./style";
import Carousel from "../../component/carousel/Carousel";
import {NewsFeedModel} from "./NewsFeedModel";

export default function NewsFeed() {
    const newsFeedModel = NewsFeedModel();
    const classes = useStyles();
    const {
        news
    } = newsFeedModel.states;


    function render() {
        return (
            <React.Fragment>
                {renderPosts()}
                {renderFooter()}
            </React.Fragment>
        );
    }

    function renderPosts() {
        return (
            <main>
                {renderFeaturedPosts()}
                {/* Sub featured posts */}
                <Grid container spacing={4}>
                    {renderOtherPosts()}
                </Grid>
                {/* End sub featured posts */}
            </main>
        )
    }

    function renderFeaturedPosts() {
        return (
            <Paper className={classes.mainFeaturedPost}>
                <Carousel
                />
            </Paper>
        )
    }

    function renderOtherPosts() {
        console.log(news)
        return news.map(post => (
            <Grid item key={post.title} xs={12} md={6}>
                <CardActionArea component="a" href="#">
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component="h2" variant="h5">
                                    {post.title}
                                </Typography>
                                <Typography variant="subtitle1" color="textSecondary">
                                    {post.date}
                                </Typography>
                                <Typography variant="subtitle1" paragraph>
                                    {post.description}
                                </Typography>
                                <Typography variant="subtitle1" color="primary">
                                    Continue reading...
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Grid>
        ))
    }

    function renderFooter() {
        return (
            <footer className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography variant="h6" align="center" gutterBottom>
                        Footer
                    </Typography>
                    <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                        Something here to give the footer a purpose!
                    </Typography>
                </Container>
            </footer>
        )
    }

    return render();
}