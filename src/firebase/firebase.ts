// import * as firebase from "firebase"
import firebase from "firebase/app"
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyCdmLm58s7c4hHIYk0O52IkofoNrxE3Jgw",
    authDomain: "testproject-97f64.firebaseapp.com",
    databaseURL: "https://testproject-97f64-default-rtdb.firebaseio.com",
    projectId: "testproject-97f64",
    storageBucket: "testproject-97f64.appspot.com",
    messagingSenderId: "969029472689",
    appId: "1:969029472689:web:313da3fba3153292ca6d90",
    measurementId: "G-R5K7KMDTG1"
};

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}

export const auth= firebase.auth();
export const db = firebase.database();