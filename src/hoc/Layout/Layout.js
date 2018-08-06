import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../../components/MovieCard/MovieCard';

const styles = {
    margin: "auto",
    width: "80%"
}

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div style={styles}>
                    <h1>Is this Serie good?</h1>
                    <Grid container direction="row" xs={12}>
                        <Grid item xs={12} sm={4} md={4}>
                            poster here
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <MovieCard />
                        </Grid>
                        <Grid item xs={12}>
                            similar
                        </Grid>
                    </Grid>
                </div>
            </Aux>
        );
    }
}

export default Layout;