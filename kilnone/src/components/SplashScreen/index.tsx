import React from 'react';
import styles from './styles.module.scss';
import logo from './logo.svg';

export const SplashScreen = () => {
    return (
        <React.Fragment>
            <div className={styles.landing}></div>
            <img src={logo} alt="Kilnone Logo"/>
            <h1 className={styles.error}>Kiln.one</h1>
            <p>Crafting your ideas into the web</p>
            <p >We are a multidisciplinary group of designers and programmers specialized in modern website design and brand development for your company, service or product</p>
            <h1>What We Offer</h1>
            <p>Kiln Studio is located in London, UK providing its customers branding, website design, web apps, illustrations and documentation among other services.</p>
            <p>We strive to produce engaging designs and web experiences by working together with our clients through constant communication and understanding of their needs.</p>
            <p>We pride ourself in following all our projects through from the moment we begin a relationship with our clients up to the delivery of the final product.</p>
            <h1>How We do it!</h1>
            <p>Be it a simple illustration to a complete web site or landing page we can deliver with the necessary knowledge, skills and professionalism.</p>
            <p>Our inspiration an expertise come from individual backgrounds and experiences melted in one single company.</p>
            <p>We are focused on providing tailored solutions using the latest technologies and design trends.</p>
            <h1>Testimonies & Case Study</h1>
            <h1>Contact Us</h1>


        </React.Fragment>
    );
}