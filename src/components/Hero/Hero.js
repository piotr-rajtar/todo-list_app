import React from 'react';
import styles from './Hero.scss';

const Hero = props => (
    <header className={styles.component}>
        <h2 className={styles.title}>{props.titleText}</h2>
        <img src="/src/components/Hero/space.png" alt="Space logo" className={styles.image} />
    </header>
);



export default Hero;