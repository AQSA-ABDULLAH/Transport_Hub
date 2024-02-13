import React from 'react'
import Navbar from '../../components/atoms/Navbar/Navbar';
import style from './blogsNews.module.css'

export default function BlogsNews() {
  return (
    <>
    <Navbar/>
    <div>
        <img className={style.image} src="/assets/images/blogs&News/blogImage2.png"/>
    </div>
    </>
  )
}
