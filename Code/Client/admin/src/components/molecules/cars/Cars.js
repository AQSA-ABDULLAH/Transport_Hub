import React from 'react';
import style from "./Cars.module.css"
import Button from '../../atoms/buttons/Button';
import { useNavigate } from 'react-router-dom';
import { GiGearStickPattern } from "react-icons/gi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BsSpeedometer2 } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

const Cars = () => {
    const navigate = useNavigate();

    const handleBookNowClick = () => {
        navigate('/ExtendedDetailPage');
    };

    return (
        <>
            <section className={style.offer_container_section}>

                <div className={style.mainContent_grid}>
                    <div className={style.singleOffer}>
                        <h2 className={style.secTitle}>GAC GS8 320T i4*4 Model 2023 (TURBO)</h2>
                        <div className={style.destImage}>
                            <img src="./assets/images/cars/SUVs.png" alt="car" />
                        </div>

                        <div className={style.offerBody}>
                            <div className={style.price_flex}>
                                <h4>
                                    Vechical Type || SUV
                                </h4>
                            </div>
                        </div>

                        <div className={style.amenities_flex}>
                            <div className={style.singleAmenity_flex}>
                                <IoIosPeople className={style.icon} />
                                <small>7 Seater</small>

                            </div>
                            <div className={style.singleAmenity_flex}>
                                <GiGearStickPattern className={style.icon} />
                                <small>Manual</small>
                            </div>
                            <div className={style.singleAmenity_flex}>
                                <BsSpeedometer2 className={style.icon} />
                                <small>800 KM</small>
                            </div>
                            <div className={style.singleAmenity_flex}>
                                <BsThreeDotsVertical className={style.icon} />
                                <small>More</small>
                            </div>
                        </div>
                        <div className={style.booking}>

                            <div className={style.price}>
                                <small className={style.dailyPrice} >RS 450 / day</small>
                                <small>RS 450 total</small>
                            </div>

                            <Button btnText="Edit" primary  btnClick={handleBookNowClick}/>
                        </div>

                    </div>
                </div>
            </section>

        </>
    )
}

export default Cars;