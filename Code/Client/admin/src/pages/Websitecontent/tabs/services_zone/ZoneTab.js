import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import styles from "./zonetab.module.css";
import Button from "../../../../components/atoms/buttons/Button";

const ZoneTab = () => {
    const [addZoneForm, setAddZoneForm] = useState(true);
    const [zone, setZone] = useState("");
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        if (!zone) {
            setError(true);
            return;
        }
    
        try {
            const response = await axios.post("http://localhost:5000/api/zone/add_zone", {
                zone
            }, {
                headers: { 'Authorization': localStorage.getItem('token') }
            });

            if (response.data.status === "success") {
                Swal.fire(
                    'Add New Zone!',
                    'You have added a new zone successfully.',
                    'success'
                );
            } else {
                throw new Error("Failed to submit data. Please try again.");
            }

            if (response.data.code === 403 && response.data.message === "Token Expired") {
                localStorage.setItem('token', null);
            }

            navigate('/');
        } catch (error) {
            console.error(error);
            alert("An error occurred while submitting the data. Please try again.");
        }
    };

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
                            <input type='text' placeholder='City name'
                            name="zone"
                                value={zone}
                                onChange={(e) => setZone(e.target.value)}
                            />
                            {error && !zone && <span className={styles.text_danger}>This field is required</span>}
                            <div onClick={handleSubmit}>
                                <Button
                                    primary
                                    btnText="Save Zone"
                                    radius={"6px"}
                                    size={"15px"}
                                />
                            </div>
                        </form>
                    </div>
                }

                <div className={styles.avilable_zone}>
                    <p>Karachi <button><img src='/assets/images/website-content/delete.png' alt="Delete" /></button></p>
                    <p>KarachiKarachiLkdsfn <button><img src='/assets/images/website-content/delete.png' alt="Delete" /></button></p>
                </div>
            </div>
        </>
    )
}

export default ZoneTab;