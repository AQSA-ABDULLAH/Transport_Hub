import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./showpickupboy.module.css"
import pickupboyimage from './pickupboyimage.jpg';
import vehiclelicenseimage from './vehiclelicenseimage.jpg';
const Showpickupboys = () => {
  const [data, setData] = useState([]);

  
  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/getAllData');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleAccept = (id) => {
    // console.log(`Accepted data with id: ${id}`);
  };

  
  const handleReject = (id) => {
    // console.log(`Rejected data with id: ${id}`);
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
              {/* key={item._id} */}
                <tr>
                {/* <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.vehicleType}</td>
                  <td>{item.cnicNumber}</td>
                  <td>{item.city}</td> */}
                  <td>Alia</td>
                  <td>fatima75.ahmad@gmail.com</td>
                  <td>+923185031361</td>
                  <td>Bike</td>
                  <td>37406-9605539-6</td>
                  <td>Wah Cantt</td>
                  <td>
                    <img src={pickupboyimage} alt="Picture" style={{ maxWidth: '100px' }} />
                  </td>
                  <td><img src={vehiclelicenseimage}alt="Picture" style={{ maxWidth: '100px' }} /></td>
                  <td><img src={vehiclelicenseimage} alt="Picture" style={{ maxWidth: '100px' }} /></td>
                  <td>{2344}</td>
                  <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-success" onClick={() => handleAccept()}>
                      Accept
                    </button>
                    <button className="btn btn-danger" style={buttonStyle} onClick={() => handleReject()}>
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

export default Showpickupboys;