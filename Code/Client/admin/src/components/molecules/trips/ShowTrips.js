import React, { useEffect, useState } from 'react';
import Button from '../../atoms/buttons/Button';
import { UpdateTrips } from './UpdateTrips';
import axios from 'axios';

const ShowTrips = () => {
  const [users, setUsers] = useState([])
  useEffect(() =>{
    axios.get('http://localhost:5000/api/trips/TripPackages')
    .then(result => setUsers(result.data))
    .catch(err => console.log(err))
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
      {users.map((val,key) => {
        return <div key={key}>
          <td>{val.tripTitle}</td>
          <td><Button btnText="Update" primary btnClick={openUpdateTrip} />
              <button type="button" className="btn btn-danger" >
                Delete
              </button>
              </td>
        </div>

})}
      {isUpdateTripVisible && <UpdateTrips onClose={closeUpdateTrip} />}
    </>
  );
};

export default ShowTrips;
