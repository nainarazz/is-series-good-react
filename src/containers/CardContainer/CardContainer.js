import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import SerieCard from '../../components//SerieCard/SerieCard';
import PosterCard from '../../components/PosterCard/PosterCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './cardContainer.css';
import SimilarShows from '../../components/SimilarShows/SimilarShowsGrid';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';
import { TMBD_IMAGE_BASE_URL } from '../../api-constants';

class CardContainer extends Component {

    render() {
        const genreList = (this.props.show.genres && this.props.show.genres.map(g => g.name)) || null;
        const genreString = (genreList && genreList.join(", ")) || "";
        const imageSource = this.props.show.poster_path ? TMBD_IMAGE_BASE_URL + '/w500' + this.props.show.poster_path : "";

        let components = <Spinner />;

        if (!this.props.isLoading) {
            if (this.props.show.id) {
                const similarShowsComponent = this.props.similarShows.length > 0 ?
                    (<Grid item xs={12}>
                        <h3 style={{ color: "white", textAlign: "center" }}>Similar Shows</h3>
                        <SimilarShows />
                    </Grid>)
                    : null;

                components = (
                    <div>
                        <Grid className={styles.headerContainer} container direction="row">
                            <Grid item xs={12} sm={12} md={4}>
                                <h3 style={{ color: "white" }}>Is this Serie good?</h3>
                            </Grid>

                            <Grid style={{ margin: "auto" }} item xs={12} sm={12} md={8}>
                                <SearchBar />
                            </Grid>
                        </Grid>

                        <Grid container direction="row">
                            <Grid item xs={12} sm={12} md={4}>
                                <PosterCard imageUrl={imageSource}
                                    title={this.props.show.name} />
                            </Grid>

                            <Grid item xs={12} sm={12} md={8}>
                                <SerieCard name={this.props.show.original_name}
                                    overview={this.props.show.overview}
                                    runtime={this.props.show.episode_run_time[0]}
                                    genres={genreString}
                                    seasons={this.props.show.number_of_seasons}
                                    status={this.props.show.status}
                                    ratings={this.props.ratingsFromSites}
                                />
                            </Grid>

                            {similarShowsComponent}
                        </Grid>
                    </div>
                );
            } else {
                components = (
                    <div>
                        <Grid className={styles.container}>
                            <h3>Is this Serie good?</h3>
                            <SearchBar />
                        </Grid>
                    </div>
                );
            }
        }

        return (
            { ...components }
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.show,
        ratingsFromSites: state.ratingsFromSites,
        similarShows: state.similarShows,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, null)(CardContainer);