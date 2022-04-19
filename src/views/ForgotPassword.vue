<template>
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
            v-model="user.email"
            type="email" 
            name="email">
        </div>
        <br>

        <div>
        <button
        type="forgetPassword"
        @click="forgetPassword"
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
        >Reset password</button><br>        
        </div>
        
      </div>
</template>

<script>
import firebase from 'firebase/compat/app';

export default {
  name: 'ForgotPassword',
  data() {
    return {
      user: {
        email: "",
      },
    };
  },
  methods: {
    forgetPassword() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.user.email)
        .then(() => {
          alert("Check your registered email to reset the password!");
          this.user = {
            email: "",
          };
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>
