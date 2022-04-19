<template>
  <div class="">
<div>
    <div class="px-1 py-2.5 text-center mr-0 mb-2">
        <img alt="Vue logo" src="../public/assets/img/justwin.gif">
    </div>

    <div>
      <input class="
        font-sans text-center text-white font-bold

        shadow-lg shadow-cyan-500/50
        bg-black rounded-full
        border border-cyan-300
        w-64 p-2 mb-6 placeholder-white

        outline-none"
        placeholder="NAME" 
        v-model="user.name"
        type="name" 
        name="name">
    </div>

    <div>
      <input class="
        font-sans text-center text-white font-bold

        shadow-lg shadow-cyan-500/50 bg-black
        rounded-full border border-cyan-300 
        w-64 p-2 mb-6 placeholder-white

        outline-none"
        placeholder="EMAIL" 
        v-model="user.email"
        type="email" 
        name="username">
    </div>

    <div>
      <input class="
        font-sans text-center text-white font-bold

        shadow-lg shadow-cyan-500/50 bg-black
        rounded-full border border-cyan-300 
        w-64 p-2 mb-6 placeholder-white
 
        outline-none" 
        placeholder="PASSWORD" 
        type="password" 
        v-model="user.password"
        name="username">
    </div>
    </div>

    <button
      type="button"
      @click="Register"
      class=" 
      font-sans text-white text-base font-bold shadow-lg shadow-pink-500/50
bg-dark-200 w-64 border border-pink-500 hover:bg-gray-900 focus:outline-none
placeholder-white rounded-full text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800
dark:hover:bg-gray-700 dark:focus:ring-gray-700 rounded-full bg-black
bg-opacity-100 rounded-full border border-pink-500 w-64 p-2 mb-6 text-white
outline-none

        "
    >SING UP</button><br>

  <br> 
  <div class=" grid grid-cols-3 gap-3 content-evenly ...">
    <div>
        <hr class="w-18 h-2 place-content-center">
    </div>
      <div>
          <small class="text-white font-bold">Sign Up Using</small>
      </div>
    <div>
        <hr class="w-18 place-content-center">
    </div>
  </div>
  <br>
    <div class="flex space-x-3 justify-center">
      <div>
          <button @click="googleConnect"> 
            <img class="h-6 w-6" alt="Vue logo" src="../public/assets/img/google.png">
          </button><br>
      </div>
      <div>
          <button @click="facebookConnect"> 
            <img class="h-6 w-6" alt="Vue logo" src="../public/assets/img/facebook.png">
          </button><br>
      </div>
      <div>
          <button @click="twitterConnect"> 
            <img class="h-8 w-8" alt="Vue logo" src="../public/assets/img/twitter.png">
          </button><br>
      </div>
  </div>

    <div>
        <small class="text-white">
          Already have account ?
        <router-link to="/login" class="text-pink-500">Login</router-link>
        </small>
    </div>
    <br>
</div>

</template>

<script>
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


//import { collection, getDocs } from "firebase/firestore";
//import { getAuth, updateProfile } from "firebase/auth";


export default {
  name: "RegisterView",
  data() {
    return {
      user: {
        name : '', 
        email : '',
        password : ''
      }
    };
  },
  methods: {
      Register : function() {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.user.email, this.user.password)
        .then(async(response) => { 
          const db = firebase.firestore()
          await db.collection('users').doc(response.uid).set({
            name : this.user.name
          })

        //Password reset
        //Show error
        //Email verification

        
        /*
        db.collection('users').get().then(r => { r.docs.map(doc => {
        console.log(doc.data()); }) })

        */
        /*  const auth = getAuth();
          updateProfile(auth.currentUser, {
            displayName: response.user.name
          }). then(() => {
            console.log("profile registered !")
          })
        */
              response.user.sendEmailVerification().then(() => {
                    this.$router.push('home')
              });  
              
             },(err) => {
                alert('Oops. ' + err.message) 
          });
        },
        googleConnect(){
          const provider = new firebase.auth.GoogleAuthProvider();
          firebase.auth().signInWithPopup(provider).then(() => {
            this.$router.replace('home');
          }).catch((err) => {
            alert('Oops. ' + err.message)
          })
        },
          facebookConnect(){
            const provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(() => {
              this.$router.replace('home'); 
              }).catch((err) => { 
                alert('Oops. ' + err.message)
          }) 
        },
        twitterConnect(){
           const provider = new firebase.auth.TwitterAuthProvider();
        firebase.auth().signInWithPopup(provider).then(() => {
          this.$router.replace('home');
           }).catch((err) => {
             alert('Oops. ' + err.message)
        }) 
        },
      }
    }
</script>
