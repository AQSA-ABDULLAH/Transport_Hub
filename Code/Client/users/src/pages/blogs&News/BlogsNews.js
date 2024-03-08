import React from 'react'
import style from './blogsNews.module.css'
import Blogsection1molecule from '../../components/molecules/blog&newSection/blogsection1molecules/Blogsection1molecule'
import Blogsection2molecule from '../../components/molecules/blog&newSection/blogsection2molecules/Blogsection2molecule'

export default function BlogsNews() {
  return (
    <>
      <div>
        <img className={style.image} src="/assets/images/blogs&News/blogImage2.png" />
      </div>
      <div className={style.blogSection}>
        <Blogsection1molecule />
        <Blogsection2molecule />
      </div>
    </>
  )
}
