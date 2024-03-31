import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function ViewCars() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/cars/getCars")
            .then(res => {
                console.log(res.data);
                setProduct(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Price</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Zone</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={index}>
                            <td>
                                <img src={item?.carImage} alt={item.carTitle} style={{ width: '100px', height: 'auto' }} />

                            </td>
                            <td>{item.carTitle}</td>
                            <td>{item.price}</td>
                            <td>{item.carType}</td>
                            <td>BOOKED</td>
                            <td>{item.zone}</td>
                            <td>
                                <button>Edit</button>
                                <button>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

