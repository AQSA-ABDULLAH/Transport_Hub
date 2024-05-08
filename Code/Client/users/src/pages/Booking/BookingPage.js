import React from 'react'
import { useBooking } from '../../context/booking';
const BookingPage = () => {
    const [booking, setBooking] = useBooking();
    return (
        <>
        <div className="container m-5">
            <div className="row">
                <h1>Your Bookings</h1>
            </div>
        </div>
        </>
    )
}

export default BookingPage
