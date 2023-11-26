import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const collectData = async (e) => {
    e.preventDefault();
    try {
      const result = await fetch('http://localhost:6000/user_register', {
        method: 'post',
        body: JSON.stringify({ name, email, phoneNo, password, address }),
        headers: {
          'Content-Type': 'application/json'
        },
      });

      if (!result.ok) {
        throw new Error('Registration failed');
      }

      const userData = await result.json();
      localStorage.setItem("user", JSON.stringify(userData));
      navigate('/signIn');
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className='container'>
      <form onSubmit={collectData}>
        <h2 className='text-center pt-3'>SIGN UP</h2>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputname"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            className="form-control"
            id="exampleInputPhoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAddress"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Submit
        </button>
        <p className='pt-3'>
          Already Have an Account <Link to='/signIn'>SIGN IN</Link>
        </p>
      </form>
    </div>
  );
}
