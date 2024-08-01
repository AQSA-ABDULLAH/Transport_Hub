import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import styles from "../../../../components/sections/transport-managment/cars/view_car/viewcars.module.css";
import GetShipment from "../ShipmentForm"

export default function CanceledShipments() {
  const [product, setProduct] = useState([]);
  const [showShipmentForm, setShowShipmentForm] = useState(false);
  const [shipmentId, setShipmentId] = useState(null);

    // Function to handle edit click
    const handleEditClick = (id) => {
      setShowShipmentForm(true);
      setShipmentId(id);
      console.log("show")
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
    axios.get("https://transport-hub-tawny.vercel.app/api/shipment/get-shipment")
      .then(res => {
        console.log(res.data);
        // Filter shipments with status "booked by admin"
        const bookedShipments = res.data.data.filter(item => item.status === "canceled");
        setProduct(bookedShipments);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

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
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td className={styles.shipmentID}>{item._id} <FaEdit onClick={() => handleEditClick(item._id)}/></td>
              <td>{item.commodityName}</td>
              <td>{item.selectedMode}</td>
              <td>{item.pickupCity}</td>
              <td>{item.deliveryCity}</td>
              <td>{formatDate(item.pickupDate)}</td>
              <td>{item.stopType ? item.stopType : "no stop"}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {showShipmentForm && (
        <GetShipment
          onClose={handleClose}
          shipmentId={shipmentId}
        />
      )}
      
    </div>
  );
}