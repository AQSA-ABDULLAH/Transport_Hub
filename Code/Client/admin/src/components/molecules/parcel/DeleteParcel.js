import React from 'react'
import axios from 'axios';
const DeleteParcel = ({ parcelId, setParcelForms }) => {
    const handleDelete = async (id) => {
        try {
          await axios.delete(`https://transport-hub-tawny.vercel.app/parcelforms/${parcelId}`); // Replace with your API endpoint
          // Update the state to reflect the deleted parcel form
          setParcelForms((prevParcelForms) => prevParcelForms.filter((parcel) => parcel._id !== parcelId));
          console.log('Parcel form deleted successfully');
        } catch (error) {
          console.error('Error deleting parcel form', error);
        }
      }
  return (
    <>
        <button onClick={() => handleDelete(parcelId)}>Delete</button>
    </>
  )
}

export default DeleteParcel;