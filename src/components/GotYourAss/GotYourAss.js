import React from 'react';

import classes from './GotYourAss.module.css';
import Hand from '../Hand/Hand';

const gotYourAss = () => {

    const text = {
        fontSize: '50px',
        fontFamily: 'Lobster, cursive'
    }

    return (
            <div className={classes.Modal}>
                <Hand />
                <p style={text}>Got yo ass!</p>
            </div>
    )
}

export default gotYourAss;