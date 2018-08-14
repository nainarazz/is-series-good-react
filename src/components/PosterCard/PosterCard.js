import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import styles from './posterCard.css';
import { TMBD_IMAGE_BASE_URL } from '../../api-constants';

class PosterCard extends Component {
    render() {
        
        const imageSource = TMBD_IMAGE_BASE_URL + '/w500' + this.props.show.poster_path; 
        return (
            <Card className={styles.card}>
                <CardMedia
                    className={styles.media}
                    image={imageSource}
                    title={this.props.show.name}
                />
            </Card>
        );
    }
}

const mapStateToProps = state => {
    return {
        show: state.show
    };
};

export default connect(mapStateToProps, null)(PosterCard);