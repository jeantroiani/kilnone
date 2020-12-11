import React from 'react';
import styles from './styles.module.scss';
import globlaStyles from '../../Styles/styles.module.scss';
import logo from './logo.svg';

interface ServiceProps {
    action: (event: any)=> void;
    title: string;
    text: string;
}

export const Service = (props: ServiceProps) => {
    const {action, title, text} = props;
    return (
        <section > 
            <h1 className={globlaStyles.sectionMainTitle}>{title}</h1>
            <p>{text}</p>
            <button onClick={action}>More about this</button>
        </section>
    );
}