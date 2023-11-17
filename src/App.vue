<template>
  <v-app>
    <v-layout>
      <NavigationDrawerVue/>
      <v-main>
          <router-view/>        
      </v-main>
    </v-layout>      
  </v-app>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import NavigationDrawerVue from '@/components/NavigationDrawer.vue';

export default defineComponent({
  name: 'App',
components:{
  NavigationDrawerVue
},
  data () {
    return {
      //
    }
  },
})
</script>
