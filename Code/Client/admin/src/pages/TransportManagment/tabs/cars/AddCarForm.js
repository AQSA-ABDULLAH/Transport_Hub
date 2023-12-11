import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '../../../../components/atoms/buttons/Button';
import style from './addCarForm.module.css';

const AddCarForm = ({ onClose }) => {
    const [carImage, setCarImage] = useState('');
    const [carTitle, setCarTitle] = useState('');
    const [carType, setCarType] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState('0');
    const [transmission, setTransmission] = useState('');
    const [bags, setBags] = useState('0');
    const [mileLimit, setMileLimit] = useState('');
    const [color, setColor] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [engineType, setEngineType] = useState('');
    const [price, setPrice] = useState('0');
    const [zone, setZone] = useState('');
    const [discount, setDiscount] = useState('0');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    console.log(carImage, 12)
    // const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(carImage, carTitle, carType, numberOfSeats, transmission, bags,
            mileLimit, color, fuelType, engineType, price, zone, discount, startDate, endDate)

        const formData = new FormData();
        formData.append('carImage', carImage);
        formData.append('carTitle', carTitle);
        formData.append('carType', carType);
        formData.append('numberOfSeats', numberOfSeats);
        formData.append('transmission', transmission);
        formData.append('bags', bags);
        formData.append('mileLimit', mileLimit);
        formData.append('color', color);
        formData.append('fuelType', fuelType);
        formData.append('engineType', engineType);
        formData.append('price', price);
        formData.append('zone', zone);
        formData.append('discount', discount);
        formData.append('startDate', startDate);
        formData.append('endDate', endDate);


        try {
            const response = await axios.post("http://localhost:5000/api/cars/addCar", formData, {
                headers: { 'Authorization': localStorage.getItem('token') }
            });

            console.log(response.data);

            if (response.data.status === "success") {
                alert("Data submitted successfully!");
                onClose();
            } else {
                alert("Failed to submit data. Please try again.");
            }

            if (response.data.code === 403 && response.data.message === "Token Expired") {
                localStorage.setItem('token', null);
            }
        } catch (error) {
            console.log(error);
            alert("An error occurred while submitting the data. Please try again.");
        }
    };
    

    return (
        <div className={style.popupForm}>
            <h3>Add New Car Form</h3>
            {/* Car Image Input */}
            <div className={style.formField}>
                <label htmlFor="carImage">Car Image:</label>
                <input
                    type="file"
                    id="carImage"
                    name="carImage"
                    accept="image/png, image/jpeg"
                    onChange={(e) => setCarImage(e.target.files[0])}
                />
            </div>

            {/* Car Title Input */}
            <div className={style.formField}>
                <label htmlFor="carTitle">Car Title:</label>
                <input
                    type="text"
                    id="carTitle"
                    name="carTitle"
                    value={carTitle}
                    onChange={(e) => setCarTitle(e.target.value)}
                />
            </div>

            {/* Car Type Input */}
            <div className={style.formField}>
                <label htmlFor="carType">Car Type:</label>
                <input
                    type="text"
                    id="carType"
                    name="carType"
                    value={carType}
                    onChange={(e) => setCarType(e.target.value)}
                />
            </div>

            {/* Number of Seats Input */}
            <div className={style.formField}>
                <label htmlFor="numberOfSeats">Number of Seats:</label>
                <input
                    type="number"
                    id="numberOfSeats"
                    name="numberOfSeats"
                    value={numberOfSeats}
                    onChange={(e) => setNumberOfSeats(e.target.value)}
                />
            </div>

            {/* Transmission Input */}
            <div className={style.formField}>
                <label htmlFor="transmission">Transmission:</label>
                <input
                    type="text"
                    id="transmission"
                    name="transmission"
                    value={transmission}
                    onChange={(e) => setTransmission(e.target.value)}
                />
            </div>

            {/* Bags Input */}
            <div className={style.formField}>
                <label htmlFor="bags">Bags:</label>
                <input
                    type="number"
                    id="bags"
                    name="bags"
                    value={bags}
                    onChange={(e) => setBags(e.target.value)}
                />
            </div>

            {/* mileLimit Input */}
            <div className={style.formField}>
                <label htmlFor="mileLimit">Incl:</label>
                <input
                    type="number"
                    id="mileLimit"
                    name="mileLimit"
                    value={mileLimit}
                    onChange={(e) => setMileLimit(e.target.value)}
                />
            </div>

            {/* Color Input */}
            <div className={style.formField}>
                <label htmlFor="color">Color:</label>
                <input
                    type="text"
                    id="color"
                    name="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                />
            </div>

            {/* Fuel Type Input */}
            <div className={style.formField}>
                <label htmlFor="fuelType">Fuel Type:</label>
                <input
                    type="text"
                    id="fuelType"
                    name="fuelType"
                    value={fuelType}
                    onChange={(e) => setFuelType(e.target.value)}
                />
            </div>

            {/* Engine Type Input */}
            <div className={style.formField}>
                <label htmlFor="engineType">Engine Type:</label>
                <input
                    type="text"
                    id="engineType"
                    name="engineType"
                    value={engineType}
                    onChange={(e) => setEngineType(e.target.value)}
                />
            </div>

            {/* Price Input */}
            <div className={style.formField}>
                <label htmlFor="price">Price:</label>
                <input
                    type="number"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            {/* Zone Input */}
            <div className={style.formField}>
                <label htmlFor="Zone">Zone:</label>
                <input
                    type="text"
                    id="zone"
                    name="zone"
                    value={zone}
                    onChange={(e) => setZone(e.target.value)}
                />
            </div>

            <div className={style.formField}>
                <label htmlFor="discount">Discount:</label>
                <input
                    type="number"
                    id="discount"
                    name="discount"
                    value={discount}
                    onChange={(e) => setDiscount(e.target.value)}
                />
            </div>

            <div className={style.formField}>
                <label htmlFor="startDate">Start Date:</label>
                <input
                    type="Date"
                    id="startDate"
                    name="startDate"
                    value={startDate}
                    onChange={(e) => setStartDate(e.target.value)}
                />
            </div>

            <div className={style.formField}>
                <label htmlFor="endDate">End Date:</label>
                <input
                    type="Date"
                    id="endDate"
                    name="endDate"
                    value={endDate}
                    onChange={(e) => setEndDate(e.target.value)}
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

export default AddCarForm;