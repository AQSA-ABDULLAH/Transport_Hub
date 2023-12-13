import React, { useState } from 'react';
import Button from '../../atoms/buttons/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './addTrip.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
 
const AddTrip = ({ onClose }) => {
    // const [category, setCategory] = useState("");
    const currentDate = new Date();
    const handleDateChange = (date, name) => {
        setFormData((prevData) => ({
          ...prevData,
          [name]: date,
        }));
      };
  const [formData, setFormData] = useState({
    category: "",
    tripTitle: "",
    location: "",
    
    description: "",
    extraInformation: "",
    price: "",
    noOfGuest: "",
    
    noOfDays: "",
    departureCity: "",
    startDate: "",
    endDate: "",
    status: "",
    Ages: "",
    // Add more group-specific fields if needed
  });
  const {category, tripTitle, location, description, extraInformation, price, noOfGuest, noOfDays, departureCity, startDate, endDate, status, Ages } = formData;


//   const handleCategoryChange = (event) => {
//     setCategory(event.target.value);
//   };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

 
    // const [tripTitle, settripTitle] = useState("");
    // const [location, setLocation] = useState("");
    const [imageFile, setImageFile] = useState(null); // Updated state for image file
    // const [description, setDescription] = useState("");
    // const [extraInformation, setExtraInformation] = useState("");
    // const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('category', category);
        formData.append('tripTitle', tripTitle);
        formData.append('location', location);
        formData.append('images', imageFile);
        formData.append('description', description);
        formData.append('extraInformation', extraInformation);
        formData.append('price', price);
      
        if (category === 'Family') {
          // Display an alert if any of the required fields for Family category is empty
          if (!noOfGuest) {
            alert('Please fill in all required fields for Family category.');
            return; // Exit the function if validation fails
          }
          // Append fields for Family category
          formData.append('noOfGuest', noOfGuest);
        } else if (category === 'Group') {
          // Display an alert if any of the required fields for Group category is empty
          if (!noOfGuest || !noOfDays || !departureCity || !startDate || !endDate || !status || !Ages) {
            alert('Please fill in all required fields for Group category.');
            return; // Exit the function if validation fails
          }
          // Append fields for Group category
          formData.append('noOfGuest', noOfGuest);
          formData.append('noOfDays', noOfDays);
          formData.append('departureCity', departureCity);
          formData.append('startDate', startDate);
          formData.append('endDate', endDate);
          formData.append('status', status);
          formData.append('Ages', Ages);
        }
      
        // Proceed with data submission
        axios
          .post('http://localhost:5000/api/trips/addTrip', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          })
          .then((res) => {
            console.log(res.data);
            alert('Data submitted successfully!');
            navigate('/trip');
          })
          .catch((err) => {
            console.log(err, 'err');
            if (err.response && err.response.status === 400) {
              // Validation error(s) from the server
              const validationErrors = err.response.data.errors;
              alert(`Validation failed:\n${validationErrors.map((error) => error.message).join('\n')}`);
            } else {
              // Other errors
              alert('Error submitting data. Please try again.');
            }
          });
      };
      

    
    return (
        <div className={style.popupForm}>
            <h3>Add New Trip Form</h3>

            <form onSubmit={handleSubmit}>
        <div>
        <label>Select Category:</label>
<select
  name="category"
  
  onChange={(e) => handleInputChange(e)} // Assuming handleInputChange is your existing change handler
>
  <option value="">Select Category</option>
  <option value="Family">Family</option>
  <option value="Group">Group</option>
</select>
        </div>

        <div>
          <label>Trip Title</label>
          <input
            type="text"
            name="tripTitle"
            value={formData.tripTitle}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
        </div>
        <div className={style.formField}>
                <label htmlFor="images">Image</label>
                <input
                    type="file" // Change type to 'file'
                    id="images"
                    name="images"
                    onChange={handleImageChange}
                />
            </div>

        <div>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Extra Information</label>
          <input
            type="text"
            name="extraInformation"
            value={formData.extraInformation}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Price</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
        {category === "Family" && (
          <div>
            <label>No of Guests</label>
            <input
              type="text"
              name="noOfGuest"
              value={formData.noOfGuest}
              onChange={handleInputChange}
            />
            
          </div>
        )}

        {category === "Group" && (
          <div>
            <label>No of Guests</label>
            <input
              type="text"
              name="noOfGuest"
              value={formData.noOfGuest}
              onChange={handleInputChange}
            />
            <label>No of Days</label>
            <input
              type="text"
              name="noOfDays"
              value={formData.noOfDays}
              onChange={handleInputChange}
            />
            <label>Start Date</label>
            <DatePicker
  selected={formData.startDate}
  onChange={(date) => handleDateChange(date, 'startDate')}
  name="startDate"
  className="form-control custom-date-picker"
  placeholderText="Click to select a Start Date"
  minDate={currentDate}
/>
<label>End Date</label>
            <DatePicker
  selected={formData.startDate}
  onChange={(date) => handleDateChange(date, 'startDate')}
  name="endDate"
  className="form-control custom-date-picker"
  placeholderText="Click to select a Start Date"
  minDate={currentDate}
/>

          
            
          
            <label>Departure City</label>
            <input
              type="text"
              name="departureCity"
              value={formData.departureCity}
              onChange={handleInputChange}
            />
            <label>Status</label>
            <input
              type="text"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
            />
            <label>Age</label>
            <input
              type="text"
              name="Ages"
              value={formData.Ages}
              onChange={handleInputChange}
            />
          </div>
        )}
         <button type="button" className="btn btn-success" onClick={handleSubmit}>
                SUBMIT
              </button>
            <Button btnText="Close" primary btnClick={onClose} />
      </form>


       
        </div>
    );
};

export default AddTrip;