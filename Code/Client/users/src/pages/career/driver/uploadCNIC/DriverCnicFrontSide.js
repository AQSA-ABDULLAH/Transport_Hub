import React, { useRef, useState, useEffect } from 'react';
import careerStyles from '../../careerpage.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function DriverCnicFrontSide() {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [imgperc, setImagePrec] = useState("");
    const [imageUrl, setImageUrl] = useState("");

    const handelImage = () => {
        inputRef.current.click();
    }

    useEffect(() => {
        image && uploadFile(image, "imageUrl");
    }, [image]);

    // FIREBASE SETUP HERE
    const uploadFile = (file) => {
        const storage = getStorage();
        const storageRef = ref(storage, 'Career/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setImagePrec(progress); // Update image upload progress
            },
            (error) => {
                console.error('Error uploading file:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageUrl(downloadURL); // Update imageUrl directly
                    console.log('File available at', downloadURL);
                });
            }
        );
    }

    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <MediumHeader />
                    <div className={careerStyles.application_container}>
                        <h2>Take a photo of your CNIC Front Side</h2>
                        <p>Take a picture of the front side of your national ID card (include all corners). 1. Make
                            sure that picture is clear and all words are easily readable. 2. All of the information
                            like your name, date of birth, gender, the expiration date etc. should be clearly visible.
                            3. If any of the information is blurry or too shiny (from camera flash), card will be
                            rejected. 4. Missing information or tampering with information or the photo will also
                            lead to rejection.</p>
                        <div className={careerStyles.formField}>
                            <div className={`${careerStyles.imgUpload} ${careerStyles.sliderUpload}`} onClick={handelImage}>
                                {image ? (
                                    <img
                                        src={URL.createObjectURL(image)}
                                        alt="icon"
                                    />
                                ) : (
                                    <label htmlFor="sliderImg">
                                        <img
                                            src="./assets/images/photograph.svg"
                                            alt="icon"
                                        />
                                    </label>
                                )}

                                <input type="file" name="sliderImg" id="sliderImg"
                                    accept="image/png, image/jpeg"
                                    ref={inputRef}
                                    onChange={(e) => setImage(e.target.files[0])}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
