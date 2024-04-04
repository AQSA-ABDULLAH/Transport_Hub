import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import style from '../../cars/add_car/addCarForm.module.css';
import { MdCloudUpload } from "react-icons/md";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../../../firebase";

const AddTruck = ({ onClose }) => {
    const [carImage, setCarImage] = useState('');
    const [carTitle, setCarTitle] = useState('');
    const [carType, setCarType] = useState('');
    const [numberOfSeats, setNumberOfSeats] = useState('');
    const [transmission, setTransmission] = useState('');
    const [bags, setBags] = useState('');
    const [mileLimit, setMileLimit] = useState('');
    const [color, setColor] = useState('');
    const [fuelType, setFuelType] = useState('');
    const [engineType, setEngineType] = useState('');
    const [price, setPrice] = useState('');
    const [zone, setZone] = useState('Select zone');
    const [discount, setDiscount] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [imgperc, setImagePrec] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState(false);
    const [product, setProduct] = useState([]);


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

        if (!carImage || !carTitle || !carType || !numberOfSeats || !transmission || !bags || !mileLimit ||
            !color || !fuelType || !engineType || !price || !zone) {
            setError(true);
            return false;
          }

          if (isNaN(price || mileLimit || discount)) {
            setError(true);
            return false; 
          }

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

            if (response.data.status === "success") {
                Swal.fire(
                    'Add New Car!',
                    'You have been added new car succesfully.',
                    'success'
                  );
                  onClose();
            } else {
                alert("Failed to submit data. Please try again.");
            }

        } catch (error) {
            console.log(error);
            alert("An error occurred while submitting the data. Please try again.");
        }
    };

    useEffect(() => {
        axios.get("http://localhost:5000/api/zone/get-zone")
            .then(res => {
                console.log(res.data);
                setProduct(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);


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
                        {error && !carImage && <span className={style.text_danger}>Plz Select Any Image</span>}

                    </div>

                    <div>
                        <div className={style.input_field}>
                            <label htmlFor="carTitle" className="form-label">Car Title:</label>
                            <input
                                type="text"
                                placeholder="Car Name/Model"
                                id="carTitle"
                                name="carTitle"
                                value={carTitle}
                                onChange={(e) => setCarTitle(e.target.value)}
                            />
                            {error && !carTitle && <span className={style.text_danger}>This field is required</span>}
                        </div>


                        <div className={style.side_row}>
                            <div className={style.input_field}>
                                <label htmlFor="carType">Car Type:</label>
                                <select
                                    id="carType"
                                    name="carType"
                                    value={carType}
                                    onChange={(e) => setCarType(e.target.value)}
                                >
                                    <option value="car_type" disabled selected>Select car type</option>
                                    <option value="suv">SUV</option>
                                    <option value="civic">CIVIC</option>
                                    <option value="cng">Islamabad</option>
                                    <option value="electricity">Wah Cantt</option>
                                </select>
                                {error && !carType && <span className={style.text_danger}>This field is required</span>}
                            </div>


                            <div className={style.input_field}>
                                <label>Color:</label>
                                <input
                                    type="text"
                                    placeholder="e.g. Black"
                                    id="color"
                                    name="color"
                                    value={color}
                                    onChange={(e) => setColor(e.target.value)}
                                />
                                {error && !color && <span className={style.text_danger}>This field is required</span>}
                            </div>
                        </div>

                        <div className={style.side_row}>
                            <div className={style.input_field}>
                                <label>Zone:</label>
                                <select
                                    id="zone"
                                    name="zone"
                                    value={zone}
                                    onChange={(e) => setZone(e.target.value)}
                                >
                                     
                                    {product.map((item, index) =>
                                        <option key={index} value="">{item.zone}</option>
                                    )}
                                </select>
                                {error && !zone && <span className={style.text_danger}>This field is required</span>}
                            </div>


                            <div className={style.input_field}>
                                <label>Price <span>(per/hour)</span>:</label>
                                <input
                                    type="text"
                                    placeholder="e.g. 450"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                />
                                {error && !price && <span className={style.text_danger}>This field is required</span>}
                                {error && price && isNaN(price) && <span className={style.text_danger}>Price must be a number</span>}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.input_field}>
                        <label>Number of Seats:</label>
                        <input
                            type="number"
                            placeholder="Enter No. of seats"
                            name="numberOfSeats"
                            value={numberOfSeats}
                            onChange={(e) => setNumberOfSeats(e.target.value)}
                        />
                        {error && !numberOfSeats && <span className={style.text_danger}>This field is required</span>}
                    </div>
                    <div className={style.input_field}>
                        <label >Bags:</label>
                        <input
                            type="number"
                            placeholder="Enter No. of Bags"
                            name="bags"
                            value={bags}
                            onChange={(e) => setBags(e.target.value)}
                        />
                        {error && !bags && <span className={style.text_danger}>This field is required</span>}
                    </div>
                    <div className={style.input_field}>
                        <label>MileLimit <span>(per/day)</span>:</label>
                        <input
                            type="text"
                            placeholder="e.g. 200"
                            name="mileLimit"
                            value={mileLimit}
                            onChange={(e) => setMileLimit(e.target.value)}
                        />
                        {error && !mileLimit && <span className={style.text_danger}>This field is required</span>}
                        {error && mileLimit && isNaN(mileLimit) && <span className={style.text_danger}>MileLimit must be a number</span>}
                    </div>
                </div>



                <div className={style.row}>

                    <div className={style.input_field}>
                        <label>Gearshift:</label>
                        <select
                            id="transmissionType"
                            name="transmissionType"
                            value={transmission}
                            onChange={(e) => setTransmission(e.target.value)}
                        >
                            <option value="manual">Manual</option>
                            <option value="auto">Automatic</option>
                        </select>
                        {error && !transmission && <span className={style.text_danger}>This field is required</span>}
                    </div>


                    <div className={style.input_field}>
                        <label >Engine Type:</label>
                        <select
                            id="engineType"
                            name="engineType"
                            value={engineType}
                            onChange={(e) => setEngineType(e.target.value)}
                        >
                            <option disabled>Select Engine Type</option>
                            <option value="ev">Electric Vehicle</option>
                            <option value="hev">Hybrid Engine</option>
                            <option value="ice">Internal Combustion Engine</option>
                        </select>
                        {error && !engineType && <span className={style.text_danger}>This field is required</span>}
                    </div>

                    <div className={style.input_field}>
                        <label>Fuel Type:</label>
                        <select
                            id="fuelType"
                            name="fuelType"
                            value={fuelType}
                            onChange={(e) => setFuelType(e.target.value)}
                        >
                            <option disabled>Select Fuel Type</option>
                            <option value="petrol">Gasoline (Petrol)</option>
                            <option value="diesel">Diesel</option>
                            <option value="cng">CNG</option>
                            <option value="electricity">Electricity</option>
                        </select>
                        {error && !fuelType && <span className={style.text_danger}>This field is required</span>}
                    </div>
                </div>

                <div className={style.row}>
                    <div className={style.input_field}>
                        <label>Discount <span>(per/hour)</span>:</label>
                        <input
                            type="text"
                            name="discount"
                            placeholder="e.g. 250"
                            value={discount}
                            onChange={(e) => setDiscount(e.target.value)}
                        />
                         {error && discount && isNaN(discount) && <span className={style.text_danger}>This field must be a number</span>}
                    </div>

                    <div className={style.input_field}>
                        <label>Start Date:</label>
                        <input
                            type="Date"
                            className="form-control"
                            id="startDate"
                            name="startDate"
                            value={startDate}
                            onChange={(e) => setStartDate(e.target.value)}
                        />
                    </div>

                    <div className={style.input_field}>
                        <label>End Date:</label>
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

export default AddTruck;