import React from 'react';
import styles from './styles.module.scss';
import globalStyles from '../styles/styles.module.scss';
import { Service, ServiceProps } from './Service';
import person from "./app.png";
import bench from "./bench.png";

// interface IService {
//     action: (event: any) => void,
//     title: string,
//     text: string,
// }

const services : Array<ServiceProps> = [
    {
        action: (event: any) => console.log(event),
        title: "Application development",
        text: "If functionality is what you are looking for web apps can provide with multi plataform/device solutions.",
        imageUrl: person,
        imageAlt: "Person looking at yellow board with an iPad"
    },
    {
        action: (event: any) => console.log(event),
        title: "Web development",
        text: "Websites can provide full inmersive experiences. Interactive and responsive are the name of the game.",
        imageUrl: bench,
        imageAlt: "Person looking at yellow board with an iPad"
    },
    {
        action: (event: any) => console.log(event),
        title: "Branding",
        text: "Need a complete solution to your image? Our team can appropriately develop an entire concept to suit your needs.",
        imageUrl: person,
        imageAlt: "Person looking at yellow board with an iPad"
    }
];
    

export const WhatWeOffer = () => {

    return (
        <section className={globalStyles.section}> 
            <h1 className={globalStyles.sectionMainTitleDark}>What we do</h1>
            <p className={globalStyles.largeDarkSans}>Kiln Studio is located in London, UK providing its customers branding, website design, web apps, illustrations and documentation among other services.
            We strive to produce engaging designs and web experiences by working together with our clients through constant communication and understanding of their needs.
            We pride ourself in following all our projects through from the moment we begin a relationship with our clients up to the delivery of the final product.</p>
            <ul className={styles.serviceGroups}>
             {services.map((service: ServiceProps) => <li className={styles.service}>                 
                <Service 
                        action={service.action}
                        title={service.title}
                        text={service.text}
                        imageUrl={service.imageUrl}
                        imageAlt={service.imageAlt}
                    /></li>
             )}
            </ul>
        </section>
    );
}