import React, { useState, useEffect } from 'react';
import careerStyles from '../../careerpage.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdCloudUpload } from "react-icons/md";
import { app } from "../../../../firebase";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DriverCnicFrontSide() {
    const [image, setImage] = useState('');
    const [imgperc, setImagePrec] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        image && uploadFile(image, "imageUrl");
    }, [image]);

    // FIREBASE SETUP HERE
    const uploadFile = (file) => {
        const storage = getStorage(app);
        const storageRef = ref(storage, 'DriverApplicationImages/' + file.name);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on('state_changed',
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
                setImagePrec(progress);
            },
            (error) => {
                console.error('Error uploading file:', error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImageUrl(downloadURL);
                    console.log('File available at', downloadURL);
                });
            }
        );
    }

    const handleUploadPhoto = () => {
        localStorage.setItem("driver_Cnic_front", imageUrl);
         // Show SweetAlert2 confirmation
         Swal.fire({
            icon: 'success',
            title: 'Photo Uploaded',
            text: 'Your CNIC Front side has been uploaded successfully.',
        });

        // Navigate to driver application form
        navigate('/driver_application_form');
    };

    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <section className={careerStyles.application_header}>
                        <MediumHeader />
                    </section>
                    <div className={careerStyles.application_container}>
                        <h2>Take a photo of your CNIC Front Side</h2>
                        <p>Take a picture of the front side of your national ID card (include all corners).</p>
                        <p><b>1.</b> Make sure that the picture is clear and all words are easily readable.</p>
                        <p><b>2.</b> All of the information
                            like your name, date of birth, gender, the expiration date etc. should be clearly visible.</p>
                        <p><b>3.</b> If any of the information is blurry or too shiny (from camera flash), card will be
                            rejected.</p>
                        <p><b>4.</b> Missing information or tampering with information or the photo will also
                            lead to rejection.</p>

                        <section className={careerStyles.application_image}>
                            <div className={careerStyles.image}>
                                <input
                                    type="file"
                                    className={careerStyles.form_image}
                                    id="image"
                                    name="image"
                                    accept="image/png, image/jpeg"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />

                                <div className={careerStyles.image_view}>
                                    {image ? (
                                        <img
                                            src={URL.createObjectURL(image)}
                                            alt="icon"
                                        />
                                    ) : (
                                        <div className={careerStyles.image_container}>
                                            <MdCloudUpload className={careerStyles.icon} />
                                            <p>Drag and drop or click here to upload image</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </section>
                    </div>

                    <div className={careerStyles.application_footer}>
                        <button onClick={handleUploadPhoto}>Upload Photo</button>
                    </div>
                </div>
            </div >
        </>
    )
}
