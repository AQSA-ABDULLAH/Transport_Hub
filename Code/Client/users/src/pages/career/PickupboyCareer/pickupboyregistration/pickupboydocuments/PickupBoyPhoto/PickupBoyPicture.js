import React, { useState, useEffect } from 'react';
import careerStyles from "../../../../careerpage.module.css";
// import careerStyles from "../../../../careerpage.module.css";
import MediumHeader from '../../../../../../components/sections/header-medium/MediumHeader';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdCloudUpload } from "react-icons/md";
import { app } from '../../../../../../firebase';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { choosePicture } from '../../../../../../redux/containers/pickupboyreg/reducer';
import { useDispatch } from 'react-redux'; 
export default function PickupBoyPicture() {
    const [image, setImage] = useState('');
    const [imgperc, setImagePrec] = useState(0); // Initialize progress to 0
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        image && uploadFile(image, "imageUrl");
    }, [image]);

    // FIREBASE SETUP HERE
    const uploadFile = (file) => {
        const storage = getStorage(app);
        const storageRef = ref(storage, 'images/' + file.name);
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
      dispatch(choosePicture(imageUrl));
        localStorage.setItem('pickupboy_photo', JSON.stringify({ imageUrl }));
       
         // Show SweetAlert2 confirmation
         Swal.fire({
            icon: 'success',
            title: 'Photo Uploaded',
            text: 'Your Photo has been uploaded successfully.',
        });
      
        // Navigate to driver application form
        navigate('/pickupboy-front-cnic');
    };

    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <section className={careerStyles.application_header}>
                        <MediumHeader />
                    </section>
                    <div className={careerStyles.application_container}>
                        <h2>Take your profile photo</h2>
                        <p>Your profile photo helps people recognize you. Please note that once you submit your profile photo it cannot be changed.</p>
                        <p><b>1.</b> Face the camera directly with your eyes and mouth clearly visible.</p>
                        <p><b>2.</b> Make sure the photo is well lit, free of glare, and in focus.</p>
                        <p><b>3.</b> No photos of a photo, filters, or alterations.</p>
                    

                        <section className={careerStyles.application_image}>
                            <div className={careerStyles.driver_image}>
                                <input
                                    type="file"
                                    className={careerStyles.form_image}
                                    id="image"
                                    name="image"
                                    accept="image/png, image/jpeg"
                                    onChange={(e) => setImage(e.target.files[0])}
                                />

                                <div className={careerStyles.driver_image_view}>
                                    {imgperc > 0 && imgperc < 100 ? (
                                        <progress value={imgperc} max="100" />
                                    ) : null}
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
                        <button onClick={handleUploadPhoto}>Upload your Photo</button>
                    </div>
                </div>
            </div >
        </>
    )
}
