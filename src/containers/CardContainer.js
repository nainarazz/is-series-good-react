import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import SerieCard from '../components/SerieCard';
import PosterCard from '../components/PosterCard';
import SearchBar from '../components/SearchBar/SearchBar';

class CardContainer extends Component {

    render() {
        return (
            <Grid container direction="row">
                <Grid item xs={12} sm={4} md={4}>
                </Grid>

                <Grid item xs={12} sm={8} md={8}>
                    <SearchBar />
                </Grid>

                <Grid item xs={12} sm={4} md={4}>
                    <PosterCard />
                </Grid>

                <Grid item xs={12} sm={8} md={8}>
                    <SerieCard />
                </Grid>

                <Grid item xs={12}>
                    similar
                </Grid>
            </Grid>
        );
    }
}

export default CardContainer;