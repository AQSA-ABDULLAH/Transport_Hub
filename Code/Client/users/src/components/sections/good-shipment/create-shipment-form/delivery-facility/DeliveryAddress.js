import React from 'react'

export default function DeliveryAddress({ togglePopup }) {
  const overlayStyle = {
    position: 'fixed',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  };
  return (
    <>
      <div style={overlayStyle}></div>
      <div className={style.pickup_container}>
        <div className={style.form_header}>
          <h3>Add Pickup Address or Facility</h3>
          <span onClick={togglePopup}> &times; </span>
        </div>
        <form>
          <div>
            <label>Address:</label>
            <input type="text" placeholder="Enter address" />
          </div>
        </form>

      </div>
    </>
  )
}
