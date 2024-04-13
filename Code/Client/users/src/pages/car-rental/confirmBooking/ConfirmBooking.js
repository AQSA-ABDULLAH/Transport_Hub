import React from 'react';
import axios from 'axios';
import style from './confirmBooking.module.css';
import Button from '../../../components/atoms/button/Button';
import { useNavigate } from 'react-router-dom';

const ConfirmBooking = () => {
    const navigate = useNavigate();


    // Retrieve Booking from local storage
    const filterData = JSON.parse(localStorage.getItem('filterData'));
    const pickupLocation = filterData.pickupLocation;
    const pickupDate = filterData.pickupDate;
    const pickupTime = filterData.pickupTime;
    const dropLocation = filterData.dropLocation;
    const dropDate = filterData.pickupDate;
    const dropTime = filterData.dropTime;


    const handleSubmit = (e) => {
        e.preventDefault();

        // Combine all booking details
        const combinedData = {
            pickupLocation: pickupLocation,
            pickupDate: pickupDate,
            pickupTime: pickupTime,
            dropLocation: dropLocation,
            dropDate: dropDate,
            dropTime: dropTime
        };

        // Send combined data to server
        axios.post('http://localhost:5000/api/rental-booking/book-rental', combinedData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                navigate("/");
            })
            .catch(error => {
                console.error('Failed to send data:', error.response ? error.response.data : error.message);
            });
    };

    return (
        <div className={style.confirmBookingOverlay}>
            <div className={style.confirmBookingModal}>
                <h2>Rental Reservation</h2>
                <p>Are you sure you want to confirm this reservation?</p>
                <div className={style.btn_footer}>
                    <Button
                        primary
                        size="14px"
                        radius="4px"
                        btnText="Confirm Booking"
                        btnClick={handleSubmit}
                    />
                    <Button
                        primary
                        size="14px"
                        radius="4px"
                        btnText="Cancel Reservation"
                        btnClick={() => navigate('/')}
                    />
                </div>
            </div>
        </div>
    );
};

export default ConfirmBooking;






// Check for empty fields in formData
// const isEmpty = Object.values(formData).some(x => x.trim() === '');
// if (isEmpty) {
//   console.error('Please fill in all required fields');
//   return;
// }


// // Retrieve carDetails from local storage
// const filterData = JSON.parse(localStorage.getItem('filterData'));
// const dropLocation = filterData.dropLocation;

// // Combine formData with carDetails
// const combinedData = { ...formData, dropLocation: dropLocation };

// // Log combined data to console (for debugging)
// console.log('Sending combined data:', combinedData);
