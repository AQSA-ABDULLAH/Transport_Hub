import React from 'react'
import { GalleryImages } from '../../../constants/GalleryImages'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import  {BsArrowLeft, BsArrowRight} from 'react-icons/bs'
import styles from './galleryslider.module.css'
const Galleryslider = () => {
  return (
    <div className={styles.gallery_container}>
      <h1 className={styles.header}>Videos and Images</h1>
      <ImageGallery
      renderLeftNav={(onClick, disabled) => {
        return (
          <div
            style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)',padding:"10px",zIndex:10000}}
            disabled={disabled}
            onClick={onClick}
          >
            <BsArrowLeft size={32}/>
          </div>
        );
      }}
      renderRightNav={(onClick, disabled) => {
        return (
          <div
            style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)' ,padding:"10px",zIndex:10000}}
            disabled={disabled}
            onClick={onClick}
          >
            <BsArrowRight size={32}/>

          </div>
        );
      }}
      additionalClass=''
      items={GalleryImages}
        showBullets={false}
        showPlayButton={false}
        autoPlay={false}
        showNav={true}
        showThumbnails={true}
        disableSwipe={true}
        showFullscreenButton={false}
        lazyLoad />
    </div>
  )
}

export default Galleryslider