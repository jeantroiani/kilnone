import { FormControl, TextField } from "@material-ui/core";
import styles from './styles.module.scss';
import globalStyles from '../styles/styles.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import { lightBlue } from '../../components/styles/colors';

const useStyles = makeStyles({
    root: {
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: lightBlue
          },
        "& .MuiInputLabel-outlined.Mui-focused": {
            color: lightBlue
        }
      },
      
  });
  
export const ContactUs = () => {
    const classes = useStyles();

    return (
            <section className={styles.section}> 
                <div className={styles.content}>
                <h2 className={globalStyles.sectionMainTitleDark}>Contact Us</h2>
                <form className={styles.form} autoComplete="off">
                    <FormControl margin="dense" fullWidth>
                    <TextField className={classes.root} required id="outlined-basic" label="Name" variant="outlined"/>
                    </FormControl>

                    <FormControl  margin="dense" fullWidth>
                    <TextField 
                         className={classes.root}
                        required id="outlined-basic" label="Email" variant="outlined"/>
                    </FormControl>

                    <FormControl margin="dense" fullWidth>
                    <TextField className={classes.root} required id="outlined-helperText" label="Message" variant="outlined" helperText="* Required" multiline rows={6} />
                    </FormControl>
                </form>
                <div className={styles.buttonGroup}>
                    <button className={globalStyles.button}>Send</button>
                </div>
                <div className={styles.informationContainer}>
                    <div className={styles.informationGroup}>
                        <a className={globalStyles.link} href="mailto:webmaster@example.com">contactUs@kilnone</a>
                        <p className={globalStyles.sectionContentMediumDarkLight}>+44-7123123211</p>
                    </div>
                    </div>
                </div>
            </section>
    );
}
