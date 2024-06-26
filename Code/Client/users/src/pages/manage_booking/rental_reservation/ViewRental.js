import React, { useState, useEffect } from 'react';
import style from "./managerental.module.css";
import axios from 'axios';
import Sidebar from '../../../components/molecules/manage-booking/sidebar/Sidebar';
import TopHeader from '../../../components/molecules/manage-booking/booking-header/TopHeader';

function ViewRental() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [rentalData, setRentalData] = useState(null);
    const [product, setProduct] = useState([]);

    useEffect(() => {
        const storedRentalData = localStorage.getItem('rentalData');
        if (storedRentalData) {
            const parsedRentalData = JSON.parse(storedRentalData);
            setRentalData(parsedRentalData);
            const car_id = parsedRentalData.car_id;
            axios.get(`http://localhost:5000/api/cars/getCar/${car_id}`)
                .then(res => {
                    console.log(res.data);
                    setProduct(res.data.data);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    }, []);


    const handleCancelReservation = () => {
        if (rentalData) {
            // Update the status to 'canceled'
            const updatedRentalData = { ...rentalData, status: 'canceled' };
            // Store the updated data back in local storage
            localStorage.setItem('rentalData', JSON.stringify(updatedRentalData));
            // Update state to reflect the change
            setRentalData(updatedRentalData);
        }
    };

    return (
        <>
            <TopHeader
                openSidebar={openSidebar} setOpenSidebar={setOpenSidebar}
            />
            {openSidebar && <Sidebar setOpenSidebar={setOpenSidebar} openSidebar={openSidebar} />}
            <section className={style.viewrental_container}>
                <div className={style.rental_header}>
                    <h2>Your Rental Details</h2>
                    <button onClick={handleCancelReservation}>Cancel Reservation</button>
                </div>
                <h4>Confirmation: {rentalData ? rentalData._id : null}</h4>
                <section>
                    <div className={style.container}>
                        <div className={style.addOnContainer}>
                            <div>
                                <h1>Vehicle Details :</h1>
                                <div className={style.car_header}>
                                    <div>
                                        <img src="https://firebasestorage.googleapis.com/v0/b/transport-hub-a77ee.appspot.com/o/CarImages%2FPassengerVan.PNG?alt=media&token=76e01964-166b-471c-935d-54243e284b40" alt="car" />
                                    </div>
                                    <div>
                                        <h2>GAC GN8 7-SEATS MPV MODEL 2023</h2>
                                        <p>civic</p>
                                    </div>
                                </div>

                                <h1>Itinerary :</h1>

                                <div className={style.booking_time}>
                                    <div>
                                        <span>{rentalData?.pickupDate}</span> -
                                        <span> {rentalData?.pickupTime}</span>
                                        <p>{rentalData?.pickupLocation}</p>
                                    </div>
                                    <div>
                                        <span>{rentalData?.dropDate}</span> -
                                        <span> {rentalData?.dropTime}</span>
                                        <p>{rentalData?.dropLocation}</p>
                                    </div>
                                </div>

                                <div className={style.extras}>
                                    <h1>Extras :</h1>
                                    <p>Loss Damage Waiver</p>
                                </div>
                            </div>
                        </div>
                        <div className={style.priceContainer}>
                            <div className={style.price_card_contanier}>
                                <h3>Price Summary</h3>
                                <div className={style.price}>
                                    <p>Base Rate</p>
                                    <p>RS 650</p>
                                </div>
                                <div className={style.price}>
                                    <p>Add On Price</p>
                                    <p>RS 120</p>
                                </div>
                                <div className={style.price}>
                                    <p>Taxes and Fees</p>
                                    <p>Free</p>
                                </div>
                                <div className={`${style.price} ${style.price_per_day}`}>
                                    <p>Price for 5 day</p>
                                    <p>RS 3850</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </>
    );
}

export default ViewRental;











// {Array.isArray(product) && product.map((item, index) => (
//     <div key={index}>
//         <img src={item?.carImage} alt="car" />
//         <h2>{item.carTitle}</h2>
//     </div>
// ))}