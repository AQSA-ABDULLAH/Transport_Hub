import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import UpdateTrips from './UpdateTrips'; 
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
        const response = await axios.get('http://localhost:5000/api/trips/TripPackages', {
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
    try {
      const response = await axios.delete(`http://localhost:5000/api/trips/deletePackage/${id}`);
      
      if (response.status === 200) {
        // Successfully deleted on the server, now update the local state to reflect the change
        setCategoryData((prevData) => prevData.filter(item => item._id !== id));
        console.log(response.data.message); // Log success message from the server
      } else {
        console.log(response.data.message); // Log error message from the server
      }
    } catch (error) {
      console.error('Error deleting trip:', error);
    }
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
          <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid #ddd' }}>
                {Object.keys(categoryData[0])
                  .filter((key) => !filteredFields.includes(key))
                  .map((key) => (
                    <th key={key} style={{ padding: '12px', textAlign: 'left' }}>{key}</th>
                  ))}
                  <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {categoryData.map((item, index) => (
                <tr key={index} style={{ borderBottom: '1px solid #ddd' }}>
                  {Object.entries(item)
                    .filter(([key]) => !filteredFields.includes(key))
                    .map(([key, value]) => (
                      <td key={key} style={{ padding: '12px', textAlign: 'left' }}>
                        {key === 'images' ? (
                          <img src={`http://localhost:5000/uploads/trips/${value}`} alt={value} style={{ maxWidth: '20px', maxHeight: '20px' }} />
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                     <td>
                     <button onClick={() => handleUpdate(item._id)}>Update</button>
                  <button onClick={() => handleDelete(item._id)} style={{ backgroundColor: 'red', color: 'white' }}>Delete</button>
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
