import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from "./driverSection.module.css"

export default function DriverSection() {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/driverRegistration');
    };

    return (
        <>
            <div className={style.container_heading}>
                <h1>How do we reimagine & improve
                    lives of our truck drivers.</h1>
            </div>
            <div className={style.career_container}>
                <div className={style.image_section}>
                    <img src='./assets/images/career/driver.jpg' />
                </div>
                <div className={style.content_section}>
                    <h2>We help Drivers with:</h2>
                    <p>This is the driver section content.</p>
                    <button onClick={handleRedirect}>Become a Driver</button>
                </div>
            </div>
        </>
    );
}


