<template>
  <v-sheet class="homeCard pa-6" color="transparent" elevation="1">
    <v-row class="ma-0 mt-10" justify="center" >
        <v-btn @click="showLogin()" class="mr-8" color="green">
          Login
        </v-btn>
        <v-btn @click="showRegister()" class="ml-8"  color="green">
          Register
        </v-btn>
    
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'HomeView',

  components: {
  },

  data(){

    const showLogin = () => {
      router.push('/login')
    }
    const showRegister = () => {
      router.push('/register')
    }

    return{
      showLogin,showRegister
    }
  }
});
</script>

<style>
.v-main {
  /* background-color: rgb(59, 54, 54); */
}
.homeCard{
  width: 60%;
  height: 200px;
  margin: 200px auto;
  border-radius: 20px;
  border: 4px solid white;

}
</style>
