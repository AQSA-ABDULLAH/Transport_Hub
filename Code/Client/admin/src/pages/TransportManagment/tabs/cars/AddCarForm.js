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
        const storageRef = ref(storage, 'CarImages/' + file.name);
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


    return (
        <>
            <div style={overlayStyle}></div>
            <div className={style.popupForm}>
                <h3>Add New Car</h3>
                <div className={style.first_row}>
                    <div className={style.image}>
                        <label htmlFor="carImage">Car Image:</label>
                        <input
                            type="file"
                            className={style.form_image}
                            id="carImage"
                            name="carImage"
                            accept="image/png, image/jpeg"
                            onChange={(e) => setCarImage(e.target.files[0])}
                        />

                        <div className={style.image_view}>
                            {carImage ? (
                                <img
                                    src={URL.createObjectURL(carImage)}
                                    alt="icon"
                                />
                            ) : (
                                <div className={style.image_container}>
                                    <MdCloudUpload className={style.icon} />
                                    <p>Drag and drop or click here to upload image</p>
                                </div>
                            )}
                        </div>

                    </div>

                    <div>
                        <div>
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


                        <div className={style.side_row}>
                            <div>
                                <label htmlFor="carType">Car Type:</label>
                                <select
                                    id="carType"
                                    name="carType"
                                    value={carType}
                                    onChange={(e) => setCarType(e.target.value)}
                                >
                                    <option value="suv">SUV</option>
                                    <option value="civic">CIVIC</option>
                                    <option value="cng">Islamabad</option>
                                    <option value="electricity">Wah Cantt</option>
                                </select>
                            </div>

                            <div>
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
                        </div>

                        <div className={style.side_row}>
                            <div className={style.fileds}>
                                <label htmlFor="Zone" className="form-label">Zone:</label>
                                <select
                                    id="zone"
                                    name="zone"
                                    value={zone}
                                    onChange={(e) => setZone(e.target.value)}
                                >
                                    <option value="petrol">Karachi</option>
                                    <option value="diesel">Lahore</option>
                                    <option value="cng">Islamabad</option>
                                    <option value="electricity">Wah Cantt</option>
                                </select>
                            </div>
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
                        </div>
                    </div>
                </div>

                <div className={style.row}>
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
                    <div>
                        <label htmlFor="mileLimit" >Incl:</label>
                        <input
                            type="number"
                            id="mileLimit"
                            name="mileLimit"
                            value={mileLimit}
                            onChange={(e) => setMileLimit(e.target.value)}
                        />
                    </div>
                </div>



                <div className={style.row}>

                    <div>
                        <label htmlFor="transmissionType" className="form-label">Gearshift:</label>
                        <select
                            id="transmissionType"
                            name="transmissionType"
                            value={transmission}
                            onChange={(e) => setTransmission(e.target.value)}
                        >
                            <option value="manual">Manual</option>
                            <option value="auto">Automatic</option>
                        </select>
                    </div>


                    <div>
                        <label htmlFor="engineType" className="form-label">Engine Type:</label>
                        <select
                            id="engineType"
                            name="engineType"
                            value={engineType}
                            onChange={(e) => setEngineType(e.target.value)}
                        >
                            <option value="ev">Electric Vehicle</option>
                            <option value="hev">Hybrid Engine</option>
                            <option value="ice">Internal Combustion Engine</option>
                        </select>
                    </div>

                    <div>
                        <label htmlFor="fuelType" className="form-label">Fuel Type:</label>
                        <select
                            id="fuelType"
                            name="fuelType"
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                        >
                            <option value="petrol">Gasoline (Petrol)</option>
                            <option value="diesel">Diesel</option>
                            <option value="cng">CNG</option>
                            <option value="electricity">Electricity</option>
                        </select>
                    </div>
                </div>

                <div className={style.row}>
                    <div>
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

                    <div>
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

                    <div>
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

                <div className={style.row}>
                    <button onClick={onClose}>CANCLE</button>
                    <button type="button" onClick={handleSubmit}>
                        SUBMIT
                    </button>
                </div>
            </div>
        </>
    );
};

export default AddCarForm;