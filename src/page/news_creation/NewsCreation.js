import React from 'react';
import {useSelector} from "react-redux";
import NotLoggedIn from "../../component/not_logged_in/NotLoggedIn";
import {NewsCreationModel} from "./NewsCreationModel";
import {TextField, Typography} from "@material-ui/core";
import {useStyles} from "./style";
import Button from "@material-ui/core/Button";
import {useSnackbar} from "notistack";

function NewsCreation() {
    const user = useSelector(state => state.user);
    const { enqueueSnackbar } = useSnackbar();
    const newsCreationModel = NewsCreationModel();
    const classes = useStyles();

    const {
        form
    } = newsCreationModel.states;

    const {
        createArticle
    } = newsCreationModel.events;

    async function handleCreatePost() {
        const res = await createArticle();
        if (res.errors) {
            enqueueSnackbar(res.errors, {variant: 'error'});
            return ;
        }
        enqueueSnackbar('Successful post creation', {variant: 'success'});
    }

    function render() {
        if(!user.token) {
            return <NotLoggedIn/>
        }

        return renderCreationForm()
    }

    function renderCreationForm() {
        return (
            <>
                <Typography
                    className={classes.newsCreationContent_textfield}
                    variant={'h6'}>Tell us some news! :) </Typography>
                <TextField
                    label={'Title'}
                    variant={'outlined'}
                    fullWidth
                    onBlur={(e) =>
                        form.setFormDataByName('title', e.target.value)
                    }
                />
                <TextField
                    className={classes.newsCreationContent_textfield}
                    label={'Content'}
                    variant={'outlined'}
                    fullWidth
                    multiline
                    rows="6"
                    onBlur={(e) =>
                        form.setFormDataByName('content', e.target.value)
                    }
                />
                {renderIsHighlighted()}
                <Button
                    className={classes.articleCreation_button}
                    onClick={handleCreatePost}
                >
                    Create post
                </Button>
            </>
        )
    }

    function renderIsHighlighted() {
        return (
            <TextField
                type={'number'}
                label={'Highlighted order'}
                variant={'outlined'}
                onBlur={(e) =>
                    form.setFormDataByName('highlighted', Number(e.target.value))
                }
            />

        )
    }

    return render();
}

export default NewsCreation;