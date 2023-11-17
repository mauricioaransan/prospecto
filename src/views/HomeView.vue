<template>
  <EstadisticasView v-if="drawerView === 'estadisticas'"/>
  <RegisterView     v-if="drawerView === 'register'"/>
  <UserDataView     v-if="drawerView === 'userdata'"/>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent } from 'vue';
import { useDisplay } from 'vuetify';

import EstadisticasView from './EstadisticasView.vue';
import RegisterView from './RegisterView.vue';
import UserDataView from './UserDataView.vue';

export default defineComponent({
  name: 'HomeView',

  components: {
    EstadisticasView,
    RegisterView,
    UserDataView,
  },

  props:{
    drawerView:{
      required: true,
      type:String
    }
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
