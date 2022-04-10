<template>
  <div>
    <h3>Register</h3>
    <input type="text" v-model="email" /><br />
    <input type="password" v-model="password"/><br />
    <button @click="Register">Connection</button>
    <p>You have an account ? You can connect <router-link to="/login">Login</router-link></p>
  </div>
</template>

<script>
//import * as firebase from "firebase/app";
//import firebase from "firebase/app"
import firebase from 'firebase/compat/app'; 
//import 'firebase/compat/auth';

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
        firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
          (firebaseUser) => { 
            console.log("user value is", firebaseUser)
            this.$router.replace('home')
            
             }, 
             (err) => {
                alert('Oops. ' + err.message) 
          }
        );
     }
  }
}
</script>
