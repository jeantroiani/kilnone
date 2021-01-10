import React from 'react';
import globalStyles from '../../styles/styles.module.scss';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
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
        <>
        <div className={styles.imageContainer}>
            <img className={styles.image} src={imageUrl} alt={imageAlt}/>
            <button className={globalStyles.button} onClick={action} >More about this</button>
        </div>
            <div className={styles.cardContent}>
                <h1 className={styles.title}>{title}</h1>
                <p className={globalStyles.sectionContentMediumDarkLight}>{text}</p>
            </div>
        </>
    );
}