import React, { useEffect, useState } from 'react'
import style from "./carCard.module.css"
import Button from "../../../atoms/button/Button";
import { useNavigate } from 'react-router-dom';
import { GiGearStickPattern } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";
import axios from 'axios';
import FiltersCard from '../filterCard/FiltersCard';

const CarCard = () => {

    const [product, setProduct] = useState([]);
    const [sortBy, setSortBy] = useState('high');
    const [vehicleType, setVehicleType] = useState('all');
    const [gearshift, setGearshift] = useState('manual');
    const [passengers, setPassengers] = useState('four');
    const [bags, setBags] = useState('one');



    useEffect(() => {
        fetchCars();
    }, [sortBy, vehicleType, gearshift, passengers, bags]);

    const fetchCars = () => {
        const params = {
            sortBy,
            vehicleType,
            gearshift,
            passengers,
            bags
        };

        axios.get("http://localhost:5000/api/cars/getCars", { params })
            .then(res => {
                console.log(res.data);
                setProduct(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    };

    const navigate = useNavigate();

    const handleBookNowClick = () => {
        navigate('/ExtendedDetailPage');
    };

    return (
        <>
            <FiltersCard setSortBy={setSortBy} setVehicleType={setVehicleType} setGearshift={setGearshift}
                setPassengers={setPassengers} setBags={setBags} />
            {
                product.map((item, index) =>

                    <section className={style.offer_container_section} key={index}>

                        <div className={style.mainContent_grid}>
                            <div className={style.singleOffer}>
                                <h2 className={style.secTitle}>{item.carTitle}</h2>
                                <div className={style.destImage}>
                                    <img src={item?.carImage} alt="car" />
                                </div>

                                <div className={style.offerBody}>
                                    <div className={style.price_flex}>
                                        <h4>
                                            {item.carType}
                                        </h4>
                                    </div>
                                </div>

                                <div className={style.amenities_flex}>
                                    <div className={style.singleAmenity_flex}>
                                        <IoIosPeople className={style.icon} />
                                        <small>{item.numberOfSeats} Seater</small>

                                    </div>
                                    <div className={style.singleAmenity_flex}>
                                        <GiGearStickPattern className={style.icon} />
                                        <small>{item.transmission}</small>
                                    </div>
                                    <div className={style.singleAmenity_flex}>
                                        <BsSpeedometer2 className={style.icon} />
                                        <small>{item.mileLimit} KM</small>
                                    </div>
                                    <div className={style.singleAmenity_flex}>
                                        <BsThreeDotsVertical className={style.icon} />
                                        <small>More</small>
                                    </div>
                                </div>
                                <div className={style.booking}>

                                    <div className={style.price}>
                                        <small className={style.dailyPrice} >RS {item.price} / day</small>
                                        <small>RS {item.price} total</small>
                                    </div>

                                    <Button btnText="Book Now" primary btnClick={handleBookNowClick} />
                                </div>

                            </div>
                        </div>
                    </section>
                )}
        </>
    )
}

export default CarCard;