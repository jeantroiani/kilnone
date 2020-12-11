import React from 'react';
import globlaStyles from '../../Styles/styles.module.scss';
import { Button } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Card from '@material-ui/core/Card';
import styles from './styles.module.scss';

interface ServiceProps {
    action: (event: any)=> void;
    title: string;
    text: string;
}

export const Service = (props: ServiceProps) => {
    const {action, title, text} = props;
    return (
        <Card className={styles.container}> 
            <CardContent>
                <h1 className={globlaStyles.sectionMainTitle}>{title}</h1>
                <p>{text}</p>
            </CardContent>
            <CardActions>
            <Button className={globlaStyles.button} onClick={action} color="secondary">More about this</Button>
            </CardActions>
        </Card>
    );
}