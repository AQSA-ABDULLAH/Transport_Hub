import React, { useState, useEffect } from 'react';
import Button from '../../atoms/buttons/Button';
import axios from 'axios';
import style from './addTrip.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCloudUpload } from "react-icons/md";
import Swal from 'sweetalert2';

const UpdateTrips = ({ onClose, tripId }) => {
  const [errors, setErrors] = useState(false);
  const [categoryData, setCategoryData] = useState([]);
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
    
    Ages: '',
    CheckIn: '',
    Checkout: '',
    BookingCloseDate: '',
  });
  const { category, price, noOfGuest, noOfDays, noOfNights,  startDate, endDate, Ages, } = formData;

  const [imageFile, setImageFile] = useState(null);
  const [images, setImages] = useState(null);
  const currentDate = new Date();

  useEffect(() => {
    // Fetch trip details based on tripId and populate the form
    const fetchTripDetails = async () => {
      try {
        const response = await axios.get(`https://transport-hub-tawny.vercel.app/api/trips/tripDetails/${tripId}`);
        const tripDetails = response.data.data;
        if (tripDetails.images) {
          setImages(tripDetails.images);
        }
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
    const formattedDate = new Date(date);
    const formattedDateString = `${formattedDate.getDate()}/${formattedDate.getMonth() + 1}/${formattedDate.getFullYear()}`;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: formattedDateString,
    }));
  };
  const handleInputChange = (event) => {
    setFormData(prevFormData => {
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  };
  const handleSubmit = async () => {

    if (isNaN(price || Ages || noOfGuest || noOfDays || noOfNights)) {
      setErrors(true);
      return false;
    }
    const updatedFormData = new FormData();
    updatedFormData.append('category', formData.category);
    updatedFormData.append('tripTitle', formData.tripTitle);
    updatedFormData.append('location', formData.location);
    imageFile && updatedFormData.append('images', imageFile);
    updatedFormData.append('description', formData.description);
    updatedFormData.append('extraInformation', formData.extraInformation);
    updatedFormData.append('noOfGuest', formData.noOfGuest);
    updatedFormData.append('price', formData.price);
    updatedFormData.append('noOfDays', formData.noOfDays);
    updatedFormData.append('noOfNights', formData.noOfNights);
    updatedFormData.append('departureCity', formData.departureCity);
    updatedFormData.append('startDate', formData.startDate);
    updatedFormData.append('endDate', formData.endDate);
    updatedFormData.append('Ages', formData.Ages);
    updatedFormData.append('CheckIn', formData.CheckIn);
    updatedFormData.append('Checkout', formData.Checkout);
    updatedFormData.append('BookingCloseDate', formData.BookingCloseDate);

    try {
      const response = await axios.put(`https://transport-hub-tawny.vercel.app/api/trips/updatePackage/${tripId}`, formData);

      if (response.data.status === "success") {
        Swal.fire(
          'Data Updated Successfully',
          'Go to trips tab to see the changes',
          'success'
        );
        onClose();
        const response = await axios.get('https://transport-hub-tawny.vercel.app/api/trips/TripPackages', {
          params: { category },
        });
        console.log('Response:', response.data);
        setCategoryData(response.data.data);

      } else {
        alert("Failed to submit data. Please try again.");
      }

    } catch (error) {
      console.log(error);
      alert("An error occurred while submitting the data. Please try again.");
    }

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
            value={formData.category}
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

          <label htmlFor="">
            <input

              type="file" // Change type to 'file'
              id="images"
              name="images"
              onChange={(e) => setImages(URL.createObjectURL(e.target.files[0]))}
            />

          </label>
          <div>
            {images ? (
              <div>
                <img src={images} alt="" style={{ maxWidth: '200px', maxHeight: '200px' }} />
              </div>
            ) : (
              <div className={style.image_container}>
                <MdCloudUpload className={style.icon} />
                <p>Drag and drop or click here to upload image</p>
              </div>
            )}
          </div>
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
            {errors && price && isNaN(price) && <span class-Name={style.error}>Price must be a number</span>}
            <div>
              <label>No of Guests</label>
              <input
                type="text"
                name="noOfGuest"
                value={formData.noOfGuest}
                onChange={handleInputChange}
              />
              {errors && noOfGuest && isNaN(noOfGuest) && <span class-Name={style.error}>No of Guest must be a number</span>}
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
            {errors && price && isNaN(price) && <span className={style.error}>Price must be a number</span>}
            <div>
              <label>No of Guests</label>
              <input
                type="text"
                name="noOfGuest"
                value={formData.noOfGuest}
                onChange={handleInputChange}
              />
              {errors && noOfGuest && isNaN(noOfGuest) && <span class-Name={style.error}>No of Guest must be a number</span>}
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
            {errors && price && isNaN(price) && <span className={style.error}>Price must be a number</span>}


            <label>No of Days</label>
            <input
              type="text"
              name="noOfDays"
              value={formData.noOfDays}
              onChange={handleInputChange}
            />

            {errors && noOfDays && isNaN(noOfDays) && <span className={style.error}>No of Days must be a number</span>}

            <label>No of Nights</label>
            <input
              type="text"
              name="noOfNights"
              value={formData.noOfNights}
              onChange={handleInputChange}
            />
        {errors && noOfNights && isNaN(noOfNights) && <span class-Name={style.error}>No Of Nights must be a number</span>}
            <label>Start Date</label>
            <DatePicker
              value={startDate}
              dateFormat="dd/MM/yyyy"
              onChange={(date) => handleDateChange(date, 'startDate')}
              name="startDate"
              className="form-control custom-date-picker"
              placeholderText="Click to select a Start Date"
              minDate={currentDate}
            />
            <label>End Date</label>
            <DatePicker

              value={endDate}
              dateFormat="dd/MM/yyyy"
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
            <label>Booking Clsoe Date</label>
            <DatePicker

              value={formData.BookingCloseDate}
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
            <label>Age</label>
            <input
              type="text"
              name="Ages"
              value={formData.Ages}
              onChange={handleInputChange}
            />
            {errors && Ages && isNaN(Ages) && <span className={style.error}>Age must be a number</span>}
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
