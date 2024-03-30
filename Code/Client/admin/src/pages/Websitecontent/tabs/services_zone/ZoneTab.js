import React from 'react';
import styles from "./zonetab.module.css";
import Button from "../../../../components/atoms/buttons/Button";

const ZoneTab = () => {
    return (
        <>
            <div className={styles.zoneContainer}>
                <div className={styles.zoneHeader}>
                    <h2>Transport Hub Zones</h2>
                    <Button
                        primary
                        btnText="Add New Zone"
                        radius={"6px"}
                        size={"15px"}
                    />
                </div>
                <div className={styles.zone_form}>
                    <div className={styles.form_top}>
                        <p>Add New Zone</p>
                        <Button
                            secondary
                            btnText="Cancel"
                            radius={"6px"}
                            size={"15px"}
                        />

                    </div>

                    <form>
                        <input type='text' placeholder='City name' />
                        <Button
                            primary
                            btnText="Save Zone"
                            radius={"6px"}
                            size={"15px"}
                        />
                    </form>
                </div>
                <div className={styles.avilable_zone}>
                    <p>Karachi <button><img src='/assets/images/website-content/delete.png' /></button></p>
                    <p>KarachiKarachiLkdsfn <button><img src='/assets/images/website-content/delete.png' /></button></p>
                </div>
            </div>
        </>
    )
}

export default ZoneTab;
