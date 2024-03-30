import axios from "axios";
import React, { useState, useEffect } from "react";
import styles from "./zonetab.module.css";

export default function ZoneList() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/zone/get-zone")
            .then(res => {
                console.log(res.data);
                setProduct(res.data.data);
            })
            .catch(err => {
                console.log(err);
            });
    }, []); // Empty dependency array ensures this effect runs only once, similar to componentDidMount
  return (
    <>
    {
                    product.map((item, index) =>
                        <div className={styles.zone} key={index}>
                            <div>{item.zone} <button><img src='/assets/images/website-content/delete.png' alt="Delete" /></button></div>
                        </div>
                    )}
    </>
  )
}
