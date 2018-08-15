import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import SerieCard from '../../components//SerieCard/SerieCard';
import PosterCard from '../../components/PosterCard/PosterCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './cardContainer.css';
import SimilarShows from '../../components/SimilarShows/SimilarShowsGrid';
import { connect } from 'react-redux';
import Spinner from '../../components/Spinner/Spinner';

class CardContainer extends Component {

    render() {
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
                                <PosterCard />
                            </Grid>

                            <Grid item xs={12} sm={12} md={8}>
                                <SerieCard />
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
        similarShows: state.similarShows,
        isLoading: state.isLoading
    }
}

export default connect(mapStateToProps, null)(CardContainer);