import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./showpickupboy.module.css"
const Showpickupboys = () => {
  const [data, setData] = useState([]);

  
  const fetchData = async () => {
    try {
      const response = await axios.get('https://transport-hub-tawny.vercel.app/getAllData');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

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
              {data.map((item) => (
                <tr key={item._id}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phoneNumber}</td>
                  <td>{item.vehicleType}</td>
                  <td>{item.cnicNumber}</td>
                  <td>{item.city}</td>
                  <td>
                    <img src={`https://transport-hub-tawny.vercel.app/uploads/parcel/${item.picture}`}  style={{ maxWidth: '100px' }} />
                  </td>
                  <td><img src={`https://transport-hub-tawny.vercel.app/uploads/parcel/${item.drivingLicense}`} style={{ maxWidth: '100px' }} /></td>
                  <td><img src={`https://transport-hub-tawny.vercel.app/uploads/parcel/${item.vehiclePapers}`} style={{ maxWidth: '100px' }} /></td>
                  <td>{item.referenceNumber}</td>
                  <td>
                  <div className="d-flex gap-2">
                    <button className="btn btn-success" onClick={() => handleAccept(item._id)}>
                      Accept
                    </button>
                    <button className="btn btn-danger" style={buttonStyle} onClick={() => handleReject(item._id)}>
                      Reject
                    </button>
                    </div>
                    
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
    </>
  );
};

export default Showpickupboys;