import React from 'react';
import classes from './overAllRatings.css';

const overAllRatings = (props) => {
    return (
        <div>
            <span className={classes.circle}>{props.rating}</span>
            <span className={classes.impressionText}>Great show!!</span>
        </div>
    )
}

export default overAllRatings;