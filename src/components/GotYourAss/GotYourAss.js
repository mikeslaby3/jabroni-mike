import React from 'react';

import classes from './GotYourAss.module.css';
import Hand from '../Hand/Hand';

const gotYourAss = () => {
    return (
            <div className={classes.Modal}>
                <Hand />
            </div>
    )
}

export default gotYourAss;