<template>
    <h1>Register</h1>
    <v-card class="pa-4 logincard" color="transparent">
        <v-row class="ma-0">
            <v-col cols="7">
                <v-select @update:menu="changeUsuarios()" v-model="empresaReg" :items="['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6']"></v-select>
            </v-col>
            <v-col cols="7">
                <v-select :items="usuarios" v-model="usuario"></v-select>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Curso 1" v-model="curso1"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Curso 2" v-model="curso2"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Curso 3" v-model="curso3"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Curso 4" v-model="curso4"></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field label="Curso 5" v-model="curso5"></v-text-field>
            </v-col>            
        </v-row>
        <v-row class="ma-0" justify="center">
            <v-col cols="9">
                <v-btn @click="guardarNota()" block>guardar</v-btn>
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
        const empresaReg = ref('');
        const usuario = ref('');

        const curso1 = ref(0);
        const curso2 = ref(0);
        const curso3 = ref(0);
        const curso4 = ref(0);
        const curso5 = ref(0);

        const returnpage = () => {
            router.push('/')
        }

        const changeUsuarios = () => {
            usuario.value = '';
            usuarios.value = [];
            store.state.usuarios.forEach((user:any) =>{
                if(empresaReg.value === user.empresa){
                    usuarios.value.push(user.nombre)
                }
               
            })
        }

        const showTable = () => {
            router.push('/estadisticas')
        }

        const guardarNota = () => {
            // console.log(store.state.usuarios)
            store.state.usuarios.find(({nombre,empresa}:any)=>{
                if(usuario.value === nombre && empresaReg.value === empresa){
                    let cursos = [
                    {name : 'Curso1', nota: curso1.value},
                    {name : 'Curso2', nota: curso2.value},
                    {name : 'Curso3', nota: curso3.value},
                    {name : 'Curso4', nota: curso4.value},
                    {name : 'Curso5', nota: curso5.value},
                    ]
                    let finalObj = {
                        cursos,
                        nombre,
                        empresa
                    }
                    store.commit('addCursos',finalObj)
                    // console.log('hay un usuario')
                }
            })
        }
        
        return {
            returnpage,changeUsuarios,showTable,guardarNota,
            curso1, curso2, curso3, curso4, curso5,
            usuarios,empresaReg, usuario
        }
    }
})
</script>

<style scoped>

</style>