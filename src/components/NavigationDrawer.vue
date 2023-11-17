<template>

    <v-navigation-drawer
    v-if="showDrawer"
    expand-on-hover
    rail
    :permanent="!smAndDown"
    
    >
      <v-list>
        <v-list-item
        v-if="typeUser==='user'"
          prepend-avatar="https://randomuser.me/api/portraits/women/85.jpg"
          title="Sandra Adams"
          subtitle="sandra_a88@gmailcom"
        ></v-list-item>
        <v-list-item
        v-if="typeUser==='admin'"
          prepend-avatar="https://randomuser.me/api/portraits/women/60.jpg"
          title="Maria Palacios"
          subtitle="maria.pal@gmailcom"
        ></v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list density="compact" nav>
        <v-list-item v-if="typeUser==='user'" @click="cambiarView('userdata')" prepend-icon="mdi-account-search" title="Info. Usuario" value="myfiles"></v-list-item>
        <v-list-item v-if="typeUser==='admin'" @click="cambiarView('register')" prepend-icon="mdi-file-document-multiple" title="Notas" value="starred"></v-list-item>
        <v-list-item v-if="typeUser==='admin'" @click="cambiarView('estadisticas')" prepend-icon="mdi-file-chart" title="Estadisticas" value="shared"></v-list-item>
        <v-list-item  @click="cambiarView('salir')" prepend-icon="mdi-home-import-outline" title="Salir" value="loguot"></v-list-item>
      </v-list>
    </v-navigation-drawer>

  </template>
<script lang="ts">
import { defineComponent, ref, computed, onMounted } from 'vue'
import { useStore } from 'vuex';
import { useDisplay } from 'vuetify';


export default defineComponent({
    components:{
        // HomeView
    },
    setup () {

      const store = useStore();

      const viewPage = ref('');

      const {smAndDown} = useDisplay();

      const showDrawer = computed(()=> store.state.showDrawer);
      const typeUser = computed(() => store.state.typeUser);

      const cambiarView = (view:string) =>{
        store.commit('changeViewPage', view);
      }


      onMounted(() => {
        store.commit('hiddenDrawer')
      })

        return {
            viewPage,
            smAndDown,
            showDrawer,typeUser,
            cambiarView
        }
    }
})
</script>