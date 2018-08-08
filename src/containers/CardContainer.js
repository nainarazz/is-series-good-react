import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import SerieCard from '../components/SerieCard';
import PosterCard from '../components/PosterCard';
import SearchBar from '../components/SearchBar';
import axios from '../axios';
import {TMBD_API_KEY} from '../store/api-constants';

class CardContainer extends Component {

    componentDidMount() {
        this.getTvShow();
    }

    getTvShow = () => {
        axios.get(`/search/tv?api_key=${TMBD_API_KEY}&language=en-US&query=silicon%20valley`)
        .then(result => {
            console.log("TV show returned: ", result.data.results);
        })
        .catch(error => {
            console.log(error.message);
        });
    }

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