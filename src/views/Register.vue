<template>
  <div class="">
<div>
    <div class="px-1 py-2.5 text-center mr-0 mb-2">
        <img alt="Vue logo" src="../public/assets/img/justwin.gif">
    </div>

    <div>
      <input class="
      text-white
      bg-black bg-opacity-100
      rounded-full
      border-2 border-pink-400
      w-64 p-2 mb-6 
      text-white-700 
      border-b-2 border-blue-500 
      outline-none"
      placeholder="Name" 
      v-model="name"
      type="name" 
      name="name">
    </div>

    <div>
      <input class="
      text-white
      bg-black bg-opacity-100
      rounded-full
      border-2 border-pink-400
      w-64 p-2 mb-6 
      text-white-700 
      border-b-2 border-blue-500 
      outline-none"
      placeholder="Email" 
      v-model="email"
      type="email" 
      name="username">
    </div>

    <div>
      <input class="
      bg-black bg-opacity-100 rounded-full
      border-2 border-pink-400
      w-64 p-2 mb-6 text-blue-600 
      border-b-2 border-indigo-500 
      outline-none" 
      placeholder="Password" 
      type="password" 
      v-model="password"
      name="username">
    </div>
    </div>

    <button
      type="button"
      @click="Register"
      class="text-white bg-dark-200 w-64
              border-2 border-blue-600
              hover:bg-gray-900 
              focus:outline-none 
              rounded-full
              focus:ring-4 
              focus:ring-gray-300 
              font-medium rounded-lg 
              text-sm px-5 py-2.5 mr-2 mb-2 
              dark:bg-gray-800 dark:hover:bg-gray-700 
              dark:focus:ring-gray-700 dark:border-gray-700"
    >Sing up</button><br>

  <br> 
  <div class=" grid grid-cols-3 gap-3 content-evenly ...">
    <div>
        <hr class="w-18 h-2 place-content-center">
    </div>
      <div>
          <small class="text-white">Sign Up Using</small>
      </div>
    <div>
        <hr class="w-18 place-content-center">
    </div>
  </div>
  <br>

  <div class="flex space-x-3 justify-center">
      <div>
          <button @click="googleConnect"> 
            <img class="h-11 w-11" alt="Vue logo" src="../public/assets/img/gmail.png">
          </button><br>
      </div>
      <div>
          <button @click="facebookConnect"> 
            <img class="h-11 w-11" alt="Vue logo" src="../public/assets/img/facebook.png">
          </button><br>
      </div>
      <div>
          <button @click="twitterConnect"> 
            <img class="h-11 w-11" alt="Vue logo" src="../public/assets/img/twitter.png">
          </button><br>
      </div>
  </div>

    <div>
        <small class="text-white">
          Already have account ?
        <router-link to="/login" class="text-blue-500">Login</router-link>
        </small>
    </div>
    <br>
</div>

</template>

<script>
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';


export default {
  name: "RegisterView",
  data() {
    return {
        name : '', 
        email : '',
        password : ''
    }
  },
  methods: {
      Register : function() {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((firebaseUser) => { 
            firebaseUser.user.sendEmailVerification().then(() => {
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
