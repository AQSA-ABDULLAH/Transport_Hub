import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from "../careerSection3/driverSection.module.css";

export default function TransporterSection() {
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/transporterRegistration'); 
  };
  return (
    <>
      <div className={style.container_heading}>
                <h1>How do we reimagine & improve
                    lives of our transporters.</h1>
            </div>
            <div className={style.career_container}>
                <div className={style.content_section}>
                    <h2>We help Transporters with:</h2>
                    <p>This is the driver section content.</p>
                    <button onClick={handleRedirect}>Become a Transporter</button>
                </div>
                <div className={style.image_section}>
                    <img src='./assets/images/career/transport.webp' />
                </div>
            </div>
    </>
  );
}

  
