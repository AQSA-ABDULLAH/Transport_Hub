import React from 'react'
import styles from  './Dashboard.module.css'
import {useNavigate} from 'react-router-dom'
import Button from '../../components/atoms/buttons/Button'
const AdminDashboard = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.container}>
      <div className={styles.inner_container}>
        {/* <img src='/assets/images/logo/logo.png' width={'150px'} /> */}
        <h1>Welcome to Admin Panel</h1>
        <Button btnText="View Messages" bw={"1px solid #EC1F3E"} bgColor={'#fff'} textColor={'#EC1F3E'} btnClick={() => navigate('/contact-messages')} />

      </div>
    </div>
  )
}

export default AdminDashboard