<template>
    <div>
        <h3>Login</h3>
        <input type="text" v-model="email"><br>
        <input type="password" v-model="password"><br>
        <button @click="login">Connection</button>
        <p>You don't have an account ? You can create <router-link to="/register">Register</router-link></p>
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
        login: function() {
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((firebaseUser) => { 
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