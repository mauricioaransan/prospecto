<template>
    <h1>Estadisticas</h1>
    <v-select @update:menu="changeUsuarios()" v-model="empresa" :items="['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6']"></v-select>
    <Vue3EasyDataTable
    theme-color="#0e2f5a"
    show-index
    :headers="HEADERS"
    :items="arrayTable"
    :rows-per-page="6"
    >         
    </Vue3EasyDataTable>
    <v-btn @click="returnpage()" color="blue">
        volver
    </v-btn>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';

import Vue3EasyDataTable    from 'vue3-easy-data-table';

export default defineComponent({
    components:{
        Vue3EasyDataTable,
    },
    setup () {
        
        const store = useStore();
        const usuarios = ref(['']);
        const empresa = ref('');
        const usuario = ref('');
        const HEADERS = ref( [] );
        const arrayTable:any = ref([])

        const returnpage = () => {
            router.push('/')
        }

        const changeUsuarios = () => {
            usuario.value = '';
            usuarios.value = [];
            arrayTable.value = [];
            let header:any = [];
            store.state.usuarios.forEach((user:any) =>{
                header = [{
                    text: 'Usuario',
                    value: 'usuario',
                    sortable:true,
                }];
                if(empresa.value === user.empresa){
                    if(user.empresa === 'Empresa1'){
                        
                        let userFinal = user.nombre;
                        let cursos:any = {
                            usuario : userFinal,
                        }

                        user.cursos.forEach((curso:any) => {
                           cursos[curso.name] = curso.nota;
                           header.push({                            
                            text: curso.name,
                            value:curso.name,
                            sortable:true,
                           })
                        })

                        // console.log(cursos)

                        arrayTable.value.push(cursos);
                        
                       
                    }
                    
                    console.log(header)
            HEADERS.value = header;
                }

            })
            console.log(arrayTable.value)
            
        }
        
        return {
            returnpage,changeUsuarios,
            HEADERS,arrayTable,
            usuarios,empresa, usuario
        }
    }
})
</script>

<style scoped>

</style>