import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = {
    root: {
        textAlign: "right"
    },
    textField: {
        width: '100%'
    }
}

const searchBar = (props) => {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <TextField
                id="search"
                label="Search field"
                type="search"
                className={classes.textField}
                margin="normal"
            />
        </div>)
};

export default withStyles(styles)(searchBar);