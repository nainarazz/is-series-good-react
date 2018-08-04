import React from 'react';
import classes from './Logo.css';
import appLogo from '../../logo.svg'

const logo = (props) => {
    return (
        <div className={classes.Logo}
            style={
                {
                    height: props.height,
                    width: props.width
                }
            }>
            <img src={appLogo} alt="entertainement Logo" />
        </div>
    )
}

export default logo;