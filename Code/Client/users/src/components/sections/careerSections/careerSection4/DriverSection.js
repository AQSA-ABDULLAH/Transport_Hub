import React, { useState } from 'react';
import styles from './driverSection.module.css';
import Button from '../../../atoms/buttons/Button';
import DriverForm from '../../../../pages/careers/DriverForm';

const DriverSection = ({ driverImage }) => {
  const [isFormVisible, setFormVisibility] = useState(false);

  const openForm = () => {
    setFormVisibility(true);
  };

  const closeForm = () => {
    setFormVisibility(false);
  };

  return (
    <>
      <h4>How do we reimagine & improve lives of our Drivers.</h4>
      <div className={styles.container}>
        <div className={styles.text}>
          <p>Your text goes here.</p>
        </div>
        <div className={styles.image}>
          <section className={styles.mediumHeader}>
            <img src={driverImage} alt="Transport Image" />
            <div className={styles.overlay}>
              <Button
                btnText="Become a Driver"
                primary
                size="20px"
                width="200px"
                btnClick={openForm}
              />
            </div>
          </section>
        </div>
      </div>

      {isFormVisible && <DriverForm onClose={closeForm} />}
    </>
  );
};

export default DriverSection;

