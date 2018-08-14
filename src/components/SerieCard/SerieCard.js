import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classes from './serieCard.css';

class SerieCard extends Component {
    render() {
        const genreList = this.props.show.genres.map(g => g.name);
        const genreString = genreList.join(", ");

        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.show.original_name}
                    </Typography>

                    <Typography component="p">
                        {this.props.show.overview}
                    </Typography>

                    <Grid className={classes.metaDataContainer} container direction="row">
                        <Grid className={classes.gridMetaData} item xs={6}>
                            <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                                <span>Runtime</span>
                                <p>{this.props.show.episode_run_time[0]}</p>
                            </Typography>
                        </Grid>
                        <Grid className={classes.gridMetaData} item xs={6}>
                            <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                                <span>Genres</span>
                                <p>{genreString}</p>
                            </Typography>
                        </Grid>
                        <Grid className={classes.gridMetaData} item xs={6}>
                            <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                                <span>Number of Seasons</span>
                                <p>{this.props.show.number_of_seasons}</p>
                            </Typography>
                        </Grid>
                        <Grid className={classes.gridMetaData} item xs={6}>
                            <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                                <span>Ratings</span>
                                <p>{this.props.show.vote_average}</p>
                            </Typography>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.show
    };
};

export default connect(mapStateToProps, null)(SerieCard);