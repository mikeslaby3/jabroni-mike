import React from 'react';

import styles from './Button.module.css';

const button = (props) => {
    return (
        <div className={styles.ButtonContainer}>
            <button 
                className={styles.Button}
                onClick={props.openModal}>Click Me</button>
        </div>
    )
}

export default button;
