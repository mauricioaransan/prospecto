<template>
    <h1>
        Login
    </h1>
    <div class=content-register>
        <v-card class="pa-4 logincard">
            <v-row class="ma-0">
                <!-- <v-col cols="6">
                    <v-select
                    v-model="curso"
                    label="Curso"
                    :items="['Curso 1', 'Curso 2', 'Curso 3', 'Curso 4', 'Curso 5']"
                    ></v-select>                  
                </v-col> -->
                <v-col cols="6" class="px-0">
                    <v-text-field class="loginInput my-3" label="Nombres" v-model="nombre" hide-details >
                    </v-text-field>  
                    <v-text-field label="Apellidos" v-model="apellido">
                    </v-text-field>   
                    <v-text-field label="Correo" v-model="correo">
                    </v-text-field>  
                    <v-select
                    v-model="empresa"
                    label="Empresa"
                    :items="['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6']"
                    ></v-select>    
                    <v-file-input v-model="documento" label="Registre su Documento"></v-file-input>          
                </v-col>
                <v-col cols="6">
                    <v-img class="imgLogin" src="@/assets/imgprincipal.jpg"></v-img>
                </v-col>
                
                <v-col cols="12" class="mt-8">
                    <v-btn @click="guardar()" block color="#b31d3f"
                    :disabled=" nombre==='' || apellido==='' || correo==='' || empresa===''"
                    >Guardar</v-btn>                   
                </v-col>
            </v-row>            
        </v-card>

        <v-snackbar
            v-model="snackbarAdd"
            :timeout="2000"
            color="success"
            >            
            Usuario agregado Exitosamente
        </v-snackbar>
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

        const snackbarAdd = ref(false);

        const store = useStore();
        
        const returnpage = () => {
            router.push('/')
        }
        const guardar = () => {
            let superUsuario = {
                nombre : nombre.value,
                apellido : apellido.value,
                correo : correo.value,
                cursos : curso.value,
                empresa : empresa.value
            }

            store.commit('listarUsuarios', superUsuario);

            snackbarAdd.value = true;

            curso.value     = '';   
            nombre.value    = '';  
            apellido.value  = ''; 
            correo.value    = '';   
            empresa.value   = '';  
            documento.value = [];

            // console.log(store.state.usuarios); 
        }

        return {
            curso,    
            nombre,   
            apellido, 
            correo,   
            empresa,  
            documento,
            snackbarAdd,
            returnpage, guardar,
        }
    }
})
</script>

<style>
.logincard{
    margin: 0 auto;
    width: 80%;
    border-radius: 20px;
    border: 3px solid rgba(74, 10, 27,0.5);
    background-color: #fbd0d5 !important;
}
.imgLogin{
    border-radius: 40px;
    width: 90%;
    margin: 0 auto;
    box-shadow: 4px 7px 2px 4px rgba(0, 0, 0, 0.2);
}
.loginInput{
    border-radius: 20px !important;
}
</style>