import React from 'react'
import styles from  './home.module.css'
import {useNavigate} from 'react-router-dom'
import Button from '../../components/atoms/button/Button'
const Home = () => {
  const navigate=useNavigate();
  return (
    <div className={styles.home_container}>
      <div className={styles.inner_container}>
        <img src='/assets/logo/LogoDark.png' width={'150px'}/>
     <h1>Welcome to Admin Panel</h1>
     <Button btnText="View Messages" bw={"1px solid #EC1F3E"}  bgColor={'#fff'} textColor={'#EC1F3E'} btnClick={()=>navigate('/contact-messages')}/>

      </div>
       </div>
  )
}

export default Home