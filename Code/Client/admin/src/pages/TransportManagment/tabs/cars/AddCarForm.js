import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/atoms/buttons/Button';
import style from './addCarForm.module.css';

const AddCarForm = ({ onClose }) => {
    const [carTitle, setCarTitle] = useState('');
    const [carImage, setCarImage] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState('');
    const [carType, setCarType] = useState('');
    const [transmission, setTransmission] = useState('');
    const [bags, setBags] = useState('');
    const [incl, setIncl] = useState('');
    const [color, setColor] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [engineType, setEngineType] = useState('');
    const [price, setPrice] = useState('');
    const navigate = useNavigate();

    const handleSubmit = () => {
        const formData = new FormData();
        formData.append('carTitle', carTitle)
        formData.append('carImage', carImage)
        formData.append('numberOfSeats', numberOfSeats)
        formData.append('carType', carType)
        formData.append('transmission', transmission)
        formData.append('bags', bags)
        formData.append('incl', incl)
        formData.append('color', color)
        formData.append('fuelType', fuelType)
        formData.append('engineType', engineType)
        formData.append('price', price)

        axios.post('http://localhost:5000/add_product', formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err, "err")
        })

        navigate('/transport-managment');
        onClose();
    };

    return (
        <div className={style.popupForm}>
            <h3>Add New Car Form</h3>

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

            {/* Car Image Input */}
            <div className={style.formField}>
                <label htmlFor="carImage">Car Image URL:</label>
                <input
                    type="text"
                    id="carImage"
                    name="carImage"
                    value={carImage}
                    onChange={(e) => setCarImage(e.target.value)}
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
                    type="text"
                    id="bags"
                    name="bags"
                    value={bags}
                    onChange={(e) => setBags(e.target.value)}
                />
            </div>

            {/* Incl Input */}
            <div className={style.formField}>
                <label htmlFor="incl">Incl:</label>
                <input
                    type="text"
                    id="incl"
                    name="incl"
                    value={incl}
                    onChange={(e) => setIncl(e.target.value)}
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
                    type="text"
                    id="price"
                    name="price"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </div>

            {/* Add your other form fields, submit button, etc. */}
            <Button btnText="Submit" primary onClick={handleSubmit} />
            <Button btnText="Close" primary btnClick={onClose} />
        </div>
    );
};

export default AddCarForm;



