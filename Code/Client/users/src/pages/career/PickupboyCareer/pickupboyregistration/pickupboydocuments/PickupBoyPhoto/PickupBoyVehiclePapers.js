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
import { chooseVehiclePapers } from '../../../../../../redux/containers/pickupboyreg/reducer';
import { useDispatch ,useSelector} from 'react-redux'; 


export default function PickupBoyVehiclePapers() {

    const [image, setImage] = useState('');
    const [imgperc, setImagePrec] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const email = useSelector(state => state.root.email);
    const name = useSelector(state => state.root.name);
    const city = useSelector(state => state.root.city);
    const phoneNumber = useSelector(state => state.root.phoneNumber);
    const cnicNumber = useSelector(state => state.root.cnicNumber);
    const picture = useSelector(state => state.root.picture);
    const cnicFront = useSelector(state => state.root.cnicFront);
    const cnicBack = useSelector(state => state.root.cnicBack);
    const drivingLicense = useSelector(state => state.root.drivingLicense);
    const vehiclePapers = useSelector(state => state.root.vehiclePapers);




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
        dispatch(chooseVehiclePapers(imageUrl));
        localStorage.setItem('pickupboy_vehicle_papers', JSON.stringify({ imageUrl }));

         // Show SweetAlert2 confirmation
         Swal.fire({
            icon: 'success',
            title: 'File Uploaded',
            text: 'Your Vehicle Papers has been uploaded successfully.',
        });

        // Navigate to driver application form
        
    };
    const handleSubmit=()=>{
        const formData = {
            email,
            name,
            city,
            phoneNumber,
            cnicNumber,
            picture,
            cnicFront,
            cnicBack,
            drivingLicense,
            vehiclePapers,
        };
        fetch('https://transport-hub-tawny.vercel.app/api/submitFormData', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => {
            if (response.ok) {
                // Show success message
                Swal.fire({
                    icon: 'success',
                    title: 'Form Submitted',
                    text: 'You have successfully submitted the application for working as a pickupboy. We will contact you soon and update to your email.',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate("/");
                    }
                });
            } else {
                // Show error message
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Failed to submit the form. Please try again later.',
                });
            }
        })
        .catch(error => {
            console.error('Error:', error);
            // Show error message
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'An error occurred while submitting the form. Please try again later.',
            });
        });
    }
    const btnStyle = {
        marginLeft: '100px',
        
    };

    return (
        <>
            <div className={careerStyles.container}>
                <div className={careerStyles.subContainer}>
                    <section className={careerStyles.application_header}>
                        <MediumHeader />
                    </section>
                    <div className={careerStyles.application_container}>
                        <h2>Take a photo of your Vehicles Paper</h2> 
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
                        <button style={btnStyle} onClick={handleSubmit}>Submit</button>
                    </div>
                </div>
            </div >
        </>
    )
}