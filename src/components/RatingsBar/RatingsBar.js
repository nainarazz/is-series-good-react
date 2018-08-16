import React from 'react';
import classes from './ratingsbar.css';

const ratingBar = (props) => {
    return (
        <div className={classes.skill}>
            <div className={classes.ratingBar}>
                <div className={classes["rate" + Math.ceil(props.rating)]}>
                    <span className={`${classes.animate} ${classes.blue}`}>
                        <span className={classes.siteName}>{props.siteName}</span> 
                        <span className={classes.rating}>{props.rating}/10</span>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ratingBar;