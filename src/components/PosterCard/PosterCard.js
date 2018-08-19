import React from 'react';

import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import styles from './posterCard.css';
import noImage from '../../assets/no-image-available.jpg';

const posterCard = (props) => {
    return (
        <Card className={styles.card}>
            <CardMedia
                className={styles.media}
                image={props.imageUrl || noImage}
                title={props.title}
            />
        </Card>
    );
}
export default posterCard;