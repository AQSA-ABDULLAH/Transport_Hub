import React, { useState } from 'react';
import Button from '../../atoms/buttons/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './addTrip.module.css';
 
const AddTrip = ({ onClose }) => {
    const [tripTitle, settripTitle] = useState("");
    const [location, setLocation] = useState("");
    const [images, setImages] = useState("");
    const [description, setDescription] = useState("");
    const [extraInformation, setExtraInformation] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const formData = { tripTitle, location, images, description, extraInformation, price };
          const response = await axios.post("http://localhost:5000/api/trips/addTrip", formData);
    
          // Assuming the server returns a success message in the response
          console.log('Data submitted successfully:', response.data.message);
    
          // You can also display a success message to the user
          alert('Data submitted successfully!');
    
          localStorage.setItem("user", JSON.stringify(response));
          navigate("/");
        }
        catch (error) {
          console.error('Error submitting form:', error.message, error.response);
    
          // You can display an error message to the user
          alert('Error submitting form. Please try again.');
        }
      };

    return (
        <div className={style.popupForm}>
            <h3>Add New Trip Form</h3>

            {/* Trip Title Input */}
            <div className={style.formField}>
                <label htmlFor="carTitle">Trip Title:</label>
                <input
                    type="text"
                    id="tripTitle"
                    name="tripTitle"
                    value={tripTitle}
                    onChange={(e) => settripTitle(e.target.value)}
                />
            </div>

            {/* Trip location Input */}
            <div className={style.formField}>
                <label htmlFor="location">Location:</label>
                <input
                    type="text"
                    id="location"
                    name="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
            </div>

             {/* Trip images Input */}
             <div className={style.formField}>
                <label htmlFor="location">Images</label>
                <input
                    type="text"
                    id="images"
                    name="images"
                    value={images}
                    onChange={(e) => setImages(e.target.value)}
                />
            </div>

             {/* Trip description Input */}
             <div className={style.formField}>
                <label htmlFor="description">Description</label>
                <input
                    type="text"
                    id="description"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>

            {/* Trip Extra Information Input */}
            <div className={style.formField}>
                <label htmlFor="extraInformation">Extra Information</label>
                <input
                    type="text"
                    id="extraInformation"
                    name="extraInformation"
                    value={extraInformation}
                    onChange={(e) => setExtraInformation(e.target.value)}
                />
            </div>


            {/* Price Input */}
            <div className={style.formField}>
                <label htmlFor="price">Price:</label>
                <input
                    type="text"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            {/* Add your other form fields, submit button, etc. */}
            <button type="button" className="btn btn-success" onClick={handleSubmit}>
                SUBMIT
              </button>
            <Button btnText="Close" primary btnClick={onClose} />
        </div>
    );
};

export default AddTrip;