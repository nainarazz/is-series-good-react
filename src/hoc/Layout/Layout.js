import React, { Component } from 'react';

import Aux from '../Aux/Aux';
import Grid from '@material-ui/core/Grid';
import MovieCard from '../../components/MovieCard';
import PosterCard from '../../components/PosterCard';
import SearchBar from '../../components/SearchBar';

const styles = {
    margin: "auto",
    width: "80%"
}

class Layout extends Component {
    render() {
        return (
            <Aux>
                <div style={styles}>
                    <h3>Is this Serie good?</h3>

                    <Grid container direction="row" xs={12}>
                        <Grid item xs={12} sm={4} md={4}>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8}>
                            <SearchBar />
                        </Grid>
                        <Grid item xs={12} sm={4} md={4}>
                            <PosterCard />
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