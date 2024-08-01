import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateTrips from './UpdateTrips';
import './showTrips.css';
import { FaTrash, FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
const ShowTrips = () => {
  const [category, setCategory] = useState('Family');
  const [categoryData, setCategoryData] = useState([]);
  const [showUpdateForm, setShowUpdateForm] = useState(false);
  const [selectedTripId, setSelectedTripId] = useState(null);
  const handleUpdate = (id) => {
    setShowUpdateForm(true);
    setSelectedTripId(id);
  };
  const handleCloseUpdateForm = () => {
    setShowUpdateForm(false);
    setSelectedTripId(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log('Fetching data for category:', category);
        const response = await axios.get('https://transport-hub-tawny.vercel.app/api/trips/TripPackages', {
          params: { category },
        });
        console.log('Response:', response.data);
        setCategoryData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };


    fetchData();
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
    console.log('Selected category:', event.target.value);
  };

  const filteredFields = ['_id', 'createdAt', 'updatedAt', '__v'];


  const handleDelete = async (id) => {

    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this Trip!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!'
    })
      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`https://transport-hub-tawny.vercel.app/api/trips/deletePackage/${id}`)
            .then(res => {
              Swal.fire(
                'Trip Deleted!',
                'You data have been delete.',
                'success'
              );
              if (res.status === 200) {
                axios.get("https://transport-hub-tawny.vercel.app/api/trips/TripPackages", {
                  params: { category },
                })
                  .then(res => {
                    console.log(res.data);
                    setCategoryData(res.data.data);
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });
    //   const response = await axi-os.delete(`https://transport-hub-tawny.vercel.app/api/trips/deletePackage/${id}`);
    //   if (response.status === 200) {
    //     // Successfully deleted on the server, now update the local state to reflect the change
    //     Swal.fire(
    //       'Delete Car!',
    //       'You data have been delete.',
    //       'success'
    //     );
    //     setCategoryData((prevData) => prevData.filter(item => item._id !== id));
    //     console.log(response.data.message); // Log success message from the server
    //   } else {
    //     console.log(response.data.message); // Log error message from the server
    //   }
    // } catch (error) {
    //   console.error('Error deleting trip:', error);
    // }
  };

  return (
    <div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">Select Category:</label>
        <select
          className="form-select"
          name="category"
          onChange={handleCategoryChange}
        >
          <option value="Family">Family</option>
          <option value="Group">Group</option>
          <option value="Individual">Individual</option>
        </select>
      </div>

      {categoryData.length > 0 ? (
        <div>
          <h2>{category} Data</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Category</th>
                <th>Title</th>
                <th>Location</th>
                <th>Images</th>
                <th>Price</th>
                <th>Extra Information</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((item, index) => (
                <tr key={index} >
                  <td >{item.category}</td>
                  <td>{item.tripTitle}</td>
                  <td>{item.location}</td>
                  <td>
                    <img src={item?.images} alt={item.images} />
                  </td>
                  <td>{item.price}</td>
                  <td>{item.extraInformation}</td>
                  {/* {Object.entries(item)
            .filter(([key]) => !filteredFields.includes(key))
            .map(([key, value]) => (
            <td key={key} style={{ padding: '12px', textAlign: 'left' }}>
            {key === 'images' ? (
            <img src={value.startsWith('http') ? value : `https://firebasestorage.googleapis.com/v0/b/your-firebase-storage-url.appspot.com/o/tripImages%2F${value}?alt=media`} alt={value} style={{ maxWidth: '50px', maxHeight: '50px' }} />
          ) : (
            value
          )} */}
                  {/* </td> */}
                  {/* ))} */}

                  <td>
                    <FaEdit className='editButton' onClick={() => handleUpdate(item._id)} />
                    <FaTrash className='deleteButton' onClick={() => handleDelete(item._id)} />
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      ) : (
        <p>No records found for the selected category.</p>
      )}
      {showUpdateForm && (
        <UpdateTrips
          onClose={handleCloseUpdateForm}
          tripId={selectedTripId}
        />
      )}
    </div>
  );
};

export default ShowTrips;
