import React from 'react'
import styles from "./pickupboylandingpage.module.css";
import main from "./parcelpickupimages/main.jpeg";
import parcelpickupimg1 from "./parcelpickupimages/parcelpickupimg1.jpeg";
import parcelpickupimg2 from "./parcelpickupimages/parcelpickupimg2.jpeg";
import parcelpickupimg3 from "./parcelpickupimages/parcelpickupimg3.jpeg";
import images from "./parcelpickupimages/images.jpeg";
import { useNavigate } from 'react-router-dom';
const PickupboysLandingPage = () => {
     const navigate = useNavigate()
     const handleRedirect = () => {
       navigate('/parcelform'); 
     };
        
   
    return (
        <>
                <div >
                <img className={styles.mainImage}src={main} alt="Example" />
                </div>

             <div className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.text_area}>
                        <h2>We will Pickup your parcel from your Door Step</h2>
                        <p>Send your parcel from your door to any delivery service of your choice</p>
                        {/* delivery service company images 
                        rate calculate for sending*/}
                       <button onClick={handleRedirect}>Send Parcel</button>
                    </section>
                    <section className={styles.landing_video}>
                    <img className={styles.side_parcel_image} src={parcelpickupimg1} alt="Example" />
                    </section>
                </div>
                </div>
                <hr></hr>






                <div className={styles.main}>
                <div className={styles.container}>
                    <section className={styles.text_area}>
                          <h2>Calculate Rate</h2>
                           <span>
                              <label>Pickup Location     </label>
                               <input type='text'/>
                           </span>
                           <span>
                               <label className={styles.destination}>Destination        </label>
                               <input type='text'/>
                           </span>
                           <span>
                               <label className={styles.weight}>Weight(kg)</label>
                               <input type='text'/>
                           </span>
                          
                           <button className={styles.calculate}>Calculate</button>
                        
                        {/* delivery service company images 
                        rate calculate for sending*/}
                       
                    </section>  
                </div>
                </div>
                <hr></hr>

 {/* slider for images*/}
                <div className={styles.city_lists}>
                    <h2>You can drop your parcel at these companies</h2>
                <div className={styles.city_list}>
                   
                    <div className={styles.list}>
                    <span className={styles.company}>
                        <img src={parcelpickupimg1} alt="Example" />
                        <p>Leopard</p>
                    </span>
                    <span className={styles.company}>
                        <img src={parcelpickupimg3} alt="Example" />
                        <p>Pakistan Post</p>
                    </span>
                    <span className={styles.company}>
                        <img src={images} alt="Example" />
                        <p>TCS</p>
                    </span>
                    {/* <span>
                        <img src={images} alt="Example" />
                        <p>MOVEX</p>
                    </span> */}
                    {/* <span>
                        <img src={images} alt="Example" />
                        <p>TCS</p>
                    </span> */}
                    </div>
                </div>  
                </div>
        </>



  )
}

export default PickupboysLandingPage