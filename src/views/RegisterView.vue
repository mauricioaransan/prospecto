<template>
    <v-card class="pa-4 my-4 logincard" color="#effefb" :style="smAndDown?'width: 95%':'width:80%'">
        <v-row class="ma-0" justify="center">
            <div :class="smAndDown?'CardTitleXS':'CardTitle'"> Registro de Notas </div>
        </v-row>
        <v-row class="ma-0">
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" xll="6">
                <h4>Seleccione su Empresa</h4>
                <v-select variant="outlined" hide-details class="selectItem mt-2 mb-4" @update:menu="changeUsuarios()" v-model="empresaReg" :items="['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6']"></v-select>
            </v-col>
            <v-col  cols="12" sm="12" md="6" lg="6" xl="6" xll="6">
                <h4>Seleccione al trabajador</h4>
                <v-select variant="outlined" hide-details class="selectItem mt-2 mb-4" :disabled="empresaReg=== ''" :items="usuarios" item-title="text" item-value="value" v-model="usuario"></v-select>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" xll="6" class="my-3">
                <v-text-field 
                class="selectItem"
                label="Curso 1" 
                v-model="curso1" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                variant="outlined"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" xll="6" class="my-3">
                <v-text-field 
                class="selectItem"
                label="Curso 2" 
                v-model="curso2" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                variant="outlined"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" xll="6" class="my-3">
                <v-text-field 
                class="selectItem"
                label="Curso 3" 
                v-model="curso3" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules"    
                variant="outlined"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" xll="6" class="my-3">
                <v-text-field 
                class="selectItem"
                label="Curso 4" 
                v-model="curso4" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                variant="outlined"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" xll="6" class="my-3">
                <v-text-field 
                class="selectItem"
                label="Curso 5" 
                v-model="curso5" 
                :disabled="usuario===''" 
                type="number" 
                hide-spin-buttons
                :rules="rules" 
                variant="outlined"
                ></v-text-field>
            </v-col>            
        </v-row>
        <v-row class="ma-0" justify="center">
            <!-- :disabled="curso1 === undefined || curso2 === undefined || curso3 === undefined || curso4 === undefined || curso5 === undefined" -->
            <v-btn 
            class="btnGuardar"
            prepend-icon="mdi-content-save"
            @click="guardarNota()"
            color="#029f8f"
            >
            guardar
            </v-btn>
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
import { useDisplay } from 'vuetify';

export default defineComponent({
    setup () {
        
        const store = useStore();
        const usuarios:any = ref([]);
        const empresaReg = ref('');
        const usuario = ref('');

        const { smAndDown } = useDisplay();

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
                    usuarios.value.push({text:`${user.nombre} ${user.apellido}`, value:user.id})
                }
               
            })
        }

        const showTable = () => {
            router.push('/estadisticas')
        }

        const guardarNota = () => {
            // console.log(store.state.usuarios)
            store.state.usuarios.find(({id,nombre,empresa}:any)=>{
                if(usuario.value === id && empresaReg.value === empresa){
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
            rules, smAndDown,
            usuarios,empresaReg, usuario, snackbarAdd
        }
    }
})
</script>

<style>
.selectItem .v-input__control{
    border-radius: 20px;
    background-color: white;
}
.btnGuardar{
    width: 200px;
    margin: 0 auto;
    transition: .4s;
}

.btnGuardar:hover{
   transform: scale(1.1);
   transition: .4s;
   box-shadow: 7px 5px 30px -7px #029f8f;
}

.btnGuardar:active{
    transform: scale(.95);
    transition: .4s;
}

.btnGuardar:hover .v-btn__prepend{
    animation: spin 1s linear infinite
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  25% {
    transform: rotate(-15deg);
  }

  50% {
    transform: rotate(0deg);
  }

  75% {
    transform: rotate(15deg);
  }

  100% {
    transform: rotate(0deg);
  }
}
</style>