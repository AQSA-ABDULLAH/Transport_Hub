import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate("/")
    }
  })

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = { fullName, email, phoneNumber, password, city, address };
      const response = await axios.post("http://localhost:5000/api/user/user_signUp", formData);

      // Assuming the server returns a success message in the response
      console.log('Data submitted successfully:', response.data.message);

      // You can also display a success message to the user
      alert('Data submitted successfully!');

      localStorage.setItem("user", JSON.stringify(response));
      navigate("/");
    }
    catch (error) {
      console.error('Error submitting form:', error.message, error.response);

      // You can display an error message to the user
      alert('Error submitting form. Please try again.');
    }
  };


  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Full Name:
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Phone No.:
          <input
            type="tel"
            value={phoneNumber}
            onChange={(e) => setphoneNumber(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </label>
        <br />

        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            required
          />
        </label>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
