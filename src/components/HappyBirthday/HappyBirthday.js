import React from 'react';

import classes from './HappyBirthday.module.css';

const happyBirthday = () => {
    return (
        <div className={classes.Modal}>
            <img className={classes.Confetti} src={process.env.PUBLIC_URL + "/images/bday-confetti.png"} alt="bday-confetti"></img>
            <h1 className={[classes.BirthdayFont, classes.glow].join(' ')}>HAPPY BIRTHDAY GABY!</h1>
            <img className={classes.Gif} src="https://media.giphy.com/media/Dl2seYrwPvfjO/giphy.gif" alt="dancing dog"></img>
        </div>
        
    )
}

export default happyBirthday;