import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from "@material-ui/core/DialogTitle";

export default function CustomDialog({children, title, actions, open}) {

    function render() {
        return (
            <div>
                <Dialog
                    fullWidth={true}
                    maxWidth={"lg"}
                    open={open}
                    onClose={actions.handleClose}
                    aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">{title}</DialogTitle>
                    <DialogContent>
                        {children}
                    </DialogContent>
                    {renderActions()}
                </Dialog>
            </div>

        )
    }

    function renderActions() {
        const actions = [];

        if(actions.onCancel) {
            const onCancel_text = actions.onCancel.text || 'Cancel';
            actions.push(
                <Button  color="primary">
                    {onCancel_text}
                </Button>
            )
        }

        if(actions.onSubmit) {
            const onSubmit_text = actions.onSubmit.text || 'Submit';
            actions.push(
                <Button  color="primary">
                    {onSubmit_text}
                </Button>

            )
        }

        return (
            <DialogActions>
                {actions}
            </DialogActions>
        )
    }

    return render();
}