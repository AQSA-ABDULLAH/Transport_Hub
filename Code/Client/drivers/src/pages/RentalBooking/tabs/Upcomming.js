import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import styles from "./rental.module.css"

// import { getUserIdFromToken } from "../../../../redux/util/AxiosHeader";

export default function Upcomming() {
    const [product, setProduct] = useState([]);
    const [showShipmentForm, setShowShipmentForm] = useState(false);
    const [shipmentId, setShipmentId] = useState(null);
    // const userId = getUserIdFromToken();

    // Function to handle edit click
    const handleEditClick = (id) => {
        setShowShipmentForm(true);
        setShipmentId(id);
        console.log("show")
        // console.log(userId);
    };

    const handleClose = () => {
        setShowShipmentForm(false);
        setShipmentId(null);
    };

    // Function to format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
    };

    // GET CAR DATA
    useEffect(() => {
        axios.get("https://transport-hub-tawny.vercel.app/api/rental-booking/get-book-rental")
            .then(res => {
                console.log(res.data);
                const rentalBooking = res.data.data.filter(item => item.status === "pending");
                setProduct(rentalBooking);

            })
            .catch(err => {
                console.log(err);
            });
    }, []);


      // UPDATE SHIPMENT STATUS
  const updateStatus = (id) => {
    console.log(id)
    // Swal.fire({
    //   title: 'Are you sure?',
    //   text: "You want to cancel this Shipment!",
    //   icon: 'warning',
    //   showCancelButton: true,
    //   confirmButtonColor: '#3085d6',
    //   cancelButtonColor: '#d33',
    //   confirmButtonText: 'Canceled!'
    // })
    // .then((result) => {
    //   if (result.isConfirmed) {
    //     axios.patch(`https://transport-hub-tawny.vercel.app/api/shipment/update-shipment/${id}`, { status: "canceled" })
    //       .then(res => {
    //         Swal.fire(
    //           'Canceled!',
    //           'Shipment has been canceled.',
    //           'success'
    //         );
    //         // Update the product state to reflect the changes
    //         setProduct(prevProduct => prevProduct.map(item => {
    //           if (item._id === id) {
    //             return { ...item, status: "Canceled" };
    //           }
    //           return item;
    //         }));
    //         navigate("/manage-shipments?tab=Canceled")
    //       })
    //       .catch(err => {
    //         console.log(err);
    //         Swal.fire(
    //           'Error!',
    //           'Failed to cancel shipment.',
    //           'error'
    //         );
    //       });
    //   }
    // });
  }


    return (
        <div className={styles.shipment_container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Booking ID</th>
                           <th>Car Title</th>
                        <th>Pickup Location</th>
                        <th>Drop Location</th>
                        <th>Pickup Date</th>
                        <th>Drop Date</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {product.map((item, index) => (
                        <tr key={index}>
                            <td className={styles.shipmentID}>{item._id} <FaEdit /></td>

                            <td>ghdhfdg</td>
                        
                            <td>{item.pickupLocation}</td>
                            <td>{item.dropLocation}</td>
                            <td>{formatDate(item.pickupDate)}</td>
                            <td>{formatDate(item.dropDate)}</td>
                            <td>{item.totalPrice}</td>
                            <td>
                                <button className={styles.cancel_button} onClick={() => updateStatus(item._id)}>Start Rental</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

        </div>
    );
}