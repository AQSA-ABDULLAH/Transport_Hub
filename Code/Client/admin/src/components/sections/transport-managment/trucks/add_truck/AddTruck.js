import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from 'sweetalert2';
import style from '../../cars/add_car/addCarForm.module.css';
import { MdCloudUpload } from "react-icons/md";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../../../firebase";

const AddTruck = ({ onClose }) => {
    const [truckImage, setTruckImage] = useState('');
    const [truckTitle, setTruckTitle] = useState('');
    const [truckMode, setTruckMode] = useState('');
    const [vechicalType, setVechicalType] = useState('');
    const [selectedEquipment, setSelectedEquipment] = useState('');
    const [equipmentLength, setEquipmentLength] = useState('');
    const [dimensions, setDimensions] = useState('');
    const [zone, setZone] = useState('Select zone');
    const [price, setPrice] = useState('');
    const [mileLimit, setMileLimit] = useState('');
    const [imgperc, setImagePrec] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [error, setError] = useState(false);
    const [product, setProduct] = useState([]);

    const [selectedMode, setSelectedMode] = useState();

    // Handle mode change event
    const handleModeChange = (event) => {
        const mode = event.target.value;
        setTruckMode(mode);
        setSelectedMode(mode);
    };


    // Handle mode change event
    const handleEquipmentChange = (event) => {
        const equipment = event.target.value;
        setSelectedEquipment(equipment);
    };

    useEffect(() => {
        truckImage && uploadFile(truckImage, "imageUrl");
    }, [truckImage]);

    // FIREBASE SETUP HERE
    const uploadFile = (file) => {
        const storage = getStorage(app);
        const storageRef = ref(storage, 'TruckImages/' + file.name);
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
        

        // if ( !truckTitle || !truckMode || !vechicalType || !selectedEquipment || !equipmentLength 
        //     ||!dimensions || !price || !zone) {
        //     setError(true);
        //     return false;
        // }
        

        if (isNaN(price)) {
            setError(true);
            return false;
        }

        const formData = new FormData();
        formData.append('truckImage', imageUrl);
        formData.append('truckTitle', truckTitle);
        formData.append('truckMode', truckMode);
        formData.append('vechicalType', vechicalType);
        formData.append('selectedEquipment', selectedEquipment);
        formData.append('equipmentLength', equipmentLength);
        formData.append('dimensions', dimensions);
        formData.append('price', price);
        formData.append('zone', zone);

        try {
            console.log("abc")
            const response = await axios.post("http://localhost:5000/api/trucks/addTruck", formData, {
                headers: { 'Authorization': localStorage.getItem('token') }
            });

            if (response.data.status === "success") {
                Swal.fire(
                    'Add New Truck!',
                    'You have been added new car succesfully.',
                    'success'
                );
                onClose();
            } else {
                alert("Failed to submit data. Please try again.");
            }

        } catch (error) {
            console.log(error);
            console.log("hjb")
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
            <div className={`${style.popupForm} ${style.truck_form}`}>

                <h3>Add New Truck</h3>
                <div className={style.truck_row}>
                    <div className={style.image}>
                        <label>Truck Image:</label>
                        <input
                            type="file"
                            className={style.form_image}
                            name="truckImage"
                            accept="image/png, image/jpeg"
                            onChange={(e) => setTruckImage(e.target.files[0])}
                        />

                        <div className={style.image_view}>
                            {truckImage ? (
                                <img
                                    src={URL.createObjectURL(truckImage)}
                                    alt="icon"
                                />
                            ) : (
                                <div className={style.image_container}>
                                    <MdCloudUpload className={style.icon} />
                                    <p>Drag and drop or click here to upload image</p>
                                </div>
                            )}
                        </div>
                        {/* {error && !truckImage && <span className={style.text_danger}>Plz Select Any Image</span>} */}

                    </div>

                    <div>
                        <div className={style.input_field}>
                            <label>Truck Title:</label>
                            <input
                                type="text"
                                placeholder="Truck Name/Model"
                                id="truckTitle"
                                name="truckTitle"
                                value={truckTitle}
                                onChange={(e) => setTruckTitle(e.target.value)}
                            />
                            {error && !truckTitle && <span className={style.text_danger}>This field is required</span>}
                        </div>

                        <div className={style.input_field}>
                            <label>Truck Mode:</label>

                            <select id="mode" value={truckMode} onChange={handleModeChange}>
                                <option value="select_option" disabled selected>Select Mode</option>
                                <option value="LTL">LTL (Less than Truckload)</option>
                                <option value="FTL">FTL (Full Truckload)</option>
                                <option value="flatbed">Flatbed</option>
                            </select>
                            {/* {error && !truckMode && <span className={style.text_danger}>This field is required</span>} */}
                        </div>

                        <div className={style.input_field}>
                            <label>Zone:</label>
                            <select
                                id="zone"
                                name="zone"
                                value={zone}
                                onChange={(e) => setZone(e.target.value)}
                            >

                                {product.map((item, index) =>
                                    <option key={index} value={item.zone}>{item.zone}</option>
                                )}
                            </select>
                            {/* {error && !zone && <span className={style.text_danger}>This field is required</span>} */}
                        </div>




                    </div>
                </div>

                <div className={style.truck_selection}>
                    {selectedMode === 'LTL' && (
                        <div>
                            <label>Vechical Type</label>
                            <select
                                value={vechicalType}
                                onChange={(e) => setVechicalType(e.target.value)}
                            >
                                <option value="select_option" disabled selected>Select Vechical Type</option>
                                <option value="mazda">Mazda</option>
                                <option value="shehzore">Shehzore</option>
                                <option value="pickup">Pickup</option>
                            </select>
                            {/* {error && !vechicalType && <span className={style.text_danger}>This field is required</span>} */}
                        </div>

                    )}

                    {selectedMode === 'FTL' && (
                        <div className={style.truck_selection}>
                            <div>
                                <label htmlFor="equipment">Equipment</label>
                                <select
                                    id="equipment"
                                    className={style.length}
                                    value={selectedEquipment}
                                    onChange={handleEquipmentChange}
                                >
                                    <option value="select_option" disabled selected>Select Equipment</option>
                                    <option value="truck">Truck</option>
                                    <option value="reefer">Reefer</option>
                                    <option value="tanker">Tanker</option>
                                    <option value="container">Container</option>
                                </select>
                                {/* {error && !selectedEquipment && <span className={style.text_danger}>This field is required</span>} */}
                            </div>

                            <div>
                                {selectedEquipment === 'truck' &&
                                    <div>
                                        <label>Equipment Length</label>
                                        <select
                                            id="equipment_type"
                                            className={style.length}
                                            value={equipmentLength}
                                            onChange={(e) => setEquipmentLength(e.target.value)}
                                        >
                                            <option value="small">48'</option>
                                            <option value="large">53'</option>
                                        </select>
                                    </div>

                                }

                                {selectedEquipment === 'reefer' &&
                                    <div>
                                        <label htmlFor="equipment_type">Equipment Length</label>
                                        <select
                                            id="equipment_type"
                                            className={style.length}
                                            value={equipmentLength}
                                            onChange={(e) => setEquipmentLength(e.target.value)}
                                        >
                                            <option value="small">45'</option>
                                            <option value="large">50'</option>
                                        </select>
                                    </div>
                                }

                                {selectedEquipment === 'tanker' &&
                                    <div>
                                        <label htmlFor="equipment_type">Equipment Length</label>
                                        <select
                                            id="equipment_type"
                                            className={style.length}
                                            value={equipmentLength}
                                            onChange={(e) => setEquipmentLength(e.target.value)}
                                        >
                                            <option value="small">45'</option>
                                            <option value="large">52'</option>
                                        </select>
                                    </div>
                                }

                                {selectedEquipment === 'container' &&
                                    <div>
                                        <label htmlFor="equipment_type">Container Size</label>
                                        <select
                                            id="equipment_type"
                                            className={style.length}
                                            value={equipmentLength}
                                            onChange={(e) => setEquipmentLength(e.target.value)}
                                        >
                                            <option value="small">20'</option>
                                            <option value="medium">40'</option>
                                            <option value="large">45'</option>
                                            <option value="very_large">53'</option>
                                        </select>
                                    </div>
                                }
                            </div>
                        </div>

                    )}

                    {selectedMode === 'flatbed' && (
                        <div>
                            <label htmlFor="dimensions">Dimensions</label>
                            <select 
                            id="dimensions" 
                            className={style.length}
                            value={dimensions}
                            onChange={(e) => setDimensions(e.target.value)}
                            >
                                <option value="first">45', 10'</option>
                                <option value="second">45', 12'</option>
                                <option value="third">50', 10'</option>
                                <option value="fourth">50', 12'</option>
                                <option value="fifth">50', 15'</option>
                                <option value="sixth">53', 15'</option>
                            </select>
                        </div>


                    )}

                    <div className={style.input_field}>
                        <label>Price <span>(per/hour)</span>:</label>
                        <input
                            type="text"
                            placeholder="e.g. 450"
                            name="price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                        />
                        {/* {error && !price && <span className={style.text_danger}>This field is required</span>} */}
                        {error && price && isNaN(price) && <span className={style.text_danger}>Price must be a number</span>}
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