import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBX2Yyc0HpvgKQ-y8SSdxJib2Mn_zDKOSM",
  authDomain: "react-ecommerce-ed90d.firebaseapp.com",
  projectId: "react-ecommerce-ed90d",
  storageBucket: "react-ecommerce-ed90d.appspot.com",
  messagingSenderId: "296917566500",
  appId: "1:296917566500:web:52c2d1d4f846ede642c4b1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () => {
    return app;
}