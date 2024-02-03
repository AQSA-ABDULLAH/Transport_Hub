import React from 'react'
import styles from  './unknown.module.css'
import { useNavigate } from 'react-router-dom';

import  Button from '../../components/atoms/button/Button';
const Unknown = () => {
  const navigate=useNavigate();
  const handleButtonClick = () => {
    navigate('/');
  };
  return (
    <div className={styles.container}>
      <img src={'/assets/image/error/error2.png'} alt="" className={styles.image} />
      <div className={styles.rightSection}>
        <h1 className={styles.headerText}>Looks like you are lost!</h1>
        <Button btnText="Go Home" primary  btnClick={handleButtonClick} />
      </div>
    </div>
  )
}

export default Unknown