import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { getDownloadURL } from "firebase/storage";
import { app } from "../../../../firebase";
import Button from "../../../../components/atoms/buttons/Button";
import styles from "./blogtab.module.css";

const BlogTab = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState("");
    const [heading, setHeading] = useState("");
    const [category, setCategory] = useState("");
    const [writtenby, setWrittenby] = useState("");
    const [content, setContent] = useState("");
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
        const storage = getStorage(app);
        const storageRef = ref(storage, 'BlogImages/' + file.name);
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


    // API SETUP
    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('image', imageUrl);
        formData.append('category',category);
        formData.append('writtenby', writtenby);
        formData.append('heading', heading);
        formData.append('content', content);

        try {
            const response = await axios.post("http://localhost:5000/api/blogs/create-blog", formData, {
                headers: { 'Authorization': localStorage.getItem('token') }
            });


            if (response.data.status === "success") {
                alert("Data submitted successfully!");
            } else {
                alert("Failed to submit data. Please try again.");
            }

            if (response.data.code === 403 && response.data.message === "Token Expired") {
                localStorage.setItem('token', null);
            }
        } catch (error) {
            console.log(error);
            alert("An error occurred while submitting the data. Please try again.");
        }
    };




    return (
        <>
            <section className={styles.blogContainer}>
                <div className={styles.addFormContainer}>
                    <FormTop text={"Write New Blog"} />
                    <form action="" className={styles.addForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label htmlFor="">background image</label>
                                <div className={`${styles.imgUpload} ${styles.sliderUpload}`} onClick={handelImage}>
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

                            <div className={`${styles.formField} ${styles.formInput}`}>
                                <div className={styles.colItem}>
                                    <label htmlFor="heading">Title</label>
                                    <input type="text"
                                        name="heading"
                                        id="heading"
                                        rows={2}
                                        className={styles.sliderTextArea}
                                        value={heading}
                                        onChange={(e) => setHeading(e.target.value)}
                                    />
                                </div>

                                <div className={styles.colItem}>
                                    <label htmlFor="category">Category</label>
                                    <input type="text"
                                        name="category"
                                        id="category"
                                        rows={2}
                                        className={styles.sliderTextArea}
                                        value={category}
                                        onChange={(e) => setCategory(e.target.value)}
                                    />
                                </div>

                                <div className={styles.colItem}>
                                    <label htmlFor="writtenby">Written By</label>
                                    <input type="text"
                                        name="writtenby"
                                        id="writtenby"
                                        rows={2}
                                        className={styles.sliderTextArea}
                                        value={writtenby}
                                        onChange={(e) => setWrittenby(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.minorSpace}>
                            <label htmlFor="content">content</label>
                            <textarea
                                name="content"
                                id="content"
                                rows={8}
                                className={styles.sliderTextArea}
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            ></textarea>
                        </div>
                    </form>
                    <FormBottom text={"Save Slider"} handleSubmit={handleSubmit} />
                </div>
            </section>
        </>
    );
};

export const FormBottom = ({ handleSubmit }) => {
    return (
        <>
            <div className={styles.formBottom}>
                <Button btnText="Cancel" textColor="#7A28C2" />
                <button type="button" className={styles.uploadbtn} onClick={handleSubmit}>
                    UPLOAD BLOG
                </button>
            </div>
        </>
    );
};

export const FormTop = ({ text }) => {
    return (
        <>
            <div className={styles.formTop}>
                <h5>{text}</h5>
            </div>
        </>
    );
};

export default BlogTab;