import React, { useState } from 'react';
import axios from 'axios';
import Button from '../../../../components/atoms/buttons/Button';
import style from './addCarForm.module.css';

const AddCarForm = ({ onClose }) => {
    const [selectedFile, setselectedFile] = useState(null);
    const [formData, setFormData] = useState({
        carImage: null,
        carTitle: "",
        carType: "",
        numberOfSeats: "",
        bags: "",
        transmission: "",
        mileLimit: "",
        color: "",
        fuelType: "",
        engineType: "",
        price: "",
        zone: "",
        discount: "",
        startDate: "",
        endDate: ""
    });

    const handleInput = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleFile = async (event) => {
        const file = event.target.files[0];
        console.log(file);
        setselectedFile(file);
        setFormData({ ...formData, carImage: file });
    }

    const handleSubmit = async event => {
        event.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('carImage', selectedFile);
            for (const key in formData) {
                formDataToSend.append(key, formData[key]);
            }

            const res = await axios.post('http://localhost:5000/api/car/addCar', formDataToSend, {
                headers: { "Content-Type": "multipart/form-data" }
            });

            console.log(res.data);
        } catch (err) {
            console.log(err.response);

        }
        
    }

    return (
        <div className={style.popupForm}>
            <h3>Add New Car Form</h3>

            <form onSubmit={handleSubmit}>
                {/* Car Image Input */}
                <div className={style.formField}>
                    <label htmlFor="carImage">Car Image:</label>
                    <input
                        type="file"
                        id="carImage"
                        accept='.jpg, .png'
                        name="carImage"
                        onChange={handleFile}
                    />
                </div>

                {/* Car Title Input */}
                <div className={style.formField}>
                    <label htmlFor="carTitle">Car Title:</label>
                    <input
                        type="text"
                        id="carTitle"
                        name="carTitle"
                        value={formData.carTitle}
                        onChange={handleInput}
                    />
                </div>

                {/* Car Type Input */}
                <div className={style.formField}>
                    <label htmlFor="carType">Car Type:</label>
                    <select name="carType"
                        value={formData.carType}
                        onChange={handleInput}>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Coupe">Coupe</option>
                        <option value="FamilyCar">Family Car</option>
                        <option value="StationVeager">Station Veager</option>
                    </select>
                </div>

                {/* Number of Seats Input */}
                <div className={style.formField}>
                    <label htmlFor="numberOfSeats">Number of Seats:</label>
                    <input
                        type="number"
                        id="numberOfSeats"
                        name="numberOfSeats"
                        value={formData.numberOfSeats}
                        onChange={handleInput}
                    />
                </div>

                {/* Transmission Input */}
                <div className={style.formField}>
                    <label htmlFor="transmission">Transmission:</label>
                    <input
                        type="text"
                        id="transmission"
                        name="transmission"
                        value={formData.transmission}
                        onChange={handleInput}
                    />
                </div>

                {/* Bags Input */}
                <div className={style.formField}>
                    <label htmlFor="bags">Bags:</label>
                    <input
                        type="number"
                        id="bags"
                        name="bags"
                        value={formData.bags}
                        onChange={handleInput}
                    />
                </div>

                {/* Incl Input */}
                <div className={style.formField}>
                    <label htmlFor="incl">Incl:</label>
                    <input
                        type="text"
                        id="mileLimit"
                        name="mileLimit"
                        value={formData.mileLimit}
                        onChange={handleInput}
                    />
                </div>

                {/* Color Input */}
                <div className={style.formField}>
                    <label htmlFor="color">Color:</label>
                    <input
                        type="text"
                        id="color"
                        name="color"
                        value={formData.color}
                        onChange={handleInput}
                    />
                </div>

                {/* Fuel Type Input */}
                <div className={style.formField}>
                    <label htmlFor="fuelType">Fuel Type:</label>
                    <input
                        type="text"
                        id="fuelType"
                        name="fuelType"
                        value={formData.fuelType}
                        onChange={handleInput}
                    />
                </div>

                {/* Engine Type Input */}
                <div className={style.formField}>
                    <label htmlFor="engineType">Engine Type:</label>
                    <input
                        type="text"
                        id="engineType"
                        name="engineType"
                        value={formData.engineType}
                        onChange={handleInput}
                    />
                </div>

                {/* Price Input */}
                <div className={style.formField}>
                    <label htmlFor="price">Price:</label>
                    <input
                        type="text"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInput}
                    />
                </div>

                {/* Add your other form fields, submit button, etc. */}
                <Button btnText="Submit" primary />
                <Button btnText="Close" primary btnClick={onClose} />

            </form>
        </div>
    );
};

export default AddCarForm;




