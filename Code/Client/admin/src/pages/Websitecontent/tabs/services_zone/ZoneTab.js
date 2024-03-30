import React from 'react';
import styles from "./zonetab.module.css";
import Button from "../../../../components/atoms/buttons/Button";

export default function ZoneTab() {
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
                <div className={styles.avilable_zone}>
                    <p>Karachi <button></button></p>
                    <p>Karachi</p>
                    <p>Karachi</p>
                    <p>Karachi</p>
                    <p>Karachi</p>
                    <p>Karachi</p>
                    <p>Karachi</p>
                </div>
            </div>
        </>
    )
}
