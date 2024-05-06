import React from 'react'
import { useNavigate } from 'react-router-dom';
import style from "../careerSection3/driverSection.module.css";

const PickupboyCareerPage = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/pickupboyform'); // Replace '/RentalBookingPage' with the actual path to your driver login page
    };
  return (
    <>
            <div className={style.container_heading}>
                <h1>How do we reimagine & improve
                    lives of our pickup boys.</h1>
            </div>
            <div className={style.career_container}>
                <div className={style.image_section}>
                    <img src='./assets/images/career/pickupboy.jpg' />
                </div>
                <div className={style.content_section}>
                    <h2>We help Pickup boys with:</h2>
                    <p>This is the driver section content.</p>
                    <button onClick={handleRedirect}>Become a Pickupboy</button>
                </div>
            </div>
        </>
  )
}

export default PickupboyCareerPage


