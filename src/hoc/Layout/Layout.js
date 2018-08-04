import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Header from '../../containers/Header/Header';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

class Layout extends Component {
    render() {
        return (
            <Aux>
                <Header />
                <Grid container spacing={8}>
                    <Grid item xs={4}>
                        <Paper>side bar here</Paper>
                    </Grid>
                    <Grid item xs={8}>
                        <Paper>main content</Paper>
                    </Grid>
                </Grid>
            </Aux>
        );
    }
}

export default Layout;