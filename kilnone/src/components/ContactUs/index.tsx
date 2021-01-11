import { FormControl, TextField } from "@material-ui/core";
import styles from './styles.module.scss';
import globalStyles from '../styles/styles.module.scss';

export const ContactUs = () => {

    return (
            <section className={styles.section}> 
                <div className={styles.content}>
                <h2 className={globalStyles.sectionMainTitleDark}>Contact Us</h2>
                <form className={styles.form} autoComplete="off">
                    <FormControl margin="dense" fullWidth>
                    <TextField required id="outlined-basic" label="Name" variant="outlined"/>
                    </FormControl>

                    <FormControl  margin="dense" fullWidth>
                    <TextField required id="outlined-basic" label="Email" variant="outlined"/>
                    </FormControl>

                    <FormControl margin="dense" fullWidth>
                    <TextField required id="outlined-helperText" label="Message" variant="outlined" helperText="* Required" multiline rows={6} />
                    </FormControl>
                </form>
                <button className={globalStyles.button}>Send</button>
                </div>
            </section>
    );
}
