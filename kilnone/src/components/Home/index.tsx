import styles from './styles.module.scss';
import img from '../Assets/home-Image.png';

export const Home = () => {
    return (
        <>
            <div className={styles.homeBackground}>
                <img className={styles.homeImage} src={img} alt="Desktop Computer" />
                <p className={styles.logoKiln}>KILN.<span className={styles.logoOne}>one</span></p>
                <p className={styles.kilnMoto}>Crafting your ideas into the web</p>
                <p className={styles.kilnGreeting}>We are a multidisciplinary group of designers and programmers specialized in modern website design and brand development for your company, service or product</p>
            </div>
        </>
    );
}