<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          expand-on-hover
          rail
          :permanent="!smAndDown"
        >
          <v-list>
            <v-list-item
              prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
              title="Sandra Adams"
              subtitle="sandra_a88@gmailcom"
            ></v-list-item>
          </v-list>
  
          <v-divider></v-divider>
  
          <v-list density="compact" nav>
            <v-list-item @click="cambiarImg('userdata')" prepend-icon="mdi-folder" title="My Files" value="myfiles"></v-list-item>
            <v-list-item @click="cambiarImg('estadisticas')" prepend-icon="mdi-account-multiple" title="Shared with me" value="shared"></v-list-item>
            <v-list-item @click="cambiarImg('register')" prepend-icon="mdi-star" title="Starred" value="starred"></v-list-item>
          </v-list>
        </v-navigation-drawer>  
        <v-main style="height: 100vh;">
            {{ listitem1 }}
            <HomeView :drawer-view="listitem1"/>
        </v-main>
      </v-layout>
    </v-card>
  </template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex';
import { useDisplay } from 'vuetify';

import HomeView from '@/views/HomeView.vue'


export default defineComponent({
    components:{
        HomeView
    },
    setup () {

        const listitem1 = ref('hlla papu8')
        const listitem2 = ref('')
        const listitem3 = ref('')

        const {smAndDown} = useDisplay()

        const cambiarImg = (view:string) =>{
            // console.log(view)
            listitem1.value = view
        }



        return {
            listitem1,
            listitem2,
            listitem3,
            smAndDown,
            cambiarImg
        }
    }
})
</script>