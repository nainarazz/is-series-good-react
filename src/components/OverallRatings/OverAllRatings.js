import React from 'react';
import classes from './overAllRatings.css';

function getSerieImpressionText(rating) {
    let text = "just choose another serie";

    if (rating >= 8) {
        text = "Awesome!!";
    } else if (rating >= 7) {
        text = "Great!";
    } else if (rating >= 5) {
        text = "not bad";
    }

    return text;
}
const overAllRatings = (props) => {
    return (
        <div>
            <span className={classes.circle}>{props.rating}</span>
            <span className={classes.impressionText}>{getSerieImpressionText(props.rating)}</span>
        </div>
    )
}

export default overAllRatings;