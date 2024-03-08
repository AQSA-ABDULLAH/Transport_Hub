import React from 'react'
import style from './blogsNews.module.css'
import Blogsection1molecule from '../../components/sections/blog&new/blog&new1section/Blogs'
import Blogsection2molecule from '../../components/sections/blog&new/blog&new2section/Blogfilter'

export default function BlogsNews() {
  return (
    <>
      <div>
        <img className={style.image} src="/assets/images/blogs&News/blogImage2.png" />
      </div>
      <div className={style.blogSection}>
        <div className={style.blogContainer}>
          <Blogsection1molecule />
        </div>
        <div className={style.filterContainer}>
          <Blogsection2molecule />
        </div>
      </div>
    </>
  )
}
