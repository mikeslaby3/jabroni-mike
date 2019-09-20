import React from 'react';

import classes from './Hand.module.css';
import handImage from '../../assets/images/got-ur-ass.jpg';

const hand = () => {
    return (
        <div>
            <img className={classes.hand} src={handImage} alt="hand"></img>
        </div>
    );
}

export default hand;