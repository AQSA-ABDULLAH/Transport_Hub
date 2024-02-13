import Navbar from "../../components/atoms/Navbar/Navbar"
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from "./signIn.module.css";


export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate("/")
    }
  })

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const formData = { email, password };
      const response = await axios.post("http://localhost:5000/api/user/user_signIn", formData);
      if(response){
        localStorage.setItem("user", JSON.stringify(response));
        navigate("/")
      }else{
        alert("Plz Enter correct details")
      }
    } 
    catch (error) {
      console.error('Plz Enter correct details:', error.message, error.response);
    }
  };
  return (
    <>
    <div className={styles.login_form_container} id="login">
    <Navbar />
    <div className={styles.login_form}>
      <form onSubmit={handleLogin}>
        <h3>USER LOGIN</h3>

        <div>
          {/* <label className="form-label">Email address</label> */}
          <input type="email" placeholder='email' id="exampleInputEmail1" className={styles.box}
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div>
          {/* <label className="form-label">Password</label> */}
          <input type="password" placeholder='password' id="exampleInputPassword1" className={styles.box}
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <p>Forget your password <Link to='#' className={styles.link}>click here</Link></p>

        <button type="submit" className={styles.submit}>Submit</button>

        <p>------------- or login with -------------</p>
        <div className={styles.buttons}>
          <Link to='#' className={styles.btn}>Google</Link>
          <Link to='#' className={styles.btn}>Facebook</Link>
        </div>

        <p className='pt-3'>Don't have an Account yet <Link to='/signUp' className={styles.link}>SIGN UP</Link></p>
      </form>
    </div>
    </div>
    </>
  );
}