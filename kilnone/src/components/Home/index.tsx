import styles from './styles.module.scss';

export const Home = () => {
    return (
        <div className={styles.homeBackground}>
            <div className={styles.contentImage}>
                <div className={styles.content}>
                    <h1 className={styles.mainTitle}>KILN.<span className={styles.logoOne}>one</span></h1>
                    <p className={styles.mainContent}>Crafting your ideas into the web</p>
                    <p className={styles.largeDarkSans}>We are a multidisciplinary group of designers and programmers specialized in modern website design and brand development for your company, service or product.</p>
                </div>
            </div>
        </div>
    );
}