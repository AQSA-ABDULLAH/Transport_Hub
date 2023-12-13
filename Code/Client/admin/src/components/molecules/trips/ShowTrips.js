import React, { useEffect, useState } from 'react';
import Button from '../../atoms/buttons/Button';
import { UpdateTrips } from './UpdateTrips';
import axios from 'axios';

const ShowTrips = () => {
  const [users, setUsers] = useState([])
  useEffect(() =>{
    const fetchData = async () =>{
      const response = await fetch('/api/trips/TripPackages')
      const json = await response.json() 
      if(response.ok){
        setUsers(json)
      }

    }
    fetchData()
  }, [])
  const [isUpdateTripVisible, setUpdateTripVisible] = useState(false);

  const openUpdateTrip = () => {
    setUpdateTripVisible(true);
  };

  const closeUpdateTrip = () => {
    setUpdateTripVisible(false);
  };
  return (
    <>
    {users && users.map(()=>(
        <p key={users._id}>{users.tripTitle}</p>
    ))}
      {/* {users.map((val,key) => {
        return <div key={key}>
          <td>{val.tripTitle}</td>
          <td><Button btnText="Update" primary btnClick={openUpdateTrip} />
              <button type="button" className="btn btn-danger" >
                Delete
              </button>
              </td>
        </div>

})} */}
      {isUpdateTripVisible && <UpdateTrips onClose={closeUpdateTrip} />}
    </>
  );
};

export default ShowTrips;
