import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const styles = {
    card: {
        height: "100%"
    },
    media: {
        height: 0,
        paddingTop: '33.25%', // 16:9
    },
};

const card = (props) => {
    const { classes } = props;
    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image="/logo.svg"
                title="title"
            />
        </Card>
    );
}

export default withStyles(styles)(card);