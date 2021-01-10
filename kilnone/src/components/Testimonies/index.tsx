import React from 'react';
import styles from './styles.module.scss';
import globalStyles from '../styles/styles.module.scss';
import { Testimony, TestimonyProps } from './Testimony';


const services : Array<TestimonyProps> = [
    {
        action: (event: any) => console.log(event),
        title: "Application development",
        text: "If functionality is what you are looking for web apps can provide with multi plataform/device solutions.",
        imageUrl: 'https://picsum.photos/420/420?blur=3',
        imageAlt: "Person looking at yellow board with an iPad"
    },
    {
        action: (event: any) => console.log(event),
        title: "Web development",
        text: "Websites can provide full inmersive experiences. Interactive and responsive are the name of the game.",
        imageUrl: 'https://picsum.photos/420/420?blur=3',
        imageAlt: "Person looking at yellow board with an iPad"
    },
    {
        action: (event: any) => console.log(event),
        title: "Branding",
        text: "Need a complete solution to your image? Our team can appropriately develop an entire concept to suit your needs.",
        imageUrl: 'https://picsum.photos/420/420?blur=3',
        imageAlt: "Developer working on a computer"
    }
];
    

export const Testimonies = () => {

    return (
        <section className={globalStyles.section}> 
            <h1 className={globalStyles.sectionMainTitleDark}>Testimonies &amp; Case Study</h1>
            <ul className={styles.serviceGroups}>
             {services.map((service: TestimonyProps) => <li className={styles.service}>                 
                <Testimony 
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