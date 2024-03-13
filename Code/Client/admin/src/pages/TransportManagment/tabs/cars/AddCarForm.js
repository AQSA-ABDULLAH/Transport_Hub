import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import style from './addCarForm.module.css';
import { MdCloudUpload } from "react-icons/md";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../../firebase";

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
    const [imgperc, setImagePrec] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        carImage && uploadFile(carImage, "imageUrl");
      }, [carImage]);

    // FIREBASE SETUP HERE
    const uploadFile = (file) => {
        const storage = getStorage(app);
        const storageRef = ref(storage, 'CarImage/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setImagePrec(progress); // Update image upload progress
            },
            (error) => {
                console.error('Error uploading file:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageUrl(downloadURL); // Update imageUrl directly
                    console.log('File available at', downloadURL);
                });


            }
        );
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(carImage, carTitle, carType, numberOfSeats, transmission, bags,
            mileLimit, color, fuelType, engineType, price, zone, discount, startDate, endDate)

        const formData = new FormData();
        formData.append('carImage', imageUrl);
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

    const closeButtonStyle = {
        cursor: 'pointer',
        position: 'absolute',
        top: '2.4rem',
        right: '3.7rem',
        fontSize: '3rem',
    };


    return (
        <>
            <div style={overlayStyle} onClick={onClose}></div>
            <div className={`${style.popupForm} container`}>
                <div style={closeButtonStyle} onClick={onClose}>
                    &times;
                </div>
                <h3 className={style.heading}>Add New Car</h3>

                <div className={style.image}>
                    {/* Car Image Input */}
                    <div className={style.fields}>
                        <label htmlFor="carImage" className="form-label">Car Image:</label> {imgperc > 0 && "Uploading " + imgperc + "%"}
                        <div className="file-input-container" style={{ position: 'relative', width: '100%', height: '100%' }}>
                            <input
                                type="file"
                                className={style.form_image}
                                id="carImage"
                                name="carImage"
                                accept="image/png, image/jpeg"
                                onChange={(e) => setCarImage(e.target.files[0])}
                            />
                            <div className={style.margin}>
                                <div className={style.file_input}>
                                    <MdCloudUpload className={style.icon} />
                                    <span style={{ fontSize: '12px' }}>Click or drag to upload</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className={style.row}>
                    {/* Car Title Input */}
                    <div className={style.fileds}>
                        <label htmlFor="carTitle" className="form-label">Car Title:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="carTitle"
                            name="carTitle"
                            value={carTitle}
                            onChange={(e) => setCarTitle(e.target.value)}
                        />
                    </div>

                    {/* Car Type Input */}
                    <div className={style.fileds}>
                        <label htmlFor="carType">Car Type:</label>
                        <input
                            type="text"
                            id="carType"
                            name="carType"
                            value={carType}
                            onChange={(e) => setCarType(e.target.value)}
                        />
                    </div>


                </div>

                <div className={style.row}>
                    {/* Number of Seats Input */}
                    <div className={style.fileds}>
                        <label htmlFor="numberOfSeats" className="form-label">Number of Seats:</label>
                        <input
                            type="number"
                            id="numberOfSeats"
                            name="numberOfSeats"
                            value={numberOfSeats}
                            onChange={(e) => setNumberOfSeats(e.target.value)}
                        />
                    </div>
                    {/* Bags Input */}
                    <div className={style.fileds}>
                        <label htmlFor="bags" className="form-label">Bags:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="bags"
                            name="bags"
                            value={bags}
                            onChange={(e) => setBags(e.target.value)}
                        />
                    </div>
                </div>

                <div className={style.row}>

                </div>

                <div className={style.row}>
                    {/* Transmission Input */}
                    <div className="mb-3">
                        <label htmlFor="transmission" className="form-label">Transmission:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="transmission"
                            name="transmission"
                            value={transmission}
                            onChange={(e) => setTransmission(e.target.value)}
                        />
                    </div>

                    {/* mileLimit Input */}
                    <div className="mb-3">
                        <label htmlFor="mileLimit" className="form-label">Incl:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="mileLimit"
                            name="mileLimit"
                            value={mileLimit}
                            onChange={(e) => setMileLimit(e.target.value)}
                        />
                    </div>
                </div>

                <div className={style.row}>
                    {/* Fuel Type Input */}
                    <div className="mb-3">
                        <label htmlFor="fuelType" className="form-label">Fuel Type:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="fuelType"
                            name="fuelType"
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                        />
                    </div>

                    {/* Engine Type Input */}
                    <div className="mb-3">
                        <label htmlFor="engineType" className="form-label">Engine Type:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="engineType"
                            name="engineType"
                            value={engineType}
                            onChange={(e) => setEngineType(e.target.value)}
                        />
                    </div>
                </div>


                <div className={style.row}>

                    {/* Car Color */}
                    <div className={style.fileds}>
                        <label htmlFor="color" className="form-label">Color:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="color"
                            name="color"
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                        />
                    </div>

                    {/* Zone Input */}
                    <div className={style.fileds}>
                        <label htmlFor="Zone" className="form-label">Zone:</label>
                        <input
                            type="text"
                            className="form-control"
                            id="zone"
                            name="zone"
                            value={zone}
                            onChange={(e) => setZone(e.target.value)}
                        />
                    </div>
                </div>

                <div className={style.row}>
                    {/* Price Input */}
                    <div className="mb-3">
                        <label htmlFor="price" className="form-label">Price:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                    </div>

                    <div className={style.fileds}>
                        <label htmlFor="discount" className="form-label">Discount:</label>
                        <input
                            type="number"
                            className="form-control"
                            id="discount"
                            name="discount"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                    </div>

                </div>

                <div className={style.row}>
                    <div className={style.fileds}>
                        <label htmlFor="startDate" className="form-label">Start Date:</label>
                        <input
                            type="Date"
                            className="form-control"
                            id="startDate"
                            name="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <div className={style.fileds}>
                        <label htmlFor="endDate" className="form-label">End Date:</label>
                        <input
                            type="Date"
                            className="form-control"
                            id="endDate"
                            name="endDate"
                            value={endDate}
                            onChange={(e) => setEndDate(e.target.value)}
                        />
                    </div>
                </div>

                {/* Add your other form fields, submit button, etc. */}
                <button type="button" className="btn btn-success" onClick={handleSubmit}>
                    SUBMIT
                </button>
            </div>
        </>
    );
};

export default AddCarForm;