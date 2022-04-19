<template>
  <div class="home">
    
    <div>
        <div class="px-1 py-2.5 text-center mr-0 mb-2">
        <div>
            <img alt="Vue logo" src="../public/assets/img/justwin.gif">
        </div>
        <div>
            <img alt="Vue logo" src="../public/assets/img/discord.png">
        </div><br>

        <div class="grid grid-cols-2 flex justify-center">
          <button
              type="button"
              class="
                font-sans text-white text-base 
                shadow-lg shadow-pink-500/50 
                bg-dark-200 border
                border-pink-500 hover:bg-gray-900 
                focus:outline-none placeholder-white
                rounded-full focus:ring-4 
                focus:ring-gray-300 font-medium 
                rounded-lg text-sm
                px-5 py-2.5 mr-2 mb-2 
                dark:bg-gray-800 dark:hover:bg-gray-700
                dark:focus:ring-gray-700
                "
            >Play</button>

          <button
            type="button"
            class="
                font-sans text-white text-base 
                shadow-lg shadow-pink-500/50 
                bg-dark-200 border
                border-pink-500 hover:bg-gray-900 
                focus:outline-none placeholder-white
                rounded-full focus:ring-4 
                focus:ring-gray-300 font-medium 
                rounded-lg text-sm
                px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800
                 dark:hover:bg-gray-700
                dark:focus:ring-gray-700
                "
          >
          <router-link to="/ranking" class="text-white">Rankings</router-link>

          </button>

          <button
            type="button"
            class="
                font-sans text-white text-base 
                shadow-lg shadow-pink-500/50
                bg-dark-200 border
                border-pink-500 hover:bg-gray-900 
                focus:outline-none placeholder-white
                rounded-full focus:ring-4 
                focus:ring-gray-300 font-medium 
                rounded-lg text-sm
                px-5 py-2.5 mr-2 mb-2 
                dark:bg-gray-800 dark:hover:bg-gray-700
                dark:focus:ring-gray-700
                "
          >How to play ?</button>

          <button
            type="button"
            @click="logout"
            class="
              font-sans text-white text-base shadow-lg 
              shadow-pink-500/50 bg-dark-200
              border border-pink-500 hover:bg-gray-900 
              focus:outline-none placeholder-white
              rounded-full focus:ring-4 focus:ring-gray-300
              font-medium rounded-lg text-sm
              px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 
              dark:hover:bg-gray-700
              dark:focus:ring-gray-700
              " 
          >Exit</button>
        </div>
    </div>
  </div>
  </div>
</template>

<script>
import firebase from 'firebase/compat/app'
//import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    //HomeView
  },
  methods: {
    logout: function () {
      firebase.auth().signOut().then(() => {
        this.$router.replace('login')
      })
    },
    
  },
}
</script>
