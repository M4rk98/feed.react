import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles(theme => ({
    toolbar: {
        display: 'flex',
        borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbarTitle: {
        textAlign: 'left',
        flex: 1,
    },
    navigationItem_button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }


}));
