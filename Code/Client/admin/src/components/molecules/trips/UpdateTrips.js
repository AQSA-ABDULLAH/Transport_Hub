import React, { useState, useEffect } from 'react';
import Button from '../../atoms/buttons/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './addTrip.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const UpdateTrips = ({ onClose, tripId }) => {
  const [formData, setFormData] = useState({
    category: '',
    tripTitle: '',
    location: '',
    description: '',
    extraInformation: '',
    price: '',
    noOfGuest: '',
    noOfDays: '',
    noOfNights: '',
    departureCity: '',
    startDate: '',
    endDate: '',
    status: '',
    Ages: '',
    CheckIn: '',
    Checkout: '',
    BookingCloseDate: '',
  });
  const {category, tripTitle, location, description, extraInformation, price, noOfGuest, noOfDays,noOfNights, departureCity, startDate, endDate, status, Ages,CheckIn,Checkout, BookingCloseDate } = formData;


  const [imageFile, setImageFile] = useState(null);
  const currentDate = new Date();

  useEffect(() => {
    // Fetch trip details based on tripId and populate the form
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/trips/getTrip/${tripId}`);
        const tripDetails = response.data.data;
        setFormData((prevData) => ({
          ...prevData,
          ...tripDetails,
        }));
      } catch (error) {
        console.error('Error fetching trip details:', error);
      }
    };

    fetchTripDetails();
  }, [tripId]);


  const handleDateChange = (date, name) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: date,
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
    }
  };



  const handleSubmit = () => {
    const updatedFormData = new FormData();
    updatedFormData.append('category', formData.category);
    updatedFormData.append('tripTitle', formData.tripTitle);
    updatedFormData.append('location', formData.location);
    updatedFormData.append('images', imageFile);
    updatedFormData.append('description', formData.description);
    updatedFormData.append('extraInformation', formData.extraInformation);
    updatedFormData.append('noOfGuest', formData.noOfGuest);

    if (formData.category === 'Family') {
      if (!formData.price) {
        alert('Please fill in all required fields for Family category.');
        return;
      }
      updatedFormData.append('price', formData.price);
    } else if (formData.category === 'Individual') {
      if (
        !formData.price ||
        !formData.noOfDays ||
        !formData.noOfNights ||
        !formData.departureCity ||
        !formData.startDate ||
        !formData.endDate ||
        !formData.status ||
        !formData.Ages
      ) {
        alert('Please fill in all required fields for Individual category.');
        return;
      }
      updatedFormData.append('price', formData.price);
      updatedFormData.append('noOfDays', formData.noOfDays);
      updatedFormData.append('noOfNights', formData.noOfNights);
      updatedFormData.append('departureCity', formData.departureCity);
      updatedFormData.append('startDate', formData.startDate);
      updatedFormData.append('endDate', formData.endDate);
      updatedFormData.append('status', formData.status);
      updatedFormData.append('Ages', formData.Ages);
      updatedFormData.append('CheckIn', formData.CheckIn);
      updatedFormData.append('Checkout', formData.Checkout);
      updatedFormData.append('BookingCloseDate', formData.BookingCloseDate);
    } else if (formData.category === 'Group') {
      if (!formData.price) {
        alert('Please fill in all required fields for Group category.');
        return;
      }
      updatedFormData.append('price', formData.price);
    }

    // Proceed with data submission
    axios
      .put(`http://localhost:5000/api/trips/updateTrip/${tripId}`, updatedFormData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      .then((res) => {
        console.log(res.data);
        alert('Data updated successfully!');
        onClose();
      })
      .catch((err) => {
        console.log(err, 'err');
        if (err.response && err.response.status === 400) {
          // Validation error(s) from the server
          const validationErrors = err.response.data.errors;
          alert(`Validation failed:\n${validationErrors.map((error) => error.message).join('\n')}`);
        } else {
          // Other errors
          alert('Error updating data. Please try again.');
        }
      });
  };

  return (
    <div className={style.popupForm}>
      <h3>Update Trip Form</h3>

      <form onSubmit={handleSubmit}>
      <div>
        <label>Select Category:</label>
<select
  name="category"
  
  onChange={(e) => handleInputChange(e)} // Assuming handleInputChange is your existing change handler
>
  
  <option >Select</option>
  <option value="Family">Family</option>
  <option value="Group">Group</option>
  <option value="Individual">Individual</option>
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
         
        {category === "Family" && (
        <div>
          <label>Price Per Person</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
           <div>
            <label>No of Guests</label>
            <input
              type="text"
              name="noOfGuest"
              value={formData.noOfGuest}
              onChange={handleInputChange}
            />
            
          </div>
        </div>
        

        
        )}
        {category === "Group" && (
          <div>
          <label>Price Per Group</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
           <div>
            <label>No of Guests</label>
            <input
              type="text"
              name="noOfGuest"
              value={formData.noOfGuest}
              onChange={handleInputChange}
            />
            
          </div>
        </div>
         
        )}

        {category === "Individual" && (
          <div>
            <div>
          <label>Price Per Individual</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </div>
         
            <label>No of Days</label>
            <input
              type="text"
              name="noOfDays"
              value={formData.noOfDays}
              onChange={handleInputChange}
            />
            <label>No of Days</label>
            <input
              type="text"
              name="noOfNights"
              value={formData.noOfNights}
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
                selected={formData.endDate}
                onChange={(date) => handleDateChange(date, 'endDate')}
                name="endDate"
                className="form-control custom-date-picker"
                placeholderText="Click to select a End Date"
                minDate={currentDate}
              />
             <label>CheckIn Time</label>
            <input
              type="text"
              name="CheckIn"
              value={formData.CheckIn}
              onChange={handleInputChange}
            />
             <label>CheckOut Time</label>
            <input
              type="text"
              name="Checkout"
              value={formData.Checkout}
              onChange={handleInputChange}
            />
            {/* <div class="cs-form">
            <label>Check In Time</label>
            <input
          type="time"
          className="form-control"
          name="CheckIn"
          value={time.CheckIn}
          onChange={handleInputChange}
        />
            </div>
          
            <div class="cs-form">
            <label>Check Out Time</label>
              <input type="time" class="form-control"  />
            </div> */}
            <label>Booking Clsoe Date</label>
            <DatePicker
              selected={formData.BookingCloseDate}
              onChange={(date) => handleDateChange(date, 'BookingCloseDate')}
              name="BookingCloseDate"
              className="form-control custom-date-picker"
              placeholderText="Click to select a closing Date"
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
          UPDATE
        </button>
        <Button btnText="Close" primary btnClick={onClose} />
      </form>
    </div>
  );
};

export default UpdateTrips;
