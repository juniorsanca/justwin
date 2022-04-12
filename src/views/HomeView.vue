<template>
  <div class="home">
    <img alt="Vue logo" src="../public/assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <button @click="logout">Logout</button>

  </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    }
  },
}
</script>
