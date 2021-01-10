import React from 'react';
import globalStyles from '../../styles/styles.module.scss';
import styles from './styles.module.scss';

export interface TestimonyProps {
    action: (event: any)=> void;
    title: string;
    text: string;
    imageUrl: any;
    imageAlt: string;
}

export const Testimony = (props: TestimonyProps) => {
    const {action, title, text, imageUrl, imageAlt} = props;
    return (
        <section className={styles.container}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={imageUrl} alt={imageAlt}/>
                <button className={styles.button} onClick={action} >More +</button>
            </div>
            <div className={styles.cardContent}>
                <h1 className={styles.title}>{title}</h1>
                <p className={globalStyles.sectionContentMediumDarkLight}>{text}</p>
            </div>
        </section>
    );
}