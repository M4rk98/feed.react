import {Typography} from "@material-ui/core";
import React from "react";

function NotLoggedIn() {
    function render() {
        return (
            <Typography variant={'h6'}>
                You have to login first to use this page!
            </Typography>
        )

    }

    return render()
}

export default NotLoggedIn