import React from 'react';

import styles from './Button.module.css';

const button = () => {
    return (
        <div className={styles.ButtonContainer}>
            <button className={styles.Button}>Click Me</button>
        </div>
    )
}

export default button;
