import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
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

    const selectedCar = JSON.parse(localStorage.getItem('selectedCar'));
    const car_id = selectedCar._id;
    const price = selectedCar.price;

    const bookingForm = JSON.parse(localStorage.getItem('bookingForm'));
    const firstName = bookingForm.firstName;
    const lastName = bookingForm.lastName;
    const phoneNumber = bookingForm.phoneNumber;
    const email = bookingForm.email;
    const cnic = bookingForm.cnic;
    const zipCode = bookingForm.zipCode;
    const address = bookingForm.address;

    const carAddons = JSON.parse(localStorage.getItem('carAddons'));
    const addDriver = carAddons.addDriver;
    const addInfantSeat = carAddons.addInfantSeat;
    const addToddlerSeat = carAddons.addToddlerSeat;
    const totalPrice = carAddons.totalPrice;





    const handleSubmit = (e) => {
        e.preventDefault();
 
        // Combine all booking details
        const combinedData = {
            pickupLocation: pickupLocation,
            pickupDate: pickupDate,
            pickupTime: pickupTime,  
            dropLocation: dropLocation,
            dropDate: dropDate,
            dropTime: dropTime,
            car_id: car_id,
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            email: email,
            cnic: cnic,
            zipCode: zipCode,
            address: address,
            addDriver: addDriver,
            addInfantSeat: addInfantSeat,
            addToddlerSeat: addToddlerSeat,
            basePrice: price,
            totalPrice: totalPrice
        };

        // Send combined data to server
        axios.post('https://transport-hub-tawny.vercel.app/api/rental-booking/book-rental', combinedData)
            .then(response => {
                console.log('Data sent successfully:', response.data);
                console.log(combinedData)
                Swal.fire('Success!', 'Your booking has been confirmed. Check your email for further details.', 'success');
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