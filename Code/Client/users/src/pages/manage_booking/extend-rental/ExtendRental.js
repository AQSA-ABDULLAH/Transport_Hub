import React, { useState } from 'react';
import style from "../rental_reservation/managerental.module.css";
import axios from 'axios';
import Sidebar from '../../../components/molecules/manage-booking/sidebar/Sidebar';
import TopHeader from '../../../components/molecules/manage-booking/booking-header/TopHeader';
import { useNavigate } from 'react-router-dom';

function ExtendRental() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        _id: '',
        rentalemail: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prevFormData => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/api/rental-booking/manage-rental', formData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                // Extract only the rentalBooking data
                const rentalBookingData = response.data.rentalBooking;
                // Save rentalBookingData to local storage
                localStorage.setItem('rentalData', JSON.stringify(rentalBookingData));
                navigate("/extend_rental/rental-details");
            })
            .catch(error => {
                console.error('Failed to send data:', error.response ? error.response.data : error.message);
            });
    };


    return (
        <>
            <TopHeader
                openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}
            />
            {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />}
            <section className={style.rental_container}>
                <div className={style.rental_div}>
                    <h2>Extend your rental here</h2>
                    <p>Let's start with your confirmation number. You can find this in your confirmation email.</p>
                    <form>
                        <div className={style.rental_inputs}>
                            <label>Confirmation Number :</label>
                            <input
                                type='text'
                                placeholder='K8201300138'
                                id="_id"
                                name="_id"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <div className={style.rental_inputs}>
                            <label>Rental Email :</label>
                            <input
                                type='email'
                                placeholder='Doe'
                                id="rentalemail"
                                name="rentalemail"
                                required
                                onChange={handleChange}
                            />
                        </div>
                        <button onClick={handleSubmit}>Find Rental</button>
                    </form>
                </div>
            </section>
        </>
    )
}

export default ExtendRental;