<template>
  <div class=""><br>
  <div>
    <div class="px-1 py-2.5 text-center mr-0 mb-2">
        <img alt="Vue logo" src="../public/assets/img/justwin.png">
    </div>
    <div>
      <input class="
      w-64 p-2 mb-6 
      text-indigo-700 
      border-b-2 border-indigo-500 
      outline-none focus:bg-gray-300" 
      placeholder="Adresse email" 
      v-model="email"
      type="email" 
      name="username">
    </div><br>

    <div>
      <input class="
      w-64 p-2 mb-6 text-indigo-700 
      border-b-2 border-indigo-500 
      outline-none focus:bg-gray-300" 
      placeholder="Mot de passe" 
      type="password" 
      v-model="password"
      name="username">
    </div>

  <button
    type="button"
    @click="Register"
    class="text-white bg-gradient-to-br w-64
            from-purple-600 to-blue-500 
            hover:bg-gradient-to-bl focus:ring-4 
            focus:outline-none focus:ring-purple-300 
            dark:focus:ring-blue-800 font-medium rounded-lg 
            text-sm px20 py-2.5 text-center mr-0 mb-2">S'inscrire</button>
</div>

  <br> 
  <div class=" grid grid-cols-3 gap-3 content-evenly ...">
    <div>
        <hr class="w-18 h-2 place-content-center">
    </div>
      <div>
          <small>Inscrivez-vous</small>
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
      <small>
      Vous avez déjà un compte ? connectez-vous
      <router-link to="/login" class="text-rose-500">Login</router-link>
      </small>
  </div>
</div>

</template>

<script>
import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth';


export default {
  name: "RegisterView",
  data() {
    return {
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
        }) },

      }
    }
</script>
