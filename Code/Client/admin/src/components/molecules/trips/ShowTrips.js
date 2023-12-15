import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowTrips = () => {
  const [category, setCategory] = useState('');
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/trips/TripPackages', {
          params: { category },
        });
        setCategoryData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [category]);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const filteredFields = ['_id', 'createdAt', 'updatedAt', '__v'];

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <div>
        <label>Select Category:</label>
        <select name="category" value={category} onChange={handleCategoryChange}>
          <option value="Family">Family</option>
          <option value="Group">Group</option>
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
                          <img src={`http://localhost:5000/public/Upload/${value}`} alt={value} style={{ maxWidth: '20px', maxHeight: '20px' }} />
                        ) : (
                          value
                        )}
                      </td>
                    ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No records found for the selected category.</p>
      )}
    </div>
  );
};

export default ShowTrips;
