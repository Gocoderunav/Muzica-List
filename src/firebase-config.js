// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyBaycCcyprWuqXunXVO5ueIEDVqgoY8Res",
//   authDomain: "crud-dc7c9.firebaseapp.com",
//   projectId: "crud-dc7c9",
//   storageBucket: "crud-dc7c9.appspot.com",
//   messagingSenderId: "537497081784",
//   appId: "1:537497081784:web:00310bf95af6be0a72614d",
//   measurementId: "G-MM0K1QESTM",
// };




// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);
// export const auth = getAuth(app);
// export const provider = new GoogleAuthProvider();






import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSdZgr3Bgqshj35DVaSatf0cG8kiqIRDc",
  authDomain: "muzica-list.firebaseapp.com",
  projectId: "muzica-list",
  storageBucket: "muzica-list.appspot.com",
  messagingSenderId: "211975921476",
  appId: "1:211975921476:web:3d0ed0798140f884754111",
  measurementId: "G-N96N3V2N9F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();