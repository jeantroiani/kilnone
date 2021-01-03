import React from 'react';
import styles from './styles.module.scss';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export const ContactUsForm = () => {
    return (
        <>
            <form className={styles.formContainer} noValidate autoComplete="off">
                <TextField size="small" id="filled-basic" label="Contact Us" variant="filled" />
                <Button size="small" className={styles.button}>Submit</Button>
             </form>
        </>
    );
}