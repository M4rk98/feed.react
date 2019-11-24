import Container from "@material-ui/core/Container";
import React from "react";
import Navigation from "./navigation/Navigation";
import CustomDialog from "../component/dialog/CustomDIalog";
import SignUp from "../page/sign_up/SignUp";
import {useToggle} from "../util/hook/useToggle";
import SignIn from "../page/sign_in/SignIn";

export function NavigationTop({children}) {
    const toggle = useToggle();

    function render() {
        return (
            <Container maxWidth="lg">
                {renderNavigation()}
                {children}
                {renderPageDialog()}
            </Container>
        )
    }

    function renderNavigation() {
        return <Navigation dialog={toggle} />
    }

    function renderPageDialog() {
        return (
            <CustomDialog
                title={'Sign up'}
                open={toggle.open}
                actions={{
                    handleClose: () => toggle.toggle(null),
                    onCancel: false,
                    onSubmit: false
                }}
            >
                {renderPageDialogContent()}
            </CustomDialog>
        )
    }

    function renderPageDialogContent() {
        if(toggle.content === "Sign up") {
            return <SignUp/>
        }

        return <SignIn />
    }

    return render();
}