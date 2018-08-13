import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import classes from './serieCard.css';

class SerieCard extends Component {
    render() {
        return (
            <Card className={classes.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.show.name}
                    </Typography>

                    <Typography component="p">
                        {this.props.show.summary && (this.props.show.summary).replace(/<[^>]+>/g, '')}
                    </Typography>

                    <Grid className={classes.metaDataContainer} container direction="row">
                        <Grid className={classes.gridMetaData} item xs={6}>
                            <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                                <span>Runtime</span>
                                <p>{this.props.show.runtime}</p>
                            </Typography>
                        </Grid>
                        <Grid className={classes.gridMetaData} item xs={6}>
                            <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                                <span>Genres</span>
                                <p>{this.props.show.genres && this.props.show.genres.join(", ")}</p>
                            </Typography>
                        </Grid>
                        <Grid className={classes.gridMetaData} item xs={6}>
                            <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                                <span>Premiered</span>
                                <p>{this.props.show.premiered}</p>
                            </Typography>
                        </Grid>
                        <Grid className={classes.gridMetaData} item xs={6}>
                            <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                                <span>Ratings</span>
                                <p>{this.props.show.rating && this.props.show.rating.average}</p>
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