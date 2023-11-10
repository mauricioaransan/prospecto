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
                <v-text-field 
                label="Curso 1" 
                v-model="curso1" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field 
                label="Curso 2" 
                v-model="curso2" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field 
                label="Curso 3" 
                v-model="curso3" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field 
                label="Curso 4" 
                v-model="curso4" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                ></v-text-field>
            </v-col>
            <v-col cols="6">
                <v-text-field 
                label="Curso 5" 
                v-model="curso5" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                ></v-text-field>
            </v-col>            
        </v-row>
        <v-row class="ma-0" justify="center">
            <v-col cols="9">
                <v-btn @click="guardarNota()" block
                :disabled="curso1 === undefined || curso2 === undefined || curso3 === undefined || curso4 === undefined || curso5 === undefined"
                >guardar</v-btn>
            </v-col>
        </v-row>

        <v-snackbar
        v-model="snackbarAdd"
        :timeout="2000"
        color="success"
        >            
        Notas Agregadas exitosamente
        </v-snackbar>
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
import { defineComponent, ref, Ref } from 'vue';
import { useStore } from 'vuex';

export default defineComponent({
    setup () {
        
        const store = useStore();
        const usuarios = ref(['']);
        const empresaReg = ref('');
        const usuario = ref('');

        const curso1:Ref<number|undefined> = ref();
        const curso2:Ref<number|undefined> = ref();
        const curso3:Ref<number|undefined> = ref();
        const curso4:Ref<number|undefined> = ref();
        const curso5:Ref<number|undefined> = ref();

        const rules = ref(
            [
            (value:any) => !!value || 'Este campo es requerido',
            (value:any) => !!value && value <= 20 || 'No ingresar valores mayores a 20'
            ]
        )

        const snackbarAdd = ref(false);

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

            curso1.value  = undefined;
            curso2.value  = undefined;
            curso3.value  = undefined;
            curso4.value  = undefined;
            curso5.value  = undefined;
            usuario.value = '';

            snackbarAdd.value = true;
        }
        
        return {
            returnpage,changeUsuarios,showTable,guardarNota,
            curso1, curso2, curso3, curso4, curso5,
            rules,
            usuarios,empresaReg, usuario, snackbarAdd
        }
    }
})
</script>

<style scoped>

</style>