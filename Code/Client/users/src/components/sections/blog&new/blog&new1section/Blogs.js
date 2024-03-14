import React, { useEffect, useState } from 'react';
import axios from 'axios';
import style from './blogs.module.css'

export default function Blogsection1molecule() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/api/blogs/get-blog")
            .then(res => {
                console.log(res.data)
                setProduct(res.data.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {
                product.map((item) =>
                    <div className={style.cards}>
                        <div className={style.blogCard}>
                            <div>
                                <img className={style.blogImage} src="/assets/images/blogs&News/blogImage6.jpg" alt="blogImage" />
                            </div>
                            <div className={style.blog}>
                                <h2>{item.heading}</h2>
                                <p>{item.content}</p>
                                <p>2Posted December 20, 2023       Read more ›</p>
                            </div>
                        </div>
                    </div>
                )}
        </>
    )
}
