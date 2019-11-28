import React, {memo} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {useSnackbar} from "notistack";
import {SignInModel} from "./SignInModel";

function SignIn({onSubmit}) {
    const { enqueueSnackbar } = useSnackbar();
    const signInModel = SignInModel();
    const {
        form,
        fields
    } = signInModel.states;

    const {
        handleSignIn
    } = signInModel.events;

    async function handleSubmit() {
        const res = await handleSignIn();
        if(res.errors) {
            enqueueSnackbar(res.errors, { variant: 'error' });
            return ;
        }

        onSubmit();
        enqueueSnackbar('Successful login', {variant: 'success'})


    }

    function render() {
        const field_components = fields.map((field) => (
            <TextField
                onBlur={(e) => form.setFormDataByName(field.name, e.target.value)}
                id="filled-full-width"
                label={field.name}
                placeholder={field.name}
                fullWidth
                type={field.type}
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        ));

        return (
            <>
                {field_components}
                <Button
                    onClick={handleSubmit}
                    fullWidth={true}
                    variant={'contained'}
                    color={'primary'}
                >Sign in</Button>
            </>
        )
    }

    return render();
}

export default memo(SignIn);