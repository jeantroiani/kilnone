import React from 'react';
import globalStyles from '../../styles/styles.module.scss';
import styles from './styles.module.scss';

export interface ServiceProps {
    action: (event: any)=> void;
    title: string;
    text: string;
    imageUrl: any;
    imageAlt: string;
}

export const Service = (props: ServiceProps) => {
    const {action, title, text, imageUrl, imageAlt} = props;
    return (
        <li className={styles.container}>
            <img className={styles.image} src={imageUrl} alt={imageAlt}/>
            <div className={styles.cardContent}>
                <h1 className={styles.title}>{title}</h1>
                <p className={globalStyles.sectionContentMediumDarkLight}>{text}</p>
            </div>
            <div className={styles.cardAction}>
                <button className={globalStyles.button} onClick={action} >More about this</button>
            </div>
        </li>
    );
}