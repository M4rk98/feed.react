import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import React, {memo, useEffect, useState} from "react";
import {useStyles} from "./style";
import Typography from "@material-ui/core/Typography";
import {useSelector} from "react-redux";
import {UserModel} from "../../page/UserModel";

function Navigation({dialog}) {
    const classes = useStyles();
    const userModel = UserModel();
    const user = useSelector(state => state.user);
    const defaultNavigationItems = [
        {
            name: 'Sign up',
            action: () => dialog.toggle('Sign up')
        },
        {
            name: 'Sign in',
            action: () => dialog.toggle('Sign in')
        }
    ];

    const [navigationItems, setNavigationItems] = useState(defaultNavigationItems);

    useEffect(() => {
        if (user.username) {
            setNavigationItems(
                [
                    {
                        name: 'Logout',
                        action: userModel.logout
                    }
                ]
            )
        } else {
            setNavigationItems(defaultNavigationItems)
        }
    }, [user]);



    function render() {
        const item_components = navigationItems.map((item) => (
            <Button
                className={classes.navigationItem_button}
                onClick={item.action}
                variant="outlined" size="small">
                {item.name}
            </Button>
        ));
        return (
            <Toolbar className={classes.toolbar}>
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
                {item_components}
            </Toolbar>
        )
    }

    return render();
}

export default memo(Navigation);