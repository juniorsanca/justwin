<template>
  <div>
    <h3>Register</h3>
    <input type="text" v-model="email" /><br />
    <input type="password" v-model="password"/><br/><br>
    <button @click="Register">Connection</button><br>
    <button @click="googleConnect"> google </button><br>
    <button @click="facebookConnect"> facebook </button><br>
    <button @click="twitterConnect"> twitter </button>


    <p>You have an account ? You can connect <router-link to="/login">Login</router-link></p>
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
