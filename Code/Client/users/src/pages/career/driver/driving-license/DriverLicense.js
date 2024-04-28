import React, { useState, useEffect } from 'react';
import careerStyles from '../../careerpage.module.css';
import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdCloudUpload } from "react-icons/md";
import { app } from "../../../../firebase";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function DriverCnicBackSide() {
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
        console.log(imageUrl)
        localStorage.setItem('driver_driving_license', JSON.stringify({ imageUrl }));

         // Show SweetAlert2 confirmation
         Swal.fire({
            icon: 'success',
            title: 'Photo Uploaded',
            text: 'Your Driving Licence has been uploaded successfully.',
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
                        <h2>Take a photo of your Driving License</h2>
                        <p>Take a picture of the front side of your driving licence (include all corners). </p>
                        <p><b>1.</b> Make sure that picture is clear and all words are easily readable.</p>
                        <p><b>2.</b> All of the information like your name, driving licence number, document issue date, expiration date, licence type, and CNIC(where available) should be clearly visible.</p>
                        <p><b>3.</b> Ensure to upload the right type / category of licence for the product you want to drive on. for example., D/L category should be LTV or M/ Car for car products (UberX Flow), M/ Cycle for motorcycle products (SUV Flow) etc.</p>
                        <p><b>4.</b> Renewal Receipt should be accepted till the validity date mentioned on the receipt.</p>
                        <p><b>5.</b> If any of the information is blurry or too shiny (from camera flash), card will be rejected.</p>
                        <p><b>6.</b> Make sure that you have uploaded your CNIC in the relevant document slot, as it will be cross referenced to approve your driving license.</p>
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