import styles from './styles.module.scss';
import img from '../Assets/how-we-do-it.png';

export const HowWeDoIt = () => {
  return (
      <>
          <div className={styles.howWeDoItBackground}>
              <img className={styles.howWeDoItImage} src={img} alt="Different Working Styles" />
              <p className={styles.sectionHeader}>How we do It!</p>
              <p className={styles.sectionContent}>Be it a simple illustration to a complete web site or landing page we can deliver with the necessary knowledge, skills and professionalism.<br></br><br></br>

              Our inspiration an expertise come from individual backgrounds and experiences melted in one single company.<br></br><br></br>

              We are focused on providing tailored solutions using the latest technologies and design trends</p>
          </div>
      </>
  );
}