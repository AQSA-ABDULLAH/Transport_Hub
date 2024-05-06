import React, { useState } from 'react';
import SideSection from './PickupBoySideSection';
import styles from './Pickupboymail.module.css';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {useForm} from 'react-hook-form'
import { chooseEmail } from '../../../../../redux/containers/pickupboyreg/reducer';
const PickupboyEmail = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();  
  const email = useSelector(state => state.email)
  const { register, handleSubmit } = useForm({ defaultValues: { email } })
  const handleSendOTP = async (formData) => {
    try {
      const response = await fetch('http://localhost:5000/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({  email: formData.email }),
      });
    
      const responseData= await response.json();
      if (responseData.success) {
        dispatch(chooseEmail(formData.email));
        const updatedEmail = formData.email;
         console.log(updatedEmail); 
            // setEmail(email);
            // console.log(responseData.email)
           
            navigate('/pickupboyverifymail');
      } else {
          // Handle unsuccessful verification
          console.error('Verification failed:', responseData.message);
      }
     
      console.log('Email dispatch action:', email);
    } catch (error) {
      console.error('Error sending OTP:', error);
      // Handle error
    }
  };

  return (
   <>
      <section className={styles.container}>
        <div className={styles.sideSection}>
          <SideSection />
        </div>

        <div className={styles.mainSection}>
          <div className={styles.header}>
            <img src="./assets/images/career/driver_icon.png" alt="" />
          </div>

          <div className={styles.heading}>
            <h2>Create your PickupBoy Account</h2>
            <p>Then start your PickupBoy career!</p>
          </div>

          <section className={styles.form_container}>
            <div>
              <form className={styles.form} onSubmit={handleSubmit(handleSendOTP)}>
                <h2>What's your email?</h2>
                <input
                  type="email"
                  required
                  placeholder="@gmail.com"
                  defaultValue={email} // Use 'defaultValue' to set initial value
                  {...register('email')} // Register 'email' input with useForm
                />
                <button>Send OTP</button>
              </form>

              <div className={styles.spam}>
                <span>OR</span>
              </div>

              <button className={styles.google_button}>
                <img
                  src="./assets/images/career/google_icon.png"
                  alt=""
                />
                <p>Continue with Google</p>
              </button>
            </div>

            <div className={styles.text}>
              <p>
                By proceeding, you consent to get Mail, including by automated
                means, from Transport Hub and its affiliates to the email
                provided.
              </p>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default PickupboyEmail;
// import React from 'react';
// import SideSection from './PickupBoySideSection';
// import styles from "./Pickupboymail.module.css";
// import { useNavigate } from 'react-router-dom';

// export default function PickupBoyEmail() {
//   const navigate = useNavigate();

//   const handleRedirect = () => {
//     navigate('/pickupboyverifymail'); 
//   };
//   return (
//     <>
//       <section className={styles.container}>
//         <div className={styles.sideSection}>
//           <SideSection />
//         </div>

//         <div className={styles.mainSection}>
//           <div className={styles.header}>
//             <img src="./assets/images/career/driver_icon.png" alt=""/>
            
//           </div>

         
//             <div className={styles.heading}>
//               <h2>
//                 Create your PickupBoy Account
//               </h2>
//               <p>
//                 Then start your PickupBoy career!
//               </p>
//             </div>
//             <section className={styles.form_container}>

//             <div>
//               <form className={styles.form}>
//                 <h2>What's your email?</h2>
//                 <input type="email" required placeholder='@gmail.com' />
//                 <button onClick={handleRedirect}>Send OTP</button>
//               </form>

//               <div className={styles.spam}>
//   <spam>OR</spam>
// </div>


//                 <button className={styles.google_button}>
//                   <img src='./assets/images/career/google_icon.png' alt="" />
//                   <p>Continue with Google</p>
//                 </button>
//             </div>

//             <div className={styles.text}>
//               <p>By proceeding, you consent to get Mail, including by automated means,
//                 from Transport Hub and its affiliates to the email provided.</p>
//             </div>
//           </section>
//         </div>
//       </section>
//     </>
//   );
// }

