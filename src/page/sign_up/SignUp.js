import React, {memo} from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {SignUpModel} from "./SignUpModel";
import {useSnackbar} from "notistack";

function SignUp() {
    const { enqueueSnackbar } = useSnackbar();
    const signUpModel = SignUpModel();
    const {
        form,
        fields
    } = signUpModel.states;

    const {
        handleSignUp
    } = signUpModel.events;

    async function handleSubmit() {
        const res = await handleSignUp();
        if(res.errors) {
            enqueueSnackbar(res.errors, { variant: 'error' });
            return ;
        }

        enqueueSnackbar('Successful registration', {variant: 'success'})


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
                >Sign up</Button>
            </>
        )
    }

    return render();
}

export default memo(SignUp);