import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import Swal from 'sweetalert2';
import { useNavigate } from "react-router-dom";
import styles from "../../../../components/sections/transport-managment/cars/view_car/viewcars.module.css";

export default function Qoute() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);

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
    axios.get("http://localhost:5000/api/shipment/get-shipment")
      .then(res => {
        console.log(res.data);
        // Filter shipments with status "booked by admin"
        const bookedShipments = res.data.data.filter(item => item.status === "booked by admin");
        setProduct(bookedShipments);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);


  // UPDATE SHIPMENT STATUS
  const updateStatus = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to cancel this Shipment!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Canceled!'
    })
    .then((result) => {
      if (result.isConfirmed) {
        axios.patch(`http://localhost:5000/api/shipment/update-shipment/${id}`, { status: "canceled" })
          .then(res => {
            Swal.fire(
              'Canceled!',
              'Shipment has been canceled.',
              'success'
            );
            // Update the product state to reflect the changes
            setProduct(prevProduct => prevProduct.map(item => {
              if (item._id === id) {
                return { ...item, status: "Canceled" };
              }
              return item;
            }));
            navigate("/manage-shipments?tab=Canceled")
          })
          .catch(err => {
            console.log(err);
            Swal.fire(
              'Error!',
              'Failed to cancel shipment.',
              'error'
            );
          });
      }
    });
  }
  

  return (
    <div className={styles.shipment_container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Shipment ID</th>
            <th>Commodity Name</th>
            <th>Mode</th>
            <th>Pickup City</th>
            <th>Delivery City</th>
            <th>Pickup Date</th>
            <th>StopType</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td className={styles.shipmentID}>{item._id} <FaEdit/></td>
              <td>{item.commodityName}</td>
              <td>{item.selectedMode}</td>
              <td>{item.pickupCity}</td>
              <td>{item.deliveryCity}</td>
              <td>{formatDate(item.pickupDate)}</td>
              <td>{item.stopType ? item.stopType : "no stop"}</td>
              <td>{item.price}</td>
              <td>
                <button className={styles.cancel_button} onClick={() => updateStatus(item._id)}>cancel</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
