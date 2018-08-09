import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './serieCard.css';

class SerieCard extends Component {
    render() {
        return (
            <Card className={styles.card}>
                <CardContent>
                    <Typography gutterBottom variant="headline" component="h2">
                        {this.props.show.name}
                    </Typography>

                    <Typography component="p">
                        {this.props.show.summary && (this.props.show.summary).replace(/<[^>]+>/g, '')}
                    </Typography>

                    <Grid container direction="row">
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="subheading">
                                Runtime
                                <p>{this.props.show.runtime}</p>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="subheading">
                                Genres
                                <p>{this.props.show.genres && this.props.show.genres.join(", ")}</p>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="subheading">
                                Premiered
                                <p>{this.props.show.premiered}</p>
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <Typography gutterBottom variant="subheading">
                                Ratings
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