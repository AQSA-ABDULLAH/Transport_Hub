import React, { useState, useEffect } from 'react';
import axios from 'axios';
const Showpickupboy = ({pickupBoy}) => {
  const handleAccept = (id) => {
    console.log(`Accepted data with id: ${id}`);
  };

  
  const handleReject = (id) => {
    console.log(`Rejected data with id: ${id}`);
  };
  const buttonStyle = {
    backgroundColor: '#FF0000',
    color: '#fff',
    // Add other styles as needed
  };

  return (
    <>
      {/* Your existing Navbar component */}

    
        <div className="w-75 p-4 rounded" >
          <h2>PickupBoy Form</h2>
          <table className="table table-striped table-bordered">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Vehicle Type</th>
                <th>CNIC Number</th>
                <th>City</th>
                <th>Picture</th>
                <th>Driving License</th>
                <th>Vehicle Papers</th>
                <th>Reference Number</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {/* {data.map((item) => ( */}
                {/* <tr key={item._id}> */}
                <tr >
                  <td>{pickupBoy.name}</td>
                  <td>{pickupBoy.email}</td>
                  <td>{pickupBoy.phoneNumber}</td>
                  <td>{pickupBoy.vehicleType}</td>
                  <td>{pickupBoy.cnicNumber}</td>
                  <td>{pickupBoy.city}</td>
                  <td>
                    <img src={pickupBoy.picture} alt="" style={{ maxWidth: '100px' }} />
                  </td>
                  <td><img src={pickupBoy.drivingLicense} alt="" style={{ maxWidth: '100px' }} /></td>
                  <td><img src={pickupBoy.vehiclePapers} alt="" style={{ maxWidth: '100px' }} /></td>
                  <td>{pickupBoy.referenceNumber}</td>
                  {/* `http://localhost:5000/uploads/parcel/${item.vehiclePapers}` */}
                  <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-success" onClick={() => handleAccept(pickupBoy._id)}>
                      Accept
                    </button>
                    <button className="btn btn-danger" style={buttonStyle} onClick={() => handleReject(pickupBoy._id)}>
                      Reject
                    </button>
                    </div>
                    
                  </td>
                </tr>
              {/* ))} */}
            </tbody>
          </table>
        </div>
    </>
  );
};

export default Showpickupboy;