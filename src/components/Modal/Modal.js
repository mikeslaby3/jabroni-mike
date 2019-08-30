import React from 'react';

import classes from './Modal.module.css';
import Aux from '../../hoc/Aux';
import Backdrop from '../Backdrop/Backdrop';

const confetti = process.env.PUBLIC_URL + "/images/confetti-background.jpg";

const modal = (props) => (
    <Aux>
        <Backdrop 
            show={props.show}
            clicked={props.modalClosed} 
        />
        <div 
            className={classes.Modal}
            style={{
                transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.show ? '1' : '0',
                backgroundImage: `url(${confetti})`,
            }}>
            {props.children}
        </div>
    </Aux>
)

export default modal;