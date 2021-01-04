import React from 'react';
import globalStyles from '../../styles/styles.module.scss';
import { Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
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
    console.log(props)
    return (
        <Card className={styles.container}>
            <img className={styles.image} src={imageUrl} alt={imageAlt}/>
            <CardContent className={styles.cardContent}>
                <h1 className={styles.title}>{title}</h1>
                <p className={globalStyles.sectionContentMediumDarkNormal}>{text}</p>
            </CardContent>
            <CardActions className={styles.cardAction}>
            <Button variant="contained" className={globalStyles.button} onClick={action} >More about this</Button>
            </CardActions>
        </Card>
    );
}