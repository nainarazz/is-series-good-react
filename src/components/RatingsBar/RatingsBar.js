import React from 'react';
import classes from './ratingsbar.css';

const ratingBar = (props) => {
    return (
        <div className={classes.skill}>
            <div className={classes.ratingBar}>
                <div classname={classes.rate1}>
                    <span className={`${classes.animate} ${classes.blue}`}>
                        <div className={classes.siteName}>{props.siteName}</div> 
                        <div className={classes.rating}>{props.rating}</div>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default ratingBar;