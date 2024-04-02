import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import styles from "./zonetab.module.css";
import Button from "../../../../components/atoms/buttons/Button";
import ZoneList from "./ZoneList";

const ZoneTab = () => {
    const [addZoneForm, setAddZoneForm] = useState(false);
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
                navigate('/');
            } else {
                throw new Error("Failed to submit data. Please try again.");
            }

            if (response.data.code === 403 && response.data.message === "Token Expired") {
                localStorage.setItem('token', null);
            }

        } catch (error) {
            console.error(error);
            alert("An error occurred while submitting the data. Please try again.");
        }
    };

    return (
        <>
            <section className={styles.zoneContainer}>
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
                        <form onSubmit={handleSubmit}>
                            <input type='text' placeholder='City name'
                                name="zone"
                                value={zone}
                                onChange={(e) => setZone(e.target.value)}
                            />
                            {error && !zone && <span className={styles.text_danger}>This field is required</span>}
                            <div>
                                <Button
                                    primary
                                    btnText="Save Zone"
                                    radius={"6px"}
                                    size={"15px"}
                                    type="submit"
                                />
                            </div>
                        </form>
                    </div>
                }

                <div className={styles.avilable_zone}>
                    <ZoneList/>
                </div>

            </section>
        </>
    )
}

export default ZoneTab;
