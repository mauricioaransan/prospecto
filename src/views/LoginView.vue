<template>
    <div class=content-register>
        <v-card class="pa-4 mt-10 mb-4 logincard" :style="smAndDown?'width: 95%':'width:80%'">
            <v-form fast-fail v-model="refFormulario">
                <v-row class="ma-0" justify="center">
                    <div :class="smAndDown?'CardTitleXS':'CardTitle'"> Ficha de usuario </div>
                </v-row>
                <v-row class="ma-0">
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6" class="px-0">
                        <h4>Nombres</h4>
                        <v-text-field :rules="[rules.required]" prepend-icon="mdi-account" class="selectItem mt-1 mb-3" variant="outlined" v-model="nombre">
                        </v-text-field>  
                        <h4>Apellidos</h4>
                        <v-text-field :rules="[rules.required]" prepend-icon="mdi-ticket-account" class="selectItem mt-1 mb-3" variant="outlined" v-model="apellido">
                        </v-text-field>   
                        <h4>Correo</h4>
                        <v-text-field :rules="[rules.required,rules.email]" prepend-icon="mdi-email" class="selectItem mt-1 mb-3" variant="outlined" v-model="correo">
                        </v-text-field>  
                        <h4>Empresa</h4>
                        <v-select
                        :rules="[rules.required]"
                        prepend-icon="mdi-office-building"
                        class="selectItem mt-1 mb-3"
                        v-model="empresa"
                        :items="['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6']"
                        variant="outlined"
                        ></v-select> 
                        <h4>Documentos</h4>   
                        <v-file-input class="selectItem mt-1 mb-3" variant="outlined" v-model="documento" label="Registre su Documento"></v-file-input>          
                    </v-col>
                    <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6" align-self="center">
                        <v-img class="imgLogin" src="@/assets/imgprincipal.jpg"></v-img>
                    </v-col>
                    
                    <v-col cols="12" class="mt-8">
                        <v-btn class="btnEnviar" @click="guardar()" width="200" color="#029f8f"  prepend-icon="mdi-send"
                        :disabled="!refFormulario"
                        >Enviar</v-btn>                   
                    </v-col>
                </v-row>    
            </v-form>        
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
import { defineComponent, ref, computed } from 'vue'
import { useStore } from 'vuex';
import { useDisplay } from 'vuetify';

export default defineComponent({
    setup () {

        const curso     = ref('');
        const nombre    = ref('');
        const apellido  = ref('');
        const correo    = ref('');
        const empresa   = ref('');
        const documento = ref([]);

        const refFormulario = ref(false);
        const snackbarAdd = ref(false);

        const {smAndDown} = useDisplay();

        const store = useStore();

        const userLength = computed(()=> store.state.usuarios.length)
        
        const returnpage = () => {
            router.push('/')
        }
        const guardar = () => {
            let superUsuario = {
                id: userLength.value+1,
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
        }

        const rules         = ref({
            required:(value:string) => !!value || 'Este campo es requerido.',
            email : (value:string) => {
            const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            return pattern.test(value) || 'Correo Invalido'
          },
        });

        return {
            curso, nombre, apellido, correo, empresa, documento,
            snackbarAdd, smAndDown,
            rules,
            refFormulario,
            returnpage, guardar,
        }
    }
})
</script>

<style>
.logincard{
    margin: 0 auto;
    /* width: 80%; */
    border-radius: 20px;
    border: 3px solid rgb(6, 127, 117);
    background-color: #effefb !important;
}

.CardTitle{
    font-size: 60px;
    font-weight: bold;
}

.CardTitleXS{
    font-size: 40px;
    font-weight: bold;
    text-shadow: 3px 3px 5px grey;
}

.imgLogin{
    border-radius: 40px;
    width: 90%;
    margin: 0 auto;
    box-shadow: 4px 7px 2px 4px rgba(0, 0, 0, 0.2);
}
.selectItem .v-field__outline .v-field__outline__start{
    /* border-radius: 20px !important; */
    border-start-start-radius: 20px !important;  
    border-end-start-radius: 20px;
}

.selectItem .v-field__outline .v-field__outline__end{
    border-start-end-radius: 20px;
    border-end-end-radius: 20px;
}


.btnEnviar{
    display: flex;
    overflow: hidden;    
    align-items: center;
    transition: all 0.2s;
    margin: 0 auto;
}

.btnEnviar:hover{
    transform: scale(1.10);
    box-shadow: 7px 5px 30px -7px #029f8f;
}

.btnEnviar .v-btn__prepend{
    transform: rotate(-45deg);
    transform-origin: center center;
    transition: 0.5s;
}

.btnEnviar:hover .v-btn__prepend{
    transform: translateX(2.3rem) rotate(0deg);
    animation: fly-1 ease-in-out infinite alternate;
}

.btnEnviar .v-btn__content{
    transition: all 0.5s ease-in-out;
    margin-top: 5px;
}

.btnEnviar:hover .v-btn__content{
    transform: translateX(10rem);
}

.btnEnviar:active{
    transform: scale(0.95);
}


@keyframes fly-1 {
  from {
    transform: translateY(0.1em);
  }

  to {
    transform: translateY(-0.1em);
  }
}
</style>