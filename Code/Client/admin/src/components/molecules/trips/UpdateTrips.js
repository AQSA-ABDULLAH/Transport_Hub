import React, { useState, useEffect } from 'react';
import Button from '../../atoms/buttons/Button';
import axios from 'axios';
import style from './addTrip.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { MdCloudUpload } from "react-icons/md";
import Swal from 'sweetalert2';

const UpdateTrips = ({ onClose, tripId }) => {
  const [errors, setErrors] = useState({});
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
  const { category, price, noOfGuest, noOfDays, noOfNights, startDate, endDate, Ages } = formData;

  const [imageFile, setImageFile] = useState(null);
  const [images, setImages] = useState(null);
  const currentDate = new Date();

  useEffect(() => {
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
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const validateFormData = () => {
    const errors = {};
    if (isNaN(price) && price !== '') errors.price = 'Price must be a number';
    if (isNaN(noOfGuest) && noOfGuest !== '') errors.noOfGuest = 'No of Guest must be a number';
    if (isNaN(noOfDays) && noOfDays !== '') errors.noOfDays = 'No of Days must be a number';
    if (isNaN(noOfNights) && noOfNights !== '') errors.noOfNights = 'No Of Nights must be a number';
    if (isNaN(Ages) && Ages !== '') errors.Ages = 'Age must be a number';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    if (!validateFormData()) return;

    const updatedFormData = new FormData();
    updatedFormData.append('category', formData.category);
    updatedFormData.append('tripTitle', formData.tripTitle);
    updatedFormData.append('location', formData.location);
    if (imageFile) updatedFormData.append('images', imageFile);
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
      const response = await axios.put(`https://transport-hub-tawny.vercel.app/api/trips/updatePackage/${tripId}`, updatedFormData);

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
        setCategoryData(response.data.data);
      } else {
        Swal.fire(
          'Submission Failed',
          'Failed to submit data. Please try again.',
          'error'
        );
      }
    } catch (error) {
      console.error('Error updating trip:', error);
      Swal.fire(
        'Error',
        'An error occurred while submitting the data. Please try again.',
        'error'
      );
    }
  };

  useEffect(() => {
    if (categoryData.length > 0) {
      console.log('Category data has been updated:', categoryData);
    }
  }, [categoryData]);

  return (
    <div className={style.popupForm}>
      <h3>Update Trip Form</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Select Category:</label>
          <select
            name="category"
            onChange={handleInputChange}
            value={formData.category}
          >
            <option value="">Select</option>
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
          <label htmlFor="images">
            <input
              type="file"
              id="images"
              name="images"
              onChange={(e) => setImageFile(e.target.files[0])}
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
            {errors.price && <span className={style.error}>{errors.price}</span>}
          </div>
        )}

        <div>
          <label>No. of Guests</label>
          <input
            type="text"
            name="noOfGuest"
            value={formData.noOfGuest}
            onChange={handleInputChange}
          />
          {errors.noOfGuest && <span className={style.error}>{errors.noOfGuest}</span>}
        </div>

        <div>
          <label>No. of Days</label>
          <input
            type="text"
            name="noOfDays"
            value={formData.noOfDays}
            onChange={handleInputChange}
          />
          {errors.noOfDays && <span className={style.error}>{errors.noOfDays}</span>}
        </div>

        <div>
          <label>No. of Nights</label>
          <input
            type="text"
            name="noOfNights"
            value={formData.noOfNights}
            onChange={handleInputChange}
          />
          {errors.noOfNights && <span className={style.error}>{errors.noOfNights}</span>}
        </div>

        <div>
          <label>Departure City</label>
          <input
            type="text"
            name="departureCity"
            value={formData.departureCity}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <label>Start Date</label>
          <DatePicker
            selected={new Date(formData.startDate)}
            onChange={(date) => handleDateChange(date, 'startDate')}
            minDate={currentDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div>
          <label>End Date</label>
          <DatePicker
            selected={new Date(formData.endDate)}
            onChange={(date) => handleDateChange(date, 'endDate')}
            minDate={currentDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div>
          <label>Ages</label>
          <input
            type="text"
            name="Ages"
            value={formData.Ages}
            onChange={handleInputChange}
          />
          {errors.Ages && <span className={style.error}>{errors.Ages}</span>}
        </div>

        <div>
          <label>Check-In</label>
          <DatePicker
            selected={new Date(formData.CheckIn)}
            onChange={(date) => handleDateChange(date, 'CheckIn')}
            minDate={currentDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div>
          <label>Checkout</label>
          <DatePicker
            selected={new Date(formData.Checkout)}
            onChange={(date) => handleDateChange(date, 'Checkout')}
            minDate={currentDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <div>
          <label>Booking Close Date</label>
          <DatePicker
            selected={new Date(formData.BookingCloseDate)}
            onChange={(date) => handleDateChange(date, 'BookingCloseDate')}
            minDate={currentDate}
            dateFormat="dd/MM/yyyy"
          />
        </div>

        <Button type="submit">Update Trip</Button>
        <Button type="button" onClick={onClose}>Cancel</Button>
      </form>
    </div>
  );
};

export default UpdateTrips;
