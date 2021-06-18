import firebase from "firebase";

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

apiKey: "AIzaSyDnMU_U3HYyT0y3p9SRpQ_vW4X0OEFJX6w",
authDomain: "clone-ddf53.firebaseapp.com",
projectId: "clone-ddf53",
storageBucket: "clone-ddf53.appspot.com",
messagingSenderId: "656554047425",
appId: "1:656554047425:web:fb59e4732b8c6f9e7aa140",
measurementId: "G-T63LSZDB0Z"

};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };


  