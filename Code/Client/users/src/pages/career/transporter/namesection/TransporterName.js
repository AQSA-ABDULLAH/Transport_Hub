import React from 'react';
import styles from './transportername.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';

export default function TransporterName() {
    return (
        <>
        <MediumHeader/>
            <section className={styles.name_container}>
                <h2>What's your name?</h2>
                <p>Let us know how to properly address you</p>

                <form className={styles.inputForm}>
                    <input type='text' placeholder='Enter first name' />
                    <input type='text' placeholder='Enter last name' />

                <div className={styles.button}>
                    <button>NEXT</button>
                    <button>BACK</button>
                </div>
                </form>
            </section>
        </>
    )
}
