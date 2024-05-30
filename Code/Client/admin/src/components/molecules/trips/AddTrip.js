import React, { useState } from 'react';
import Button from '../../atoms/buttons/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './addTrip.module.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { storage } from '../../../firebase';
import { ref, uploadBytes } from 'firebase/storage';
import { v4 } from 'uuid';
import { getDownloadURL } from 'firebase/storage';
import Swal from 'sweetalert2';
import { MdCloudUpload } from "react-icons/md";


const AddTrip = ({ onClose }) => {

  const [imageUpload, setImageUpload] = useState(null);
  const [errors, setErrors] = useState(null);
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
    images: "",
    description: "",
    extraInformation: "",
    price: "",
    noOfGuest: "",
    noOfDays: "",
    noOfNights: "",
    departureCity: "",
    startDate: "",
    endDate: "",
    Ages: "",
    CheckIn:"",
    Checkout:"",
    BookingCloseDate:"",
    
  });
  const {category, tripTitle, location,images, description, extraInformation, price, noOfGuest, noOfDays,noOfNights, departureCity, startDate, endDate,  Ages,CheckIn,Checkout, BookingCloseDate } = formData;
  const handleInputChange = (event) => {
    const { name, value, type, files } = event.target;
  
    if (type === 'file') {
      setImageUpload(files[0]);
    } else {
      setFormData((prevData) => ({ ...prevData, [name]: value }));
    }
  };
   const navigate = useNavigate();

   

    const handleSubmit = (e) => {
      e.preventDefault(); // Prevent the default form submission
    
      const errors = {}; // Object to store error messages
      
      // Validate each field
      if (!category) {
        setErrors(true);
        return false;
      }
      if (!tripTitle) {

        setErrors(true);
        return false;
      }
      if (!location) {
        setErrors(true);
        return false;
      }
      if (!imageUpload) {
        setErrors(true);
        return false;
      }
      if (!description) {
        setErrors(true);
        return false;
      }
      if (!extraInformation) {
        setErrors(true);
        return false;
      }
    
      // Check if category-specific fields are required and validate them
      if (category === "Family") {
        if (!price) {
          setErrors(true);
        return false;
        }
        if (!noOfGuest) {
          setErrors(true);
          return false;
        }
      } else if (category === "Group") {
        if (!price) {
          setErrors(true);
        return false;
        }
        if (!noOfGuest) {
          setErrors(true);
        return false;
        }
      } else if (category === "Individual") {
        if (!price) {
          setErrors(true);
        return false;
        }
        if (!noOfDays) {
          setErrors(true);
        return false;
        }
        if (!noOfNights) {
          setErrors(true);
        return false;
        }
        if (!departureCity) {
          setErrors(true);
        return false;
        }
        if (!startDate) {
          setErrors(true);
        return false;
        }
        if (!endDate) {
          setErrors(true);
        return false;
        }
       
        if (!Ages) {
          setErrors(true);
        return false;
        }
        if (!CheckIn) {
          setErrors(true);
        return false;
        }
        if (!Checkout) {
          setErrors(true);
        return false;
        }
        if (!BookingCloseDate) {
          setErrors(true);
        return false;
        }
      }
    
      if (isNaN(price || Ages || noOfGuest || noOfDays || noOfNights )) {
        setErrors(true);
        return false; 
      }
  
      if (Object.keys(errors).length === 0) {
        // Proceed with data submission
        const formData = new FormData();
        formData.append('category', category);
        formData.append('tripTitle', tripTitle);
        formData.append('location', location);
        
        if (imageUpload === '') {
          alert('Please select an image to upload');
          return;
        }
        const imageRef = ref(storage, `tripImages/${imageUpload.name + v4()}`);
  
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            console.log("Image Uploaded");
            
            getDownloadURL(imageRef).then((downloadURL) => {
              console.log('File available at', downloadURL);
              // Update the formData with the image URL
         
          formData.append('images', downloadURL);
        formData.append('description', description);
        formData.append('extraInformation', extraInformation);
        
        
      
        if (category === 'Family') {
         
          if (!price || !noOfGuest) {
            alert('Please fill in all required fields for Family category.');
            return; 
          }
          formData.append('price', price);
          formData.append('noOfGuest', noOfGuest);
  
        } else if (category === 'Individual') {
          

          if (!price || !noOfDays || !noOfNights || !departureCity || !startDate || !endDate || !status || !Ages || !CheckIn || !Checkout || !BookingCloseDate) {

            alert('Please fill in all required fields for Group category.');
            return; 
          }
          
          formData.append('price', price);
          formData.append('noOfDays', noOfDays);
          formData.append('noOfNights', noOfNights);
          formData.append('departureCity', departureCity);
          formData.append('startDate', startDate);
          formData.append('endDate', endDate);
          formData.append('Ages', Ages);
          formData.append('CheckIn', CheckIn);
          formData.append('Checkout', Checkout);
          formData.append('BookingCloseDate', BookingCloseDate);
        }
        else if (category === 'Group') {
          
          if (!price || !noOfGuest ) {
            alert('Please fill in all required fields for Group category.');
            return; 
          }
          
          formData.append('price', price);
          formData.append('noOfGuest', noOfGuest);
        
        }
      
        // Proceed with data submission
        axios
          .post('http://localhost:5000/api/trips/addTrip', formData, {
            headers: { 'Content-Type': 'multipart/form-data' },
          }).then((res) => {
            console.log(res.data);
            Swal.fire(
              'New Trip Added Successfully',
              'Go to trips management tab to see the results',
              'success'
            );
            
            onclose();
          })
          .catch((err) => {
            console.log(err, 'err');
            if (err.response && err.response.status === 400) {
              // Validation error(s) from the server
              const validationErrors = err.response.data.errors;
          const errorMessages = `Validation failed:\n${validationErrors.map((error) => error.message).join('\n')}`;
          // setErrors({ server: errorMessages });
          
            } else {
              // Other errors
              alert('Error submitting data. Please try again.');
            }
          })
          
        });
    });
  };
     }

     const overlayStyle = {
      position: 'fixed',
      top: '0',
      left: '0',
      width: '100%',
      height: '100%',
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
      zIndex: '999',
      backdropFilter: 'blur(1px)',

  };

    
    return (
      <>
      <div style={overlayStyle}></div>
        <div className={style.popupForm}>
            <h3>Add New Trip Form</h3>

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
{errors && !category && <span className={style.error}>This field is required</span>}

        </div>
        <div className={style.first_row}>
        <div className={style.image}>
        <label htmlFor="images">Image:</label>
        <input type="file" className={style.form_image} accept="image/png, image/jpeg" onChange={handleInputChange}
        />
      <div className={style.image_view}>
        {imageUpload ? (
          <img src={URL.createObjectURL(imageUpload)} alt="icon" />
        ) : (
          <div className={style.image_container}>
          <MdCloudUpload className={style.icon} />
          <p>Drag and drop or click here to upload image</p>
          </div>
        )}
      </div>
      {errors && !imageUpload && <span className={style.error}>Upload an Image</span>}
</div>


        <div >
          <label>Trip Title</label>
          <input
            type="text"
            name="tripTitle"
            value={formData.tripTitle}
            onChange={handleInputChange}
          />
          {errors && !tripTitle && <span className={style.error}>This field is required</span>}
        </div>
        
        </div>
        <div className={style.row}>
          <div className={style.input_field}>
          <label>Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
          />
          {errors && !location && <span className={style.error}>This field is required</span>}
        </div>
        <div className={style.input_field}>
          <label>Description</label>
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        {errors && !description && <span className={style.error}>This field is required</span>}

        <div className={style.input_field}>
          <label>Extra Information</label>
          <input
            type="text"
            name="extraInformation"
            value={formData.extraInformation}
            onChange={handleInputChange}
          />
        </div>
        {errors && !extraInformation && <span className={style.error}>This field is required</span>}

        </div>

        {category === "Family" && (
        <div className={style.row}>
        <div className={style.input_field}>
          <label>Price Per Person</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          {errors && !price && <span className={style.error}>This field is required</span>}
          {errors && price && isNaN(price) && <span className={style.error}>Price must be a number</span>}

           <div className={style.input_field}>

            <label>No of Guests</label>
            <input
              type="text"
              name="noOfGuest"
              value={formData.noOfGuest}
              onChange={handleInputChange}
            />
            {errors && !noOfGuest && <span className={style.error}>This field is required</span>}
            {errors && noOfGuest && isNaN(noOfGuest) && <span class-Name={style.error}>No of Guests must be a number</span>}
          </div>
        </div>
        </div>

        
        )}
        {category === "Group" && (
          <div className={style.row}>
          <div className={style.input_field}> 
          <label>Price Per Group</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          {errors && !price && <span className={style.error}>This field is required</span>}
          {errors && price && isNaN(price) && <span class-Name={style.error}>Price must be a number</span>}


           <div className={style.input_field}>

            <label>No of Guests</label>
            <input
              type="text"
              name="noOfGuest"
              value={formData.noOfGuest}
              onChange={handleInputChange}
            />
            {errors && !noOfGuest && <span className={style.error}>This field is required</span>}
            {errors && noOfGuest && isNaN(noOfGuest) && <span class-Name={style.error}>No of Guests must be a number</span>}

          </div>
        </div>
        </div>
        )}

        {category === "Individual" && (
          <div>
            <div className={style.row}>
            <div className={style.input_field}>
          <label>Price Per Individual</label>
          <input
            type="text"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
          {errors && !price && <span className={style.error}>This field is required</span>}
          {errors && price && isNaN(price) && <span class-Name={style.error}>No of Guests must be a number</span>}
        </div>
        <div className={style.input_field}>

            <label>No of Days</label>
            <input
              type="text"
              name="noOfDays"
              value={formData.noOfDays}
              onChange={handleInputChange}

              />
             {errors && !noOfDays && <span className={style.error}>This field is required</span>}
            {errors && noOfDays && isNaN(noOfDays) && <span class-Name={style.error}>No of Guests must be a number</span>}
              </div>
            <div className={style.input_field}>


            <label>No of Night</label>
            <input
              type="text"
              name="noOfNights"
              value={formData.noOfNights}
              onChange={handleInputChange}

              />
             {errors && !noOfNights && <span className={style.error}>This field is required</span>}
            {errors && noOfNights && isNaN(noOfNights) && <span class-Name={style.error}>No of Guests must be a number</span>}
              </div>
            </div>
            <div className={style.row}>
            <div className={style.input_field}>

            <label>Start Date</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) => handleDateChange(date, 'startDate')}
              name="startDate"
              className="form-control custom-date-picker"
              placeholderText="Click to select a Start Date"
              minDate={currentDate}
              />
            {errors && !startDate && <span className={style.error}>This field is required</span>}
            </div>
            <div className={style.input_field}>

            <label>End Date</label>
            <DatePicker
                selected={formData.endDate}
                onChange={(date) => handleDateChange(date, 'endDate')}
                name="endDate"
                className="form-control custom-date-picker"
                placeholderText="Click to select a End Date"
                minDate={currentDate}

                />
            {errors && !endDate && <span className={style.error}>This field is required</span>}
                </div>
                
            </div>
            <div className={style.row}>

            <div class="cs-form" className={style.input_field}>

            <label>Check In Time</label>
            <input
          type="time"
          className="form-control"
          name="CheckIn"
          value={formData.CheckIn}
          onChange={handleInputChange}
          />
        {errors && !CheckIn && <span className={style.error}>This field is required</span>}
            </div>
            <div class="cs-form" className={style.input_field}>
            <label>Check Out Time</label>
            <input
          type="time"
          className="form-control"
          name="Checkout"
          value={formData.Checkout}
          onChange={handleInputChange}
          />
        {errors && !Checkout && <span className={style.error}>This field is required</span>}
            </div>
          

            <div className={style.input_field}>

            <label>Booking Clsoe Date</label>
            <DatePicker
              selected={formData.BookingCloseDate}
              onChange={(date) => handleDateChange(date, 'BookingCloseDate')}
              name="BookingCloseDate"
              className="form-control custom-date-picker"
              placeholderText="Click to select a closing Date"
              minDate={currentDate}

              />
            {errors && !BookingCloseDate && <span className={style.error}>This field is required</span>}       
              </div>
            </div>
            <div className={style.row}>
              <div className={style.input_field}>

            <label>Departure City</label>
            <input
              type="text"
              name="departureCity"
              value={formData.departureCity}
              onChange={handleInputChange}
              />
            {errors && !departureCity && <span className={style.error}>This field is required</span>}
              </div>
           <div className={style.input_field}>
            <label>Age</label>
            <input
              type="text"
              name="Ages"
              value={formData.Ages}
              onChange={handleInputChange}
              />
            {errors && !Ages && <span className={style.error}>This field is required</span>}

            </div>

          </div>
              </div>
        )}

        <div className={style.row}>
         <button type="button" className="btn btn-success " onClick={handleSubmit}>

           
                SUBMIT
              </button>
            <Button btnText="Close"  primary btnClick={onClose} />
            </div>
        </form>

       
        </div>

    </>
    );
};

export default AddTrip;
