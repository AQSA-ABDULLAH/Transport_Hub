import React from 'react'
import './unknown.module.css'
import { useNavigate } from 'react-router-dom';

import  Button from '../../atoms/button/Button'
const Unknown = () => {
  const navigate=useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };
  return (
    <div className='section'>
      <img src={'/assets/image/error/error2.png'} alt="" className="image" />
      <div className='rightSection'>
        <h1 className='headerText'>Looks like you are lost!</h1>
        <Button btnText="Go Home" primary  btnClick={handleButtonClick} />
      </div>
    </div>
  )
}

export default Unknown;