import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import {useStyles} from "./style";
import Carousel from "../../component/carousel/Carousel";
import {NewsFeedModel} from "./NewsFeedModel";

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function NewsFeed() {
    const newsFeedModel = NewsFeedModel();
    const classes = useStyles();

    const {
        featuredPosts
    } = newsFeedModel.states;

    function render() {
        return (
            <React.Fragment>
                <CssBaseline />
                <Container maxWidth="lg">
                    {renderHeader()}
                    {renderPosts()}
                </Container>
                {renderFooter()}
            </React.Fragment>
        );
    }

    function renderHeader() {
        return (
            <Toolbar className={classes.toolbar}>
                <Button size="small">Subscribe</Button>
                <Typography
                    component="h2"
                    variant="h5"
                    color="inherit"
                    align="center"
                    noWrap
                    className={classes.toolbarTitle}
                >
                    Blog
                </Typography>
                <IconButton>
                    <SearchIcon />
                </IconButton>
                <Button variant="outlined" size="small">
                    Sign up
                </Button>
            </Toolbar>
        )
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
                <Carousel />
            </Paper>
        )
    }

    function renderOtherPosts() {
        return featuredPosts.map(post => (
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
                    <Copyright />
                </Container>
            </footer>
        )
    }

    return render();
}