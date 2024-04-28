import {initializeApp} from 'firebase/app'
import {getStorage} from 'firebase/storage'
// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getStorage} from 'firebase/storage'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyAGr3sYqqU2OK7g3r5wVvBpt38CJlQgae4",
//   authDomain: "transport-hub-a77ee.firebaseapp.com",
//   projectId: "transport-hub-a77ee",
//   storageBucket: "transport-hub-a77ee.appspot.com",
//   messagingSenderId: "1097600057992",
//   appId: "1:1097600057992:web:8e9afd51115b45d813953d"
// };

// // // Initialize Firebase
// // export const app = initializeApp(firebaseConfig);
// //fatima firebase configurations
 const firebaseConfig = {
   apiKey: "AIzaSyAv_H2ExUF_EEqAcH9qJzOQ7v_7tLcfbPA",
   authDomain: "parcelpickup-f9b49.firebaseapp.com",
   projectId: "parcelpickup-f9b49",
   storageBucket: "parcelpickup-f9b49.appspot.com",
   messagingSenderId: "323405758623",
   appId: "1:323405758623:web:fb9a93576c01da0a09e2aa",
 };
 const app = initializeApp(firebaseConfig);
 const storage = getStorage(app,"gs://parcelpickup-f9b49.appspot.com");
 export default storage;
 export { app, storage };
// // REACT_APP_BUCKET_URL="gs://parcelpickup-f9b49.appspot.com"
// // REACT_APP_API_KEY="AIzaSyAv_H2ExUF_EEqAcH9qJzOQ7v_7tLcfbPA"
// // REACT_APP_AUTH_DOMAIN="parcelpickup-f9b49.firebaseapp.com"
// // REACT_APP_PROJECT_ID="parcelpickup-f9b49"
// // REACT_APP_STORAGE_BUCKET="parcelpickup-f9b49.appspot.com"
// // REACT_APP_MESSAGING_SENDER_ID= "323405758623"
// // REACT_APP_APP_ID="1:323405758623:web:fb9a93576c01da0a09e2aa"
