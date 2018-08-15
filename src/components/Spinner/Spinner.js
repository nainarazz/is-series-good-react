import React from 'react';

import classes from './spinner.css';

const spinner = () => (
    <div className={classes.spinnerContainer}>
        <div className={classes.Loader}>Loading...</div>
    </div>
);

export default spinner;