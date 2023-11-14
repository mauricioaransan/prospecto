<template>
  <v-sheet class="homeCard pa-6" color="transparent" elevation="1" :style="smAndDown?'width: 95%; height:320px':'width:80%; height:200px'">
    <v-row class="ma-0 mt-9" justify="center" >
        <v-btn :block="smAndDown" @click="showLogin()" :class="smAndDown ? 'ma-4' : 'mr-8'"  color="green">
          Login
        </v-btn>
        <v-btn :block="smAndDown" @click="showRegister()" :class="smAndDown ? 'ma-4' : 'mx-8'"  color="green">
          Register
        </v-btn>
        <v-btn :block="smAndDown" @click="showEstadisticas()" :class="smAndDown ? 'ma-4' : 'ml-8'" color="green">
          Estadisticas
        </v-btn>
    
    </v-row>
  </v-sheet>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { useDisplay } from 'vuetify'

export default defineComponent({
  name: 'HomeView',

  components: {
  },

  setup(){

    const { smAndDown } = useDisplay();

    const showLogin = () => {
      router.push('/login')
    }
    const showRegister = () => {
      router.push('/register')
    }
    const showEstadisticas = () => {
      router.push('/estadisticas')
    }

    return{
      showLogin,showRegister,showEstadisticas,
      smAndDown,
    }
  }
});
</script>

<style>
.v-main {
  background: linear-gradient(154deg, #c8fff2 25% , #06c6af 65%, #029f8f);
}
.homeCard{
  /* width: 60%; */
  /* height: 330px; */
  margin: 200px auto;
  border-radius: 20px;
  border: 4px solid white;

}
</style>
