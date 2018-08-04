import React from 'react';
import styles from './HeaderStyles.js';
import Logo from '../../components/Logo/Logo';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const header = (props) => {
    const { classes } = props;
    return (
        <div>
            <AppBar className={classes.appBar} position="static" color="default">
                <Toolbar className={classes.Toolbar}>
                <span>Movies</span><Logo height={50} width={50}/><span>Tv Series</span>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default withStyles(styles)(header);