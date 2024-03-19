import React from 'react';
import styles from './transportername.module.css';
import transporterStyles from '../transporter.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function TransporterName() {
    return (
        <>
            <MediumHeader />
            <section className={styles.container}>
                <div className={styles.formdiv}>
                    <h2>What's your name?</h2>
                    <p>Let us know how to properly address you</p>
            
                <form className={`${transporterStyles.input_field} ${styles.inputForm}`}>
                    <input type='text' placeholder='Enter first name' />
                    <input type='text' placeholder='Enter last name' />

                    <div className={`${transporterStyles.button} ${styles.formbutton}`}>
                        <button>BACK</button>
                        <button>NEXT</button>
                    </div>
                </form>
                </div>
            </section>
        </>
    )
}


