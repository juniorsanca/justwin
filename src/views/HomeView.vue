<template>
  <div class="home">
    
    <div>
        <div class="px-1 py-2.5 text-center mr-0 mb-2">
        <div>
            <img alt="Vue logo" src="../public/assets/img/justwin.gif">
        </div>
        <div>
            <img alt="Vue logo" src="../public/assets/img/discord.png">
        </div>
<br>
        <div class="grid grid-cols-2 flex justify-center">
          <button
              type="button"
              class="text-white hover:text-white 
              border border-cyan-700 hover:bg-cyan-800 
              focus:ring-4 focus:outline-none focus:ring-cyan-300 
              font-medium rounded-lg text-sm px-5 py-2.5 text-center
               mr-2 mb-2 dark:border-cyan-500 dark:text-cyan-500 
               dark:hover:text-white dark:hover:bg-blue-600 dark:focus:ring-cyan-800"
            >Play</button>

          <button
            type="button"
            class="text-white hover:text-white border
             border-cyan-700 hover:bg-blue-800 focus:ring-4
             focus:outline-none focus:ring-blue-300 font-medium 
             rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
             dark:border-blue-500 dark:text-blue-500 dark:hover:text-white
              dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >
          <router-link to="/ranking" class="text-white">Rankings</router-link>

          </button>

          <button
            type="button"
            class="text-white hover:text-white border border-cyan-700 
            hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 
            font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
            dark:border-blue-500 dark:text-blue-500 dark:hover:text-white 
            dark:hover:bg-blue-600 dark:focus:ring-blue-800"
          >How to play ?</button>

          <button
            type="button"
            @click="logout"
            class="text-white hover:text-white border border-cyan-700 
            hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300
             font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 
             dark:border-blue-500 dark:text-blue-500 dark:hover:text-white
              dark:hover:bg-blue-600 dark:focus:ring-blue-800"
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
    }
  },
}
</script>
