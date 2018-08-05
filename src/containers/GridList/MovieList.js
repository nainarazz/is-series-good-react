import React, { Component } from 'react';
import MovieCard from '../../components/MovieCard/MovieCard';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';

class MovieList extends Component {
    render() {
        const arr = Array.from({ length: 9 }, (v, k) => k + 1);
        const list = arr.map(num => (
            <Grid item xs={4}>
                <MovieCard key={num} index={num} />
            </Grid>
        ));

        return (
            <Grid container direction="row" alignItems="center" xs spacing={16}>
                {list}
            </Grid>
        );
    }
}

export default MovieList;