import React, { useEffect, useState } from 'react';
import axios from 'axios'
import DeleteParcel from './DeleteParcel';
import styles from './ShowParcels.module.css';
const ShowParcels = () => {
  const [parcelForms, setParcelForms] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/getParcels'); 
        setParcelForms(response.data);
      } catch (error) {
        console.error('Error fetching parcel forms', error);
      }
    }
    fetchData();
  }, []);


  return (
   <>
    <div className={styles.tableContainer}>
      <h2 >Parcel Forms</h2>
      <table>
        <thead className={styles.parcelTable}>
          <tr >
            {/* <th>ID</th> */}
            <th>Pickup Location</th>
            <th>Weight</th>
            <th>ParcelType</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Time</th>
            <th>Address</th>
            <th>SelectedCompany</th>
            <th>Rate</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {parcelForms.map((parcel) => (
            <tr key={parcel._id}>
              {/* <td>{parcel._id}</td> */}
              <td>{parcel.pickupLocation}</td>
              <td>{parcel.weight}</td>
              <td>{parcel.parcelType}</td>
              <td>{parcel.phone}</td>
              <td>{parcel.email}</td>
              <td>{parcel.time}</td>
              <td>{parcel.address}</td>
              <td>{parcel.selectedCompany}</td>
              <td>{parcel.rate}</td>
              <td>
                 {/* <button onClick={() => viewParcel(parcel._id)}>View</button> */}
                <DeleteParcel parcelId={parcel._id} setParcelForms={setParcelForms}/> 
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </>
  );
}
export default ShowParcels;