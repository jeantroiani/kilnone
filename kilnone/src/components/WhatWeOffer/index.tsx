import React from 'react';
import styles from './styles.module.scss';
import globlaStyles from '../Styles/styles.module.scss';
import logo from './logo.svg';
import { Service } from './Service';

export const WhatWeOffer = () => {
    return (
        <section > 
            <h1 className={globlaStyles.sectionMainTitle}>What We Offer</h1>
            <p>Kiln Studio is located in London, UK providing its customers branding, website design, web apps, illustrations and documentation among other services.</p>
            <p>We strive to produce engaging designs and web experiences by working together with our clients through constant communication and understanding of their needs.</p>
            <p>We pride ourself in following all our projects through from the moment we begin a relationship with our clients up to the delivery of the final product.</p>
            <ul>
            <li>
                <Service 
                    action={(event: any) => console.log(event)}
                    title={"Application development"}
                    text={"If functionality is what you are looking for web apps can provide with multi plataform/device solutions."}
                />
            </li>
            </ul>
        </section>
    );
}