import styles from './styles.module.scss';
import globalStyles from '../styles/styles.module.scss';

export const HowWeDoIt = () => {
  return (
    <section className={styles.section}> 
            <div className={styles.content}>
                <h2 className={globalStyles.sectionMainTitleBlue}>How we do It!</h2>
                <p className={globalStyles.largeLightSans}>Be it a simple illustration to a complete web site or landing page we can deliver with the necessary knowledge, skills and professionalism.
                Our inspiration an expertise come from individual backgrounds and experiences melted in one single company.
                We are focused on providing tailored solutions using the latest technologies and design trends.</p>
                <p className={globalStyles.largeLightSans}>Our inspiration an expertise come from individual backgrounds and experiences melted in one single company.</p>
                <p className={globalStyles.largeLightSans}>We are focused on providing tailored solutions using the latest technologies and design trends.</p>
                <div>
                  <button className={styles.button}>Contact us</button>
                </div>
            </div>
    </section>
  );
}