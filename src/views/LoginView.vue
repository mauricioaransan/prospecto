<template>
    <div class="loginPage">
        <v-card class="pa-4 mb-4 LoginCard" width="650" color="#effefb">
            <v-form fast-fail v-model="formLogin">
                <v-row class="ma-0" justify="center">
                    <div :class="smAndDown?'CardTitleXS':'CardTitle'"> Login </div>
                </v-row>
                <v-row class="ma-0">
                    <v-col cols="12" class="px-0">
                        <h4>Usuario</h4>
                        <v-text-field 
                        v-model="usuario"
                        class="selectItem mt-1 mb-3" 
                        placeholder="superusuario"
                        :rules="[rules.required]" 
                        variant="outlined" 
                        prepend-icon="mdi-account" 
                        >
                        </v-text-field>  
                        <h4>Contraseña</h4>
                        <v-text-field 
                        v-model="password"
                        class="selectItem mt-1 mb-3"
                        placeholder="password" 
                        :rules="[rules.required]" 
                        prepend-icon="mdi-lock" 
                        variant="outlined"
                        type="password" 
                        >
                        </v-text-field>            
                    </v-col>
                    
                    <v-col cols="12" class="mt-8">
                        <v-btn class="btnEnviar" @click="enviar()" width="200" color="#029f8f"  prepend-icon="mdi-send"
                        :disabled="!formLogin"
                        >Ingresar</v-btn>                   
                    </v-col>
                </v-row>    
            </v-form>        
        </v-card>
    </div>

    <v-snackbar
        v-model="snackbarFound"
        :timeout="2000"
        color="success"
        >            
        Usuario Registrado
    </v-snackbar>
    <v-snackbar
        v-model="snackbarNotFound"
        :timeout="2000"
        color="red"
        >            
        Usuario Sin Registrar
    </v-snackbar>
</template>

<script lang="ts">
import router from '@/router'
import { defineComponent, ref } from 'vue'
import { useStore } from 'vuex';
import { useDisplay } from 'vuetify';

export default defineComponent({
    setup () {

        const curso     = ref('');
        const usuario    = ref('');
        const password  = ref('');
        const correo    = ref('');
        const empresa   = ref('');
        const documento = ref([]);

        const formLogin = ref(false);
        const snackbarFound = ref(false);
        const snackbarNotFound = ref(false);

        const {smAndDown} = useDisplay();

        const store = useStore();
        
        const returnpage = () => {
            router.push('/')
        }
        const enviar = () => {

            if(usuario.value === 'superusuario' && password.value === 'password'){
                snackbarFound.value = true;
                router.push('/userdata')
            }else{
                snackbarNotFound.value = true;
            }

        }

        const rules         = ref({
            required:(value:string) => !!value || 'Este campo es requerido.'
        });

        return {
            curso, usuario, password, correo, empresa, documento,
            snackbarFound, snackbarNotFound,
            smAndDown,
            rules,
            formLogin,
            returnpage, enviar,
        }
    }
})
</script>

<style>
.loginPage{
    height: 100vh;
    background: linear-gradient(90deg, #003330 0%, #077e73 50%,#003330 100%);
    padding-top: 80px;
}

.loginPage .btnEnviar:hover .v-btn__prepend{
    transform: translateX(3rem) rotate(0deg);
    animation: fly-1 ease-in-out infinite alternate;
}
.LoginCard{
    margin: 0 auto;
    border-radius: 30px;
    box-shadow: 3px 3px 10px rgba(0,0,0,.4);
}
</style>