import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

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
      const response = await axios.post('http://localhost:5000/user_signIn', formData);
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
    <div className='container' id="login">
      <form onSubmit={handleLogin}>
        <h2 className='text-center pt-3'>SIGN IN</h2>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
        <p className='pt-3'>Don't have an Account yet <Link to='/signUp'>SIGN UP</Link></p>
      </form>
    </div>
  );
}