import React, { useState } from "react";
import style from "./galleryimg.module.css";

const Galleryimg = () => {
  const [dragging, setDragging] = useState(false);

  const handleDragEnter = (e) => {
    e.preventDefault();
    setDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.file;
    // Handle the dropped files here, you can use FileReader or other methods
  };

  return (
    <div className={style.container}>
      <p className={style.newClass}>Add new Gallery image</p>
      <div
        className={`${style.outerContainer} ${dragging ? style.dragging : ""}`}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <img src="/assets/image/gallery/Vector.png" alt="vertor.png" />
        <div className={style.imgContainer}>
          <input
            className={style.inputTag}
            type="file"
            id="imgFile"
            name="abc"
          />
          <span>
            <label htmlFor="imgFile">Upload a file</label>
          </span>
          <span className={style.drag}>or drag or drop</span>
        </div>
        <p>PNG, JPG, GIF up to 5MB</p>
      </div>
    </div>
  );
};

export default Galleryimg;
