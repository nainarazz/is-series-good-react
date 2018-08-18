import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RatingBar from '../RatingsBar/RatingsBar';
import classes from './serieCard.css';
import OverAllRatings from '../OverallRatings/OverAllRatings';

const serieCard = (props) => {
    const ratingBars = Object.keys(props.ratings).map(key => {
        return { rater: key, rating: props.ratings[key] }
    });

    return (
        <Card className={classes.card}>
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {props.name}
                </Typography>

                <Typography component="p">
                    {props.overview}
                </Typography>

                <Grid className={classes.metaDataContainer} container direction="row">
                    <Grid className={classes.gridMetaData} item xs={6}>
                        <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                            <span>Runtime</span>
                            <p>{props.runtime[0]}</p>
                        </Typography>
                    </Grid>
                    <Grid className={classes.gridMetaData} item xs={6}>
                        <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                            <span>Genres</span>
                            <p>{props.genres}</p>
                        </Typography>
                    </Grid>
                    <Grid className={classes.gridMetaData} item xs={6}>
                        <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                            <span>Number of Seasons</span>
                            <p>{props.seasons}</p>
                        </Typography>
                    </Grid>
                    <Grid className={classes.gridMetaData} item xs={6}>
                        <Typography className={classes.serieMetaData} gutterBottom variant="subheading">
                            <span>Status</span>
                            <p>{props.status}</p>
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row">
                    <Grid container direction="column" item xs={12} sm={6} md={6}>
                        <Grid className={classes.ratingGrid}>
                            {ratingBars.map(r => {
                                if (r.rater !== "overall_rating" && r.rating) {
                                    return <RatingBar key={r.rater} siteName={r.rater} rating={r.rating} />
                                }
                                return null;
                            })}
                        </Grid>
                    </Grid>
                    <Grid container direction="column" item xs={12} sm={6} md={6}>
                        <Grid className={classes.finalRatingGrid}>
                            <OverAllRatings rating={props.ratings.overall_rating} />
                        </Grid>
                    </Grid>
                </Grid>

            </CardContent>
        </Card>
    );
}

export default serieCard;