<template>
  <v-btn @click="showLogin()">
    Login
  </v-btn>
  <v-btn @click="showRegister()">
    Register
  </v-btn>
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
  background-color: rgb(59, 54, 54);
}
</style>
