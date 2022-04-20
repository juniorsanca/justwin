<template>
  <div class="home">
    
    <div>
        <div class="px-1 py-2.5 text-center mr-0 mb-2">
        <div>
            <img alt="Vue logo" src="../public/assets/img/justwin.gif">
        </div>
        <div>
            <img alt="Vue logo" src="../public/assets/img/tv-nft.gif">
        </div><br>

        <div class="grid grid-cols-2 flex space-x-2">
         
              <button
                  type="button"
                  class="
                  font-sans text-center font-bold shadow-lg 
                  shadow-cyan-500/50 placeholder-white
                  bg-black bg-opacity-100 rounded-full 
                  border border-cyan-300 p-2 mb-6
                  text-white outline-none
                  "
                >PLAY</button>
              
              <button
                type="button"
                class="
                  font-sans text-center font-bold shadow-lg 
                  shadow-pink-500/50 placeholder-white
                  bg-black bg-opacity-100 rounded-full 
                  border border-pink-500 p-2 mb-6
                  text-white outline-none
                    "
              >
              <router-link to="/ranking" class="text-white">RANKINGS</router-link>
              </button>
          </div>

          <div class="grid grid-cols-2 flex space-x-2">
              <button
                type="button"
                class="
                        font-sans text-center font-bold shadow-lg 
                        shadow-pink-500/50 placeholder-white
                        bg-black bg-opacity-100 rounded-full 
                        border border-pink-500 p-2 mb-6 
                        text-white outline-none
                        "
              >HOW TO PLAY</button>

              <button
                type="button"
                @click="logout"
                class="
                  font-sans text-center font-bold shadow-lg 
                  shadow-pink-500/50 placeholder-white
                  bg-black bg-opacity-100 rounded-full border 
                  border-pink-500 p-2 mb-6 text-white
                  outline-none
                  " 
              >EXIT</button>          

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
