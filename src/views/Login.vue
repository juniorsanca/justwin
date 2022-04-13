<template>
    <div>
        <div>
            <div class="px-1 py-2.5 text-center mr-0 mb-2">
                <img alt="Vue logo" src="../public/assets/img/justwin.gif">
            </div>
        <div>
        <input class="
            font-strasua text-center text-white
            shadow-lg shadow-cyan-500/50
            bg-black rounded-full
            border border-cyan-300
            w-64 p-2 mb-6 placeholder-white
            outline-none"
            placeholder="Email" 
            v-model="email"
            type="email" 
            name="email">
        </div>

    <div>
      <input class="
      font-sans text-center
      shadow-lg shadow-cyan-500/50
      placeholder-white

      bg-black bg-opacity-100 rounded-full
      border border-cyan-300
      w-64 p-2 mb-6 text-blue-600 
      outline-none" 
      placeholder="PASSWORDY" 
      type="password" 
      v-model="password"
      name="password">
    </div><br>

    <button
      type="button"
      @click="Login"
      class=" 
              font-sans text-white text-base
              shadow-lg shadow-pink-500/50 bg-dark-200 w-64
              border border-pink-500
              hover:bg-gray-900 
              focus:outline-none 
              placeholder-white

              rounded-full
              focus:ring-4 
              focus:ring-gray-300 
              font-medium rounded-lg 
              text-sm px-5 py-2.5 mr-2 mb-2 
              dark:bg-gray-800 dark:hover:bg-gray-700 
              dark:focus:ring-gray-700 "
    >LOGIN</button><br>

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

<br>
  <div>
      <small class="text-white">
        Don't have an account ? 
      <router-link to="/register" class="text-pink-500">Sign up</router-link>
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