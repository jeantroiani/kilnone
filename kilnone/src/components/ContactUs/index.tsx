import React from 'react';
import { FormControl, InputLabel, Input,Button } from "@material-ui/core";
import styles from './styles.module.scss';
import globalStyles from '../styles/styles.module.scss';

export const ContactUs = () => {

    return (
        <section >
            <div className={styles.contactUsBackground}>
                <h1 className={styles.sectionMainTitle}>Contact Us</h1>
                <div className={styles.contactUsForm}>
                    <form>
                        <FormControl margin="dense" fullWidth>
                        <InputLabel htmlFor="name">Name</InputLabel>
                        <Input id="name" type="text" />
                        </FormControl>

                        <FormControl margin="dense" fullWidth>
                        <InputLabel htmlFor="email">Email</InputLabel>
                        <Input id="email" type="email" />
                        </FormControl>

                        <FormControl margin="dense" fullWidth>
                        <InputLabel htmlFor="message">Message</InputLabel>
                        <Input id="message" multiline rows={6} />
                        </FormControl>

                        <Button variant="contained" className={globalStyles.button}>Send</Button>
                    </form>
                </div>
            </div>
        </section>
     
    );

}
