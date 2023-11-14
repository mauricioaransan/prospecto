<template>
    <v-sheet class="cardEstadisticas pa-5" :style="smAndDown?'width: 95%':'width:80%'">
        <v-row class="ma-0" justify="center">
            <div :class="smAndDown?'CardTitleXS':'CardTitle'"> Resultado por Empresa </div>
        </v-row>
        <h4 class="mt-1 mb-3">Seleccione la Empresa </h4>
        <v-select  @update:menu="changeUsuarios()" v-model="empresa" :items="['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6']"></v-select>
        
        <div v-if="empresa!==''">
            <h4> Promedio de Usuarios </h4>
            <Vue3EasyDataTable
            theme-color="#0e2f5a"
            show-index
            :headers="HEADERS"
            :items="arrayTable"
            :rows-per-page="6"
            >     
            <template v-for="(item,i) in arrayCursos" :key="i" #[item]="arrayCurso">
                <div>
                    {{ arrayCurso[item.split("-")[1]] }} 
                    <span v-if="arrayCurso[item.split('-')[1]]>=11"> <v-icon color="green">mdi-thumb-up-outline</v-icon></span>
                    <span v-else><v-icon color="red">mdi-thumb-down-outline</v-icon></span>
                </div>
            </template>    
            <template  #item-promedio="item">
                <div> 
                    <span v-if="item.promedio>=55">
                        <v-chip prepend-icon="mdi-thumb-up-outline" color="green">
                            Aprobado
                        </v-chip> 
                    </span>
                    <span v-else>
                        <v-chip prepend-icon="mdi-thumb-down-outline" color="red">
                            Desaprobado
                        </v-chip> 
                    </span>
                </div>
            </template>    
            </Vue3EasyDataTable>
        </div>
    </v-sheet>
    <v-btn @click="returnpage()" color="blue">
        volver
    </v-btn>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, ref } from 'vue';
import { useStore } from 'vuex';
import { useDisplay } from 'vuetify';

import Vue3EasyDataTable    from 'vue3-easy-data-table';

export default defineComponent({
    components:{
        Vue3EasyDataTable,
    },
    setup () {
        
        const store = useStore();
        const empresa = ref('');
        const usuario = ref('');
        const HEADERS = ref( [] );
        const arrayTable:any = ref([]);
        const arrayCursos = ref(['item-Curso1','item-Curso2','item-Curso3','item-Curso4','item-Curso5']);
        const arrayGraph:any = ref({
            promedio:{
                aprobado: 0,
                desaprobado:0
            },
            cursos:{}
        });

        const { smAndDown } = useDisplay();

        const returnpage = () => {
            router.push('/')
        }

        const changeUsuarios = () => {
            usuario.value = '';
            arrayTable.value = [];
            let header:any = [];
            store.state.usuarios.forEach((user:any) =>{
                header = [{
                    text: 'Usuario',
                    value: 'usuario',
                    sortable:true,
                }];
                if(empresa.value === user.empresa){
                    if(typeof user.cursos === 'object'){
                        
                        let userFinal = user.nombre;
                        let cursos:any = {
                            usuario : userFinal,
                        }

                        let notatotal = 0 ;
                        user.cursos.forEach((curso:any) => {
                           cursos[curso.name] = curso.nota;
                           header.push({                            
                            text: curso.name,
                            value:curso.name,
                            sortable:true,
                           })
                           notatotal = notatotal + parseInt(curso.nota);
                           curso.nota >= 11 ? arrayGraph.value.cursos[curso.name]=+1 : arrayGraph.value.cursos[curso.name] =+11
                        })

                        cursos['promedio'] = notatotal;
                        notatotal >= 55 ? arrayGraph.value.promedio.aprobado =+ 1 : arrayGraph.value.promedio.desaprobado =+ 1;
                        
                        header.push({
                            text: 'Promedio',
                            value: 'promedio',
                            sortable:true,
                        })

                        // console.log(cursos)

                        arrayTable.value.push(cursos);
                       
                        
                       
                    }
                    // console.log(header)
                    HEADERS.value = header;
                }

            })
            // console.log(arrayTable.value)
            console.log(arrayGraph.value.cursos)
            
        }
        
        return {
            returnpage,changeUsuarios,
            HEADERS,arrayTable,arrayCursos,
            empresa, usuario,
            smAndDown,
        }
    }
})
</script>

<style>
.cardEstadisticas{
    width: 60%;
    /* height: 400px; */
    margin: 40px auto;
    border-radius: 20px;
    border: 4px solid grey;    
    background-color: #effefb !important;
}
</style>