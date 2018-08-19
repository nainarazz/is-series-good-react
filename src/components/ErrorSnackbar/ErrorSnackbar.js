import React, { Component } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import { withStyles } from '@material-ui/core/styles';
import CustomizedSnackbarContent from './CustomizedSnackbarContent';


const styles = theme => ({
    margin: {
        margin: theme.spacing.unit,
    },
});

class CustomizedSnackbars extends Component {
    state = {
        open: false,
    };

    handleClick = () => {
        this.setState({ open: true });
    };

    handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        this.setState({ open: false });
    };

    componentDidMount() {
        this.setState({ open: this.props.error });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    open={this.state.open}
                    autoHideDuration={6000}
                    onClose={this.handleClose}
                >
                    <CustomizedSnackbarContent
                        variant="error"
                        className={classes.margin}
                        message={this.props.message}
                        onClose={this.handleClose}
                    />
                </Snackbar>
            </div>
        );
    }
}

export default withStyles(styles)(CustomizedSnackbars);
