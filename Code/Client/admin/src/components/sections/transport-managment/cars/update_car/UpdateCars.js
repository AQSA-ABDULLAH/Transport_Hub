// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import style from '../add_car/addCarForm.module.css';
// import { MdCloudUpload } from "react-icons/md";
// import { useParams } from 'react-router-dom';

// const UpdateCar = ({ onClose }) => {
//     const [error, setError] = useState(false);
//     const [data, setData] = useState([]);

//     // const [data, setData] = useState({
//     //     carImage: "", carTitle: "", carType: "", numberOfSeats: "", transmission: "", bags: "", mileLimit: "", color: "", fuelType: "", engineType: "", price: "", zone: "", discount: "", startDate: "", endDate: "", imageUrl: "",
//     // });


//     const params = useParams();

//     // GET CAR DATA BY ID
//     const getCarData = async () => {
//         axios.get(`https://transport-hub-tawny.vercel.app/api/cars/updateCar/${params.id}`)
//             .then(res => {
//                 console.log(res.data);
//                 setData(res.data.data);
//             })
//             .catch(err => {
//                 console.log(err);
//             });
//     }

//     useEffect(() => {
//         getCarData();
//     }, []);


//     const overlayStyle = {
//         position: 'fixed',
//         top: '0',
//         left: '0',
//         width: '100%',
//         height: '100%',
//         backgroundColor: 'rgba(0, 0, 0, 0.3)',
//         zIndex: '999',
//         backdropFilter: 'blur(1px)',
//     };


//     return (
//         <>
//             <div style={overlayStyle}></div>
//             <div className={style.popupForm}>
//                 <h3>Add New Car</h3>
//                 <div className={style.first_row}>
//                     <div className={style.image}>
//                         <label htmlFor="carImage">Car Image:</label>
//                         <input
//                             type="file"
//                             className={style.form_image}
//                             id="carImage"
//                             name="carImage"
//                             value={data.carImage}
//                             accept="image/png, image/jpeg"
//                         />

//                         <div className={style.image_view}>
//                             {/* {carImage ? (
//                                 <img
//                                     src={URL.createObjectURL(carImage)}
//                                     alt="icon"
//                                 />
//                             ) : (
//                                 <div className={style.image_container}>
//                                     <MdCloudUpload className={style.icon} />
//                                     <p>Drag and drop or click here to upload image</p>
//                                 </div>
//                             )} */}

//                             <div className={style.image_container}>
//                                 <MdCloudUpload className={style.icon} />
//                                 <p>Drag and drop or click here to upload image</p>
//                             </div>
//                         </div>
//                         {/* {error && !carImage && <span className={style.text_danger}>Plz Select Any Image</span>} */}

//                     </div>

//                     <div>
//                         <div className={style.input_field}>
//                             <label htmlFor="carTitle" >Car Title:</label>
//                             <input
//                                 type="text"
//                                 placeholder="Car Name/Model"
//                                 id="carTitle"
//                                 name="carTitle"
//                                 value={data.carTitle}

//                             />
//                             {/* {error && !carTitle && <span className={style.text_danger}>This field is required</span>} */}
//                         </div>


//                         <div className={style.side_row}>
//                             <div className={style.input_field}>
//                                 <label htmlFor="carType">Car Type:</label>
//                                 <select
//                                     id="carType"
//                                     name="carType"
//                                     value={data.carType}

//                                 >
//                                     <option value="car_type" disabled selected>Select car type</option>
//                                     <option value="suv">SUV</option>
//                                     <option value="civic">CIVIC</option>
//                                     <option value="cng">Islamabad</option>
//                                     <option value="electricity">Wah Cantt</option>
//                                 </select>
//                                 {/* {error && !carType && <span className={style.text_danger}>This field is required</span>} */}
//                             </div>


//                             <div className={style.input_field}>
//                                 <label>Color:</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g. Black"
//                                     id="color"
//                                     name="color"
//                                     value={data.color}

//                                 />
//                                 {/* {error && !color && <span className={style.text_danger}>This field is required</span>} */}
//                             </div>
//                         </div>

//                         <div className={style.side_row}>
//                             <div className={style.input_field}>
//                                 <label>Zone:</label>
//                                 <select
//                                     id="zone"
//                                     name="zone"
//                                     value={data.zone}

//                                 >

//                                     {/* {product.map((item, index) =>
//                                         <option key={index} value="">{item.zone}</option>
//                                     )} */}
//                                 </select>
//                                 {/* {error && !zone && <span className={style.text_danger}>This field is required</span>} */}
//                             </div>


//                             <div className={style.input_field}>
//                                 <label>Price <span>(per/hour)</span>:</label>
//                                 <input
//                                     type="text"
//                                     placeholder="e.g. 450"
//                                     name="price"
//                                     value={data.price}

//                                 />
//                                 {/* {error && !price && <span className={style.text_danger}>This field is required</span>}
//                                 {error && price && isNaN(price) && <span className={style.text_danger}>Price must be a number</span>} */}
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <div className={style.row}>
//                     <div className={style.input_field}>
//                         <label>Number of Seats:</label>
//                         <input
//                             type="number"
//                             placeholder="Enter No. of seats"
//                             name="numberOfSeats"
//                             value={data.numberOfSeats}

//                         />
//                         {/* {error && !numberOfSeats && <span className={style.text_danger}>This field is required</span>} */}
//                     </div>
//                     <div className={style.input_field}>
//                         <label >Bags:</label>
//                         <input
//                             type="number"
//                             placeholder="Enter No. of Bags"
//                             name="bags"
//                             value={data.bags}

//                         />
//                         {/* {error && !bags && <span className={style.text_danger}>This field is required</span>} */}
//                     </div>
//                     <div className={style.input_field}>
//                         <label>MileLimit <span>(per/day)</span>:</label>
//                         <input
//                             type="text"
//                             placeholder="e.g. 200"
//                             name="mileLimit"
//                             value={data.mileLimit}

//                         />
//                         {/* {error && !mileLimit && <span className={style.text_danger}>This field is required</span>}
//                         {error && mileLimit && isNaN(mileLimit) && <span className={style.text_danger}>MileLimit must be a number</span>} */}
//                     </div>
//                 </div>



//                 <div className={style.row}>

//                     <div className={style.input_field}>
//                         <label>Gearshift:</label>
//                         <select
//                             id="transmissionType"
//                             name="transmissionType"
//                             value={data.transmission}

//                         >
//                             <option value="manual">Manual</option>
//                             <option value="auto">Automatic</option>
//                         </select>
//                         {/* {error && !transmission && <span className={style.text_danger}>This field is required</span>} */}
//                     </div>


//                     <div className={style.input_field}>
//                         <label >Engine Type:</label>
//                         <select
//                             id="engineType"
//                             name="engineType"
//                             value={data.engineType}

//                         >
//                             <option disabled>Select Engine Type</option>
//                             <option value="ev">Electric Vehicle</option>
//                             <option value="hev">Hybrid Engine</option>
//                             <option value="ice">Internal Combustion Engine</option>
//                         </select>
//                         {/* {error && !engineType && <span className={style.text_danger}>This field is required</span>} */}
//                     </div>

//                     <div className={style.input_field}>
//                         <label>Fuel Type:</label>
//                         <select
//                             id="fuelType"
//                             name="fuelType"
//                             value={data.fuelType}

//                         >
//                             <option disabled>Select Fuel Type</option>
//                             <option value="petrol">Gasoline (Petrol)</option>
//                             <option value="diesel">Diesel</option>
//                             <option value="cng">CNG</option>
//                             <option value="electricity">Electricity</option>
//                         </select>
//                         {/* {error && !fuelType && <span className={style.text_danger}>This field is required</span>} */}
//                     </div>
//                 </div>

//                 <div className={style.row}>
//                     <div className={style.input_field}>
//                         <label>Discount <span>(per/hour)</span>:</label>
//                         <input
//                             type="text"
//                             name="discount"
//                             placeholder="e.g. 250"
//                             value={data.discount}

//                         />
//                         {/* {error && discount && isNaN(discount) && <span className={style.text_danger}>This field must be a number</span>} */}
//                     </div>

//                     <div className={style.input_field}>
//                         <label>Start Date:</label>
//                         <input
//                             type="Date"
//                             className="form-control"
//                             id="startDate"
//                             name="startDate"
//                             value={data.startDate}

//                         />
//                     </div>

//                     <div className={style.input_field}>
//                         <label>End Date:</label>
//                         <input
//                             type="Date"
//                             className="form-control"
//                             id="endDate"
//                             name="endDate"
//                             value={data.endDate}

//                         />
//                     </div>
//                 </div>

//                 <div className={style.row}>
//                     <button onClick={onClose}>CANCLE</button>
//                     <button type="button">
//                         UPDATE
//                     </button>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default UpdateCar;