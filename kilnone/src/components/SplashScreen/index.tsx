import React from 'react';
import styles from './styles.module.scss';
import logo from './logo.svg';

export const SplashScreen = () => {
    return (
        <>
            <div className={styles.landing}></div>
            <img src={logo} alt="Kilnone Logo"/>
            <h1 className={styles.error}>Kiln.one</h1>
            <p>Crafting your ideas into the web</p>
            <p >We are a multidisciplinary group of designers and programmers specialized in modern website design and brand development for your company, service or product</p>
        </>
    );
}