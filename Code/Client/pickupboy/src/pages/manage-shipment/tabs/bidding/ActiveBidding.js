import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaEdit } from "react-icons/fa";
import styles from "../viewshipments.module.css";
import GetShipment from "../../ShipmentForm";
import AddFare from "./fare/AddFare";

export default function ActiveBidding() {
  const [product, setProduct] = useState([]);
  const [showShipmentForm, setShowShipmentForm] = useState(false);
  const [addFare, setAddFare] = useState(false);
  const [shipmentId, setShipmentId] = useState(null);

    // Function to handle fare click
    const handelAddFare = (id) => {
      setAddFare(true);
      setShipmentId(id);
      console.log("show")
    };
  
    const close = () => {
      setAddFare(false);
      setShipmentId(null);
    };

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
    axios.get("http://localhost:5000/api/shipment/get-shipment")
      .then(res => {
        console.log(res.data);
        // Filter shipments with status "booked by admin"
        const bookedShipments = res.data.data.filter(item => item.status === "active bidding");
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
            <th>Fare Price</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td className={styles.shipmentID}>{item._id} <FaEdit onClick={() => handleEditClick(item._id)} /></td>
              <td>{item.commodityName}</td>
              <td>{item.selectedMode}</td>
              <td>{item.pickupCity}</td>
              <td>{item.deliveryCity}</td>
              <td>{formatDate(item.pickupDate)}</td>
              <td>
                <button className={styles.cancel_button} onClick={() => handelAddFare(item._id)}>Add Fare</button>
              </td>
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

      {addFare && (
        <AddFare
          onClose={close}
          shipmentId={shipmentId}
        />
      )}

    </div>
  );
}
