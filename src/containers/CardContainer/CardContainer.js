import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import SerieCard from '../../components//SerieCard/SerieCard';
import PosterCard from '../../components/PosterCard/PosterCard';
import SearchBar from '../../components/SearchBar/SearchBar';
import styles from './cardContainer.css';
import { connect } from 'react-redux';

class CardContainer extends Component {

    render() {
        let components = (
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

                    <Grid item xs={12}>
                        similar
                    </Grid>
                </Grid>
            </div>
        );

        if (!this.props.show.id) {
            components = (
                <div>
                    <Grid className={styles.container}>
                        <h3>Is this Serie good?</h3>
                        <SearchBar />
                    </Grid>
                </div>
            );
        }

        return (
            { ...components }
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.show
    }
}

export default connect(mapStateToProps, null)(CardContainer);