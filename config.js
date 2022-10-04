import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  //Cole sua Configuração do Firebase aqui
    apiKey: "AIzaSyCXxlKaAuRbNLnCa7mSMI9np6aWkKtbDtQ",
    authDomain: "ciclista-eletronico-4885a.firebaseapp.com",
    projectId: "ciclista-eletronico-4885a",
    storageBucket: "ciclista-eletronico-4885a.appspot.com",
    messagingSenderId: "202922242278",
    appId: "1:202922242278:web:1b7a74b2f985195e9d0b27"
  
  
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
