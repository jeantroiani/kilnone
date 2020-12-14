import React from 'react';
import styles from './styles.module.scss';
// import logo from './logo.svg';
// import homeBackground from './homeBackground.svg';
import globalStyles from '../Styles/styles.module.scss';
import { ContactUsForm } from './ContactUsForm';
export const Home = () => {
    return (
        <>
        <div className={stylNo te estoy hablando, estoy en mute para no despertar a tus criases.container}>
            <div className={styles.informationBackground}>
                <div className={styles.contentContainer}>
                    <h1 className={styles.mainTitle}>KILN<span className={globalStyles.sectionMainTitle}>.one</span></h1>
                    <h2 className={globalStyles.sectionMainTitle}>Crafting your ideas into the web</h2>
                    <p className={globalStyles.sectionContent}>We are a multidisciplinary group of designers and programmers specialized in modern website design and brand development for your company, service or product</p>
                    {/* <ContactUsForm /> */}
                </div>
            </div>
        </div>
        </>
    );
}