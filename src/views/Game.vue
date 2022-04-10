<template>
  <div>
    <h3>Game</h3>
    <input type="text" /><br />
    <input type="password" /><br />
    <button>Connection</button>
    <p>
      You don't have an account ? You can create
      <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
//import firebase from "firebase/compat/app";

export default {
  name: "GameView",
  data() {},
  methods: {},
};
</script>
