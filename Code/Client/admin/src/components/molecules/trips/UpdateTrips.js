import React,{useState} from 'react'
import Button from '../../atoms/buttons/Button';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './addTrip.module.css';
 

export const UpdateTrips = ({ onClose }) => {
    const [tripTitle, settripTitle] = useState("");
    const [location, setLocation] = useState("");
    const [imageFile, setImageFile] = useState(null); // Updated state for image file
    const [description, setDescription] = useState("");
    const [extraInformation, setExtraInformation] = useState("");
    const [price, setPrice] = useState("");
    const navigate = useNavigate();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
        }
    };

    const handleSubmit = () => {
        // Perform data validation
        if (!tripTitle || !location || !imageFile || !description || !extraInformation || !price) {
            // Display an alert if any of the required fields is empty
            alert('Please fill in all required fields.');
            return;
        }
    }
    return (
        <div>
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
                <label htmlFor="images">Images</label>
                <input
                    type="file" // Change type to 'file'
                    id="images"
                    name="images"
                    onChange={handleImageChange}
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
        </div>
    )
}
