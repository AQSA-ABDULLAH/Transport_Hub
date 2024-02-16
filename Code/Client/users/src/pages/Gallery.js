import React from "react";
import MediumHeader from "../components/sections/header-medium/MediumHeader";
import Galleryslider from "../components/sections/gallery/GallerySlider";
const Gallery = () => {
  return (
    <>
      <MediumHeader
        bgImage={
          "./assets/image/gallery/group-young-people-training-gym-indoors-maintaining-sportive-lifestyle.png"
        }
      />
     <Galleryslider/>
    </>
  );
};

export default Gallery;
