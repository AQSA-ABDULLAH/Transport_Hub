import React, { useState, useEffect } from 'react';
import careerStyles from "../../../../careerpage.module.css";
import MediumHeader from '../../../../../../components/sections/header-medium/MediumHeader';
// import careerStyles from '../../careerpage.module.css';
// import MediumHeader from '../../../../components/sections/header-medium/MediumHeader';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { MdCloudUpload } from "react-icons/md";
import { app } from '../../../../../../firebase';
// import { app } from "../../../../firebase";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { chooseDrivingLicense } from '../../../../../../redux/containers/pickupboyreg/reducer';
import { useDispatch } from 'react-redux'; 
export default function PickupBoyDrivingLicense() {
    const [image, setImage] = useState('');
    const [imgperc, setImagePrec] = useState("");
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
        dispatch(chooseDrivingLicense(imageUrl));
        localStorage.setItem('pickupboy_driving_License', JSON.stringify({ imageUrl }));

         // Show SweetAlert2 confirmation
         Swal.fire({
            icon: 'success',
            title: 'File Uploaded',
            text: 'Your Driving License has been uploaded successfully.',
        });

        // Navigate to driver application form
        navigate('/pickupboy-vehicle-papers');
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
                        <p>Take a picture of the back side of your national ID card (include all corners).</p>
                        <p><b>1.</b> Make sure that the picture is clear and all words are easily readable.</p>
                        <p><b>2.</b> All of the information like your address, signature, stamp etc. should be clearly visible.</p>
                        <p><b>3.</b> If any of the information is blurry or too shiny (from camera flash), card will be
                            rejected.</p>
                        <p><b>4.</b> Missing information or tampering with information or the photo will also lead to rejection.</p>

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