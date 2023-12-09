import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../../../components/atoms/buttons/Button';
import style from './addCarForm.module.css';

const AddTrip = ({ onClose }) => {
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

export default AddTrip;