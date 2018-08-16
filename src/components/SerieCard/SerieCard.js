import React from 'react';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import RatingBar from '../RatingsBar/RatingsBar';
import classes from './serieCard.css';

const serieCard = (props) => {
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
                    <Grid className={classes.ratingGrid} item xs={12}>
                        <RatingBar siteName="TMBD" rating={props.ratings} />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default serieCard;