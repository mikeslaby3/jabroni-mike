import React, { Component } from 'react';

import classes from './Music.module.css';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            play: false,
            pause: true,
        }
        this.url = "http://streaming.tdiradio.com:8000/house.mp3";
        this.audio = new Audio(this.url);
    }

    play = () => {
        this.setState({ play: true, pause: false });
        this.audio.play();
    }

    pause = () => {
        this.setState({ play: false, pause: true });
        this.audio.pause();
    }
    
    render() {
        return (
            <div className={classes.ButtonContainer}>
                <button 
                    className={[classes.Button, classes.Funk].join(' ')} 
                    onClick={this.play}>Get Funky</button>
                <button 
                    className={[classes.Button, classes.NoFunk].join(' ')} 
                    onClick={this.pause}>Remove the Funk</button>
            </div>
        );
    }
}

export default Music;