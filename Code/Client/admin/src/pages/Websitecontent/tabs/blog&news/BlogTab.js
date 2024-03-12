import React, { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../../../components/atoms/buttons/Button";
import styles from "./blogtab.module.css";
const BlogTab = () => {


    return (
        <>
            <section className={styles.blogContainer}>
                <div className={styles.addFormContainer}>
                    <FormTop text={"Write New Blog"} />
                    <form action="" className={styles.addForm}>
                        <div className={styles.formRow}>
                            <div className={styles.formField}>
                                <label htmlFor="">background image</label>
                                <div className={`${styles.imgUpload} ${styles.sliderUpload}`}>
                                    <input type="file" name="sliderImg" id="sliderImg" accept="image/" />
                                    <label htmlFor="sliderImg">
                                        <img
                                            src="./assets/image/trainers/photograph.svg"
                                            alt="icon"
                                        />
                                    </label>
                                </div>
                            </div>

                            <div className={`${styles.formField} ${styles.formInput}`}>
                                <div className={styles.colItem}>
                                    <label htmlFor="heading">title</label>
                                    <textarea
                                        name="heading"
                                        id="heading"
                                        rows={2}
                                        className={styles.sliderTextArea}


                                    ></textarea>
                                </div>

                                <div className={`${styles.colItem} ${styles.minorSpace}`}>
                                    <label htmlFor="content">content</label>
                                    <textarea
                                        name="content"
                                        id="content"
                                        rows={8}
                                        className={styles.sliderTextArea}


                                    ></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                    <FormBottom text={"Save Slider"} />
                </div>
            </section>
        </>
    );
};

export const FormBottom = ({ text, handleSubmit }) => {
    return (
        <>
            <div className={styles.formBottom}>
                <Button btnText="Cancel" textColor="#7A28C2" />
                <button type="button" className={styles.uploadbtn} >
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