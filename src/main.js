import Vue from 'vue'

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';

import 'firebase/compat/firestore'

import App from './App.vue';
import router from './router';
import './index.css'

//import { getFirestore } from "firebase/firestore";


Vue.config.productionTip = false;

let app = '';

firebase.initializeApp({
  apiKey: "AIzaSyCwxef6ufDcVrnsisaQHi7xbYrFVH1TnHI",
  authDomain: "nft-jump.firebaseapp.com",
  projectId: "nft-jump",
  storageBucket: "nft-jump.appspot.com",
  messagingSenderId: "802684901559",
  appId: "1:802684901559:web:d17a4a2fdc148d61bbd532",
  measurementId: "G-ZT1RS3N639"
});

export const db = firebase.firestore();

//console.log(db);
db.collection('users').get().then(r => {
  r.docs.map(doc => {
    console.log(doc.data());
  })
})

firebase.auth().onAuthStateChanged(() => {
  if(!app) {
    app = new Vue({
    router,
    db,
    render: h => h(App)
  }).$mount('#app')
  }
});


