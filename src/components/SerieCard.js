import React, { Component } from 'react';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';

class SerieCard extends Component {
    render() {
        const classes = {
            card: {
                height: "100%"
            },
            media: {
                height: 0,
                paddingTop: '33.25%', // 16:9
            },
        };

        return (
            // <Card className={classes.card}>
            //     {/* <CardMedia
            //             className={classes.media}
            //         /> */}
            //     <CardContent>
            //         <Typography gutterBottom variant="headline" component="h2">
            //             Movie
            //             </Typography>
            //         <Typography component="p">
            //             this will be a movie summary description
            //         </Typography>
            //     </CardContent>
            // </Card>
            <div>
                <p>Hello {this.props.show.original_name}</p>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.show
    };
};

export default connect(mapStateToProps, null)(SerieCard);