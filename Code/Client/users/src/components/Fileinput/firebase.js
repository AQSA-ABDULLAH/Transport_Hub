import { useRef, useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import storage from "../../firebase";
import styles from './styles.module.css';
import { ProgressBar, Form } from 'react-bootstrap'; // Import Bootstrap components

const FileInput = ({ name, label, value, type, handleInputState, ...rest }) => {
    const inputRef = useRef();
    const [progress, setProgress] = useState(0);
    const [progressShow, setProgressShow] = useState(false);

    const handleUpload = () => {
        setProgressShow(true);
        const file = inputRef.current.files[0]; // Access the selected file
        const fileName = new Date().getTime() + file.name;
        const storageRef = ref(storage, `/images/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const uploaded = Math.floor(
                    (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                );
                setProgress(uploaded);
            },
            (error) => {
                console.log(error);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                    handleInputState(name, url);
                });
            }
        )
    }

    return (
        <div>
            {/* Bootstrap custom file input */}
            <Form.Group controlId={`formFile${name}`} className="mb-3">
                <Form.Label>{label}</Form.Label>
                <Form.Control
                    type="file"
                    ref={inputRef}
                    onChange={() => handleUpload()}
                />
            </Form.Group>

            {/* Display file preview for image type */}
            {type === "image" && value && (
                <img
                    src={typeof value === "string" ? value : URL.createObjectURL(value)}
                    alt="file"
                    className={styles.preview_img}
                />
            )}

            {/* Upload progress bar */}
            {progressShow && (
                <ProgressBar now={progress} label={`${progress}%`} />
            )}
        </div>
    )
}

export default FileInput;

// import { useRef,useState} from "react";
// import {ref,uploadBytesResumable,getDownloadURL} from 'firebase/storage'
// import storage from "../../firebase";
// import firebaseimage from '../../images/firebaseimage.jpg'
// import styles from './styles.module.css'
// const FileInput=({name,label,value,type,handleInputState,...rest})=>{
//     const inputRef=useRef();
//     const [progress,setProgress]=useState(0);
//     const [progressShow,setProgressShow]=useState(false);
 
//     const handleUpload=()=>{
//         setProgressShow(true);
//         const fileName=new Date().getTime()+value.name;
//         const storageRef=ref(
//             storage,
//             type === "image"?`/images/${fileName}`:`not stored`
//         );   
//         const uploadTask=uploadBytesResumable(storageRef,value);
//         uploadTask.on(
//             "state_changed",
//             (snapshot)=>{
//                 const uploaded=Math.floor(
//                     (snapshot.bytesTransferred/snapshot.totalBytes)*100
//                 );
//                 setProgress(uploaded)
//             },
//             (error)=>{
//                 console.log(error);

//             },
//             ()=>{
//                 getDownloadURL(uploadTask.snapshot.ref).then((url)=>{
//                     handleInputState(name,url)
   
//                 })
//             }


//         )        
//     }
//     return(
// <div className={styles.container}>
//     <input type={type} ref={inputRef}
//     onChange={(e)=>handleInputState(name,e.currentTarget.files[0])}
//     value={value}
//     className={styles.input}
//     {...rest}
// />
// <button type="button" onClick={()=>inputRef.current.click()}
// className={styles.button} >{label}</button>

// {type ==="image" && value && (
//    <img
//    src={typeof value ==="string"? value :URL.createObjectURL(value)}
//    alt="file"
//    className={styles.preview_img}
//    /> 
// )}
// {value !== null && !progressShow && typeof value !=="string" && (
//     <button onClick={handleUpload} className={styles.button}>
//         Upload
//     </button>
// )}
// {progressShow && progress<100 &&(
//     <div className={styles.progress_container}>
//         <p>{progress}%</p>
//     </div>
// )}
// {progress === 100 && (
//     <div className={styles.progress_container}>
//         <img src={firebaseimage} alt="check circle class"  className={styles.check_img}/>
//     </div>
// )}
// </div>
//     )

// }
// export default FileInput;