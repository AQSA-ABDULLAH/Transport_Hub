import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';
import styles from "./viewcars.module.css";
import { FaTrash, FaEdit } from "react-icons/fa";
import UpdateCar from '../update_car/UpdateCars';

export default function ViewCars() {
  const [product, setProduct] = useState([]);
  const [showUpdateCar, setShowUpdateCar] = useState(false);
  const [selectedCar, setSelectedCar] = useState(null);

  // GET CAR DATA
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


  // DELETE CAR DATA
  const deleteCar = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You want to delete this car!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Delete!'
    })

      .then((result) => {
        if (result.isConfirmed) {
          axios.delete(`http://localhost:5000/api/cars/deleteCar/${id}`)
            .then(res => {
              Swal.fire(
                'Delete Car!',
                'You data have been delete.',
                'success'
              );
              if (res.status === 200) {
                axios.get("http://localhost:5000/api/cars/getCars")
                  .then(res => {
                    console.log(res.data);
                    setProduct(res.data.data);
                  })
                  .catch(err => {
                    console.log(err);
                  });
              }
            })
            .catch(err => {
              console.log(err);
            });
        }
      });

  }

  //  UPDATE CAR DATA
  const updateCar = (id) => {
    setShowUpdateCar(true);
    setSelectedCar(id);
  };

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Model</th>
            <th>Vechical</th>
            <th>Status</th>
            <th>Zone</th>
            <th>Price<span>(per/hour)</span></th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {product.map((item, index) => (
            <tr key={index}>
              <td>
                <img src={item?.carImage} alt={item.carTitle} />
              </td>
              <td className={styles.carTitle}>{item.carTitle}</td>
              <td>{item.carType}</td>
              <td>{item.engineType}</td>
              <td>BOOKED</td>
              <td>{item.zone}</td>
              <td>{item.price}</td>
              <td>
                <FaEdit className={styles.editButton} onClick={() => updateCar(`${item._id}`)} />
                <FaTrash className={styles.deleteButton} onClick={() => deleteCar(item._id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showUpdateCar && (
        <UpdateCar
        onClose={() => setShowUpdateCar(false)}
        carId={selectedCar}/>
      )}
    </>
  );
}
