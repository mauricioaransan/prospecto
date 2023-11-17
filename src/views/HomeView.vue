<template>
  <EstadisticasView v-if="drawerView === 'estadisticas'"/>
  <RegisterView     v-if="drawerView === 'register'"/>
  <UserDataView     v-if="drawerView === 'userdata'"/>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, computed, onMounted, watch } from 'vue';
import { useDisplay } from 'vuetify';

import EstadisticasView from '@/views/EstadisticasView.vue';
import RegisterView from '@/views/RegisterView.vue';
import UserDataView from '@/views/UserDataView.vue';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'HomeView',

  components: {
    EstadisticasView,
    RegisterView,
    UserDataView,
  },


  setup(){

    const { smAndDown } = useDisplay();

    const store = useStore();

    const drawerView = computed(()=> store.state.viewPage);


    watch(drawerView,(p:string,a:string)=>{
      p===a ? console.log('hi') : null;
      if(p === 'salir') {
        router.push('/')
        store.commit('hiddenDrawer')
      }
    })

    // const showLogin = () => {
    //   router.push('/login')
    // }
    // const showRegister = () => {
    //   router.push('/register')
    // }
    // const showEstadisticas = () => {
    //   router.push('/estadisticas')
    // }

    onMounted(() => {
      store.commit('showDrawer')
    })


    return{
      // showLogin,showRegister,showEstadisticas,
      smAndDown,drawerView,
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
