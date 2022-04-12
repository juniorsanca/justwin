<template>
    <div>
    <!--
    <div 
    class="bg-cover bg-center ..." 
    style="background-image: url('../public/assets/img/gmail.png')">
    -->
    <div>
        <div class="px-1 py-2.5 text-center mr-0 mb-2">
            <img alt="Vue logo" src="../public/assets/img/justwin.gif">
        </div>
    <div>
      <input class="
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
      name="email">
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
      name="password">
    </div><br>
<!--
    <div>
      <small>
        <router-link to="#" class="text-white float-right w-64">Forgot password ?</router-link>
      </small>
  </div><br>
-->
    <button
      type="button"
      @click="Login"
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
    >Login</button><br>

    <br><br>
    <div class=" grid grid-cols-3 gap-3 content-evenly ...">
        <div>
            <hr class="w-18 h-2 place-content-center">
        </div>
        <div>
            <small class="text-white">Login with</small>
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

<br>
  <div>
      <small class="text-white">
      Don't have an account ? 
      <router-link to="/register" class="text-blue-500">Sign up</router-link>
      </small>
  </div><br>
 

 </div>
 </div>
</template>

<script>
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';

export default {
    name: 'LoginView',
    data() {
        return {
            email: '',
            password : ''        
        }
    },
    methods: {
        Login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((firebaseUser) => { 
                //console.log("user value is", firebaseUser)
                this.$router.replace('home', firebaseUser)
                }, 
             (err) => { 
                alert('Oops. ' + err.message) 
                } 
           );
        },
        googleConnect(){ const provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(() => {
            this.$router.replace('home'); 
            }).catch((err) => { 
                alert('Oops. ' + err.message)
            }) 
        },
        facebookConnect(){ const provider = new firebase.auth.FacebookAuthProvider();
            firebase.auth().signInWithPopup(provider).then(() => {
            this.$router.replace('home'); 
            }).catch((err) => { 
                alert('Oops. ' + err.message)
            }) 
        },
        twitterConnect(){ const provider = new firebase.auth.TwitterAuthProvider();
            firebase.auth().signInWithPopup(provider).then(() => {
            this.$router.replace('home'); 
            }).catch((err) => { 
                alert('Oops. ' + err.message)
            }) 
        },

     }
}
</script>