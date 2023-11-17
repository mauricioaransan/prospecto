<template>
    <v-sheet class="cardEstadisticas pa-5" :style="smAndDown?'width: 95%':'width:80%'">
        <v-row class="ma-0" justify="center">
            <div :class="smAndDown?'CardTitleXS':'CardTitle'"> Resultado por Empresa </div>
        </v-row>
        <h4 class="mt-1 mb-3">Seleccione la Empresa </h4>
        <v-select class="selectItem" variant="outlined"  @update:menu="changeUsuarios()" v-model="empresa" :items="['Empresa1', 'Empresa2', 'Empresa3', 'Empresa4', 'Empresa5', 'Empresa6']"></v-select>
        
        <div v-if="empresa!==''">
            <v-sheet color="white" class="cardGraphs">
                <h4> Promedio de Usuarios </h4>
                <Vue3EasyDataTable
                theme-color="#0e2f5a"
                show-index
                :headers="HEADERS"
                :items="arrayTable"
                :rows-per-page="6"
                class="mt-4 mb-2"
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
            </v-sheet>
           <v-row class="ma-0 mt-4">
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6" class="pa-0 pr-2">
                <v-sheet color="white" class="cardGraphs">
                    <DoughnutChart v-bind="doughnutChartProps" height="250" width="250" />
                </v-sheet>
            </v-col>
            <v-col cols="12" sm="12" md="6" lg="6" xl="6" xxl="6" class="pa-0 pl-2">
                <v-sheet color="white" class="cardGraphs">
                    <BarChart v-bind="barChartProps" height="250" width="250"/>                
                </v-sheet>
            </v-col>
           </v-row>
        </div>
    </v-sheet>
</template>

<script lang="ts">
import router from '@/router';
import { defineComponent, ref, computed } from 'vue';
import { useStore } from 'vuex';
import { useDisplay } from 'vuetify';

import Vue3EasyDataTable    from 'vue3-easy-data-table';
import { DoughnutChart, useDoughnutChart, useBarChart,BarChart } from "vue-chart-3";
import { Chart, ChartData, ChartOptions, registerables } from "chart.js";

Chart.register(...registerables);
export default defineComponent({
    components:{
        Vue3EasyDataTable,
        DoughnutChart,
        BarChart,
    },
    setup () {
        
        const store = useStore();
        const empresa = ref('');
        const HEADERS = ref( [] );
        const arrayTable:any = ref([]);
        const arrayCursos = ref(['item-Curso1','item-Curso2','item-Curso3','item-Curso4','item-Curso5']);
        const donnutLabels = ref(['aprobados','desaprobados'])
        const arrayGraph:any = ref({
            promedio:{
                aprobado: 0,
                desaprobado:0
            },
            cursos:{},
            cursoAprop:[],
            cursoDespr:[],
        });
        const arrayBars:any = ref({
            titles:[],
            aprobados:[],
            desaprobados:[]
        })

        const { smAndDown } = useDisplay();

        const returnpage = () => {
            router.push('/')
        }

        const changeUsuarios = () => {
            arrayGraph.value.promedio = {aprobado: 0,desaprobado:0};
            arrayGraph.value.cursos = {};
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
                           arrayGraph.value.cursos[curso.name] ? null : arrayGraph.value.cursos[curso.name] = {aprob:0,desaprob:0} ;
                           cursos[curso.name] = curso.nota;
                           header.push({                            
                            text: curso.name,
                            value:curso.name,
                            sortable:true,
                           })
                           notatotal = notatotal + parseInt(curso.nota);
                           curso.nota >= 11 ? arrayGraph.value.cursos[curso.name].aprob= arrayGraph.value.cursos[curso.name].aprob + 1 
                           : 
                           arrayGraph.value.cursos[curso.name].desaprob =  arrayGraph.value.cursos[curso.name].desaprob + 1;
                        })

                        cursos['promedio'] = notatotal;
                        notatotal >= 55 ? 
                        arrayGraph.value.promedio.aprobado = arrayGraph.value.promedio.aprobado + 1 
                        :
                        arrayGraph.value.promedio.desaprobado = arrayGraph.value.promedio.desaprobado + 1;
                        
                        header.push({
                            text: 'Promedio',
                            value: 'promedio',
                            sortable:true,
                        })


                        arrayTable.value.push(cursos);
                       
                        
                       
                    }
                    HEADERS.value = header;
                }

            })
            getDataBars();
            
        }
        
        const dataDonnut = computed<ChartData<"doughnut">>(() => ({
        labels: donnutLabels.value,
        datasets: [
            {
            data: [arrayGraph.value.promedio.aprobado,arrayGraph.value.promedio.desaprobado],
            backgroundColor: [
                "#0FFF7F",
                "#FF0905",
            ],
            },
        ],
        }));

        const getDataBars = () => {

            let aprobados:any = [];
            let desaprobados:any = [];
            const propertyNames = Object.keys(arrayGraph.value.cursos);
            const propertyValues = Object.values(arrayGraph.value.cursos);
            propertyValues.forEach((item:any)=>{
                aprobados.push(item.aprob)
                desaprobados.push(item.desaprob)
            })

            arrayBars.value.titles          =  propertyNames;
            arrayBars.value.aprobados       =  aprobados;
            arrayBars.value.desaprobados    =  desaprobados;
        }
        
        const dataBars = computed<ChartData<"bar">>(() => ({
        
        labels: arrayBars.value.titles,
        datasets: [
            {
            label: 'Aprobados: ',
            data: arrayBars.value.aprobados,
            backgroundColor: "#0FFF7F",
            },
            {
            label: 'Desaprobados: ',
            data: arrayBars.value.desaprobados,
            backgroundColor: "#FF0905",
            },
        ],
        }));

        const options = computed<ChartOptions<"doughnut">>(() => ({        
        plugins: {
            title: {
            display: true,
            text: "Total Aprobados",
            },
        },
        }));

        const optionsBar = computed<ChartOptions<"bar">>(() => ({        
        plugins: {
            title: {
            display: true,
            text: "Total Aprobados Por Curso",
            },
        },
        responsive: true,
            scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true
            }
            }
        }));

        const { doughnutChartProps } = useDoughnutChart({
        chartData: dataDonnut,
        options,
        });
        const { barChartProps } = useBarChart({
        chartData: dataBars,
        options:optionsBar,
        });

        return {
            returnpage,changeUsuarios,
            doughnutChartProps,barChartProps,
            HEADERS,arrayTable,arrayCursos,
            empresa,
            smAndDown,
            arrayGraph,
        }
    }
})
</script>

<style>
.cardEstadisticas{
    margin: 40px auto;
    border-radius: 20px;
    border: 3px solid rgb(6, 127, 117); 
    background-color: #effefb !important;
}

.cardGraphs{
    margin-top: 16px;
    padding: 16px;
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
</style>