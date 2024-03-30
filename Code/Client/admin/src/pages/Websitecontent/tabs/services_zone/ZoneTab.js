import React, { useState } from "react";
import styles from "./zonetab.module.css";
import Button from "../../../../components/atoms/buttons/Button";

const ZoneTab = () => {
    const [addZoneForm, setAddZoneForm] = useState(true);

    return (
        <>
            <div className={styles.zoneContainer}>
                <div className={styles.zoneHeader}>
                    <h2>Transport Hub Zone</h2>
                    <div onClick={() => setAddZoneForm(true)}>
                        <Button
                            primary
                            btnText="Add New Zone"
                            radius={"6px"}
                            size={"15px"}
                        />
                    </div>
                </div>

                {addZoneForm &&
                    <div className={styles.zone_form}>
                        <div className={styles.form_top}>
                            <p>Add New Zone</p>
                            <div onClick={() => setAddZoneForm(false)}>
                                <Button
                                    secondary
                                    btnText="Cancel"
                                    radius={"6px"}
                                    size={"15px"}
                                />
                            </div>
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
                }

                <div className={styles.avilable_zone}>
                    <p>Karachi <button><img src='/assets/images/website-content/delete.png' /></button></p>
                    <p>KarachiKarachiLkdsfn <button><img src='/assets/images/website-content/delete.png' /></button></p>
                </div>
            </div>
        </>
    )
}

export default ZoneTab;

