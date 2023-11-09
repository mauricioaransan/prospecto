<template>
    <h1>Register</h1>
    <v-card class="pa-4 logincard" color="transparent">
        <v-row class="ma-0">
            <v-col cols="7">
                <v-select @update:menu="changeUsuarios()" v-model="empresa" :items="['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6']"></v-select>
            </v-col>
            <v-col cols="7">
                <v-select :items="usuarios" v-model="usuario"></v-select>
            </v-col>
        </v-row>
    </v-card>
    <v-btn @click="returnpage()" color="blue">
        volver
    </v-btn>
    <v-btn @click="showTable()" color="blue">
        mostrar tabla
    </v-btn>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    setup () {
        
        const store = useStore();
        const usuarios = ref(['']);
        const empresa = ref('');
        const usuario = ref('');

        const returnpage = () => {
            router.push('/')
        }

        const changeUsuarios = () => {
            usuario.value = '';
            usuarios.value = [];
            store.state.usuarios.forEach((user:any) =>{
                if(empresa.value === user.empresa){
                    usuarios.value.push(user.nombre)
                }
               
            })
        }

        const showTable = () => {
            router.push('/estadisticas')
        }
        
        return {
            returnpage,changeUsuarios,showTable,
            usuarios,empresa, usuario
        }
    }
})
</script>

<style scoped>

</style>