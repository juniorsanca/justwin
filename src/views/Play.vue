<template>
  <div>
    <h3>Play</h3>
    <input type="text"  /><br />
    <input type="password" /><br />
    <button >Connection</button>
    <p>
      You don't have an account ? You can create
      <router-link to="/register">Register</router-link>
    </p>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "LoginView",
  data() { },
  methods: { },
};
</script>
