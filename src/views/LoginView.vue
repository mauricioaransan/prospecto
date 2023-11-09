<template>
    <h1>
        Login
    </h1>
    <div class=content-register>
        <v-card class="pa-4 logincard" color="transparent">
            <v-row class="ma-0">
                <v-col cols="6">
                    <v-select
                    v-model="curso"
                    label="Curso"
                    :items="['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4', 'Curso 5', 'Curso 6']"
                    ></v-select>                  
                </v-col>
                <v-col cols="6">
                    <v-text-field label="Nombres" v-model="nombre">
                    </v-text-field>                    
                </v-col>
                <v-col cols="6">
                    <v-text-field label="Apellidos" v-model="apellido">
                    </v-text-field>                    
                </v-col>
                <v-col cols="6">
                    <v-text-field label="Correo" v-model="correo">
                    </v-text-field>                    
                </v-col>
                <v-col cols="6">
                    <v-select
                    v-model="empresa"
                    label="Empresa"
                    :items="['Empresa 1', 'Empresa 2', 'Empresa 3', 'Empresa 4', 'Empresa 5', 'Empresa 6']"
                    ></v-select>                   
                </v-col>
                <v-col cols="6">
                    <v-file-input v-model="documento" label="Registre su Documento"></v-file-input>                   
                </v-col>
                <v-col cols="12">
                    <v-btn @click="guardar()" block>Guardar</v-btn>                   
                </v-col>
            </v-row>            
        </v-card>
    </div>
    <v-btn @click="returnpage()" color="blue">
        return
    </v-btn>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent,ref } from 'vue'
import { useStore } from 'vuex';

export default defineComponent({
    setup () {

        const curso     = ref('');
        const nombre    = ref('');
        const apellido  = ref('');
        const correo    = ref('');
        const empresa   = ref('');
        const documento = ref([]);

        const store = useStore();
        
        const returnpage = () => {
            router.push('/')
        }
        const guardar = () => {
            let superUsuario = {
                nombre : nombre.value,
                apellido : apellido.value,
                correo : correo.value,
                curso : curso.value,
                empresa : empresa.value
            }

            store.commit('listarUsuarios', superUsuario);
        }

        return {
            curso,    
            nombre,   
            apellido, 
            correo,   
            empresa,  
            documento,
            returnpage, guardar,
        }
    }
})
</script>

<style>
.logincard{
    margin: 0 auto;
    width: 60%;
    border-radius: 20px;
    border: 2px solid grey;
}
</style>