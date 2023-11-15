(function(){"use strict";var e={2313:function(e,a,o){var r=o(9963),s=o(6252),t=o(1457),l=o(9289);function n(e,a,o,r,n,u){const m=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(t.q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l.O,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m)])),_:1})])),_:1})}var u=(0,s.aZ)({name:"App",data(){return{}}}),m=o(3744);const i=(0,m.Z)(u,[["render",n]]);var d=i,c=o(2201),p=o(3577),b=o(6673),f=o(9003),v=o(3881);function h(e,a,o,r,t,l){return(0,s.wg)(),(0,s.j4)(v.C,{class:"homeCard pa-6",color:"transparent",elevation:"1",style:(0,p.j5)(e.smAndDown?"width: 95%; height:320px":"width:80%; height:200px")},{default:(0,s.w5)((()=>[(0,s.Wm)(f.o,{class:"ma-0 mt-9",justify:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(b.T,{block:e.smAndDown,onClick:a[0]||(a[0]=a=>e.showLogin()),class:(0,p.C_)(e.smAndDown?"ma-4":"mr-8"),color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Login ")])),_:1},8,["block","class"]),(0,s.Wm)(b.T,{block:e.smAndDown,onClick:a[1]||(a[1]=a=>e.showRegister()),class:(0,p.C_)(e.smAndDown?"ma-4":"mx-8"),color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Register ")])),_:1},8,["block","class"]),(0,s.Wm)(b.T,{block:e.smAndDown,onClick:a[2]||(a[2]=a=>e.showEstadisticas()),class:(0,p.C_)(e.smAndDown?"ma-4":"ml-8"),color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Estadisticas ")])),_:1},8,["block","class"])])),_:1})])),_:1},8,["style"])}var g=o(5455),C=(0,s.aZ)({name:"HomeView",components:{},setup(){const{smAndDown:e}=(0,g.AW)(),a=()=>{ce.push("/login")},o=()=>{ce.push("/register")},r=()=>{ce.push("/estadisticas")};return{showLogin:a,showRegister:o,showEstadisticas:r,smAndDown:e}}});const w=(0,m.Z)(C,[["render",h]]);var _=w,y=o.p+"img/imgprincipal.d723fc8d.jpg",W=o(6216),k=o(7742),E=o(3379),D=o(7074),x=o(16),V=o(2482),A=o(8677);const U={class:"content-register"},j=(0,s._)("h4",null,"Nombres",-1),T=(0,s._)("h4",null,"Apellidos",-1),H=(0,s._)("h4",null,"Correo",-1),O=(0,s._)("h4",null,"Empresa",-1),z=(0,s._)("h4",null,"Documentos",-1);function R(e,a,o,r,t,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",U,[(0,s.Wm)(W._,{class:"pa-4 mt-10 mb-4 logincard",style:(0,p.j5)(e.smAndDown?"width: 95%":"width:80%")},{default:(0,s.w5)((()=>[(0,s.Wm)(f.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,p.C_)(e.smAndDown?"CardTitleXS":"CardTitle")}," Ficha de usuario ",2)])),_:1}),(0,s.Wm)(f.o,{class:"ma-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xxl:"6",class:"px-0"},{default:(0,s.w5)((()=>[j,(0,s.Wm)(A.h,{"prepend-icon":"mdi-account",class:"selectItem mt-1 mb-3",variant:"outlined",modelValue:e.nombre,"onUpdate:modelValue":a[0]||(a[0]=a=>e.nombre=a)},null,8,["modelValue"]),T,(0,s.Wm)(A.h,{"prepend-icon":"mdi-ticket-account",class:"selectItem mt-1 mb-3",variant:"outlined",modelValue:e.apellido,"onUpdate:modelValue":a[1]||(a[1]=a=>e.apellido=a)},null,8,["modelValue"]),H,(0,s.Wm)(A.h,{"prepend-icon":"mdi-email",class:"selectItem mt-1 mb-3",variant:"outlined",modelValue:e.correo,"onUpdate:modelValue":a[2]||(a[2]=a=>e.correo=a)},null,8,["modelValue"]),O,(0,s.Wm)(x.rL,{"prepend-icon":"mdi-office-building",class:"selectItem mt-1 mb-3",modelValue:e.empresa,"onUpdate:modelValue":a[3]||(a[3]=a=>e.empresa=a),items:["Empresa1","Empresa2","Empresa3","Empresa4","Empresa5","Empresa6"],variant:"outlined"},null,8,["modelValue"]),z,(0,s.Wm)(k.Z,{class:"selectItem mt-1 mb-3",variant:"outlined",modelValue:e.documento,"onUpdate:modelValue":a[4]||(a[4]=a=>e.documento=a),label:"Registre su Documento"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xxl:"6","align-self":"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(D.f,{class:"imgLogin",src:y})])),_:1}),(0,s.Wm)(E.D,{cols:"12",class:"mt-8"},{default:(0,s.w5)((()=>[(0,s.Wm)(b.T,{class:"btnEnviar",onClick:a[5]||(a[5]=a=>e.guardar()),width:"200",color:"#029f8f","prepend-icon":"mdi-send",disabled:""===e.nombre||""===e.apellido||""===e.correo||""===e.empresa},{default:(0,s.w5)((()=>[(0,s.Uk)("Enviar")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1},8,["style"]),(0,s.Wm)(V.v,{modelValue:e.snackbarAdd,"onUpdate:modelValue":a[6]||(a[6]=a=>e.snackbarAdd=a),timeout:2e3,color:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Usuario agregado Exitosamente ")])),_:1},8,["modelValue"])]),(0,s.Wm)(b.T,{onClick:a[7]||(a[7]=a=>e.returnpage()),color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" return ")])),_:1})],64)}var F=o(2262),P=o(3907),I=(0,s.aZ)({setup(){const e=(0,F.iH)(""),a=(0,F.iH)(""),o=(0,F.iH)(""),r=(0,F.iH)(""),t=(0,F.iH)(""),l=(0,F.iH)([]),n=(0,F.iH)(!1),{smAndDown:u}=(0,g.AW)(),m=(0,P.oR)(),i=(0,s.Fl)((()=>m.state.usuarios.length)),d=()=>{ce.push("/")},c=()=>{let s={id:i.value+1,nombre:a.value,apellido:o.value,correo:r.value,cursos:e.value,empresa:t.value};m.commit("listarUsuarios",s),n.value=!0,e.value="",a.value="",o.value="",r.value="",t.value="",l.value=[]};return{curso:e,nombre:a,apellido:o,correo:r,empresa:t,documento:l,snackbarAdd:n,smAndDown:u,returnpage:d,guardar:c}}});const L=(0,m.Z)(I,[["render",R]]);var S=L,Z=o(4447),N=o(7737);const G=(0,s._)("h4",{class:"mt-1 mb-3"},"Seleccione la Empresa ",-1),M={key:0},q=(0,s._)("h4",null," Promedio de Usuarios ",-1),B={key:0},X={key:1},J={key:0},Y={key:1};function $(e,a,o,r,t,l){const n=(0,s.up)("Vue3EasyDataTable"),u=(0,s.up)("DoughnutChart"),m=(0,s.up)("BarChart");return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(v.C,{class:"cardEstadisticas pa-5",style:(0,p.j5)(e.smAndDown?"width: 95%":"width:80%")},{default:(0,s.w5)((()=>[(0,s.Wm)(f.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,p.C_)(e.smAndDown?"CardTitleXS":"CardTitle")}," Resultado por Empresa ",2)])),_:1}),G,(0,s.Wm)(x.rL,{class:"selectItem",variant:"outlined","onUpdate:menu":a[0]||(a[0]=a=>e.changeUsuarios()),modelValue:e.empresa,"onUpdate:modelValue":a[1]||(a[1]=a=>e.empresa=a),items:["Empresa1","Empresa2","Empresa3","Empresa4","Empresa5","Empresa6"]},null,8,["modelValue"]),""!==e.empresa?((0,s.wg)(),(0,s.iD)("div",M,[(0,s.Wm)(v.C,{color:"white",class:"cardGraphs"},{default:(0,s.w5)((()=>[q,(0,s.Wm)(n,{"theme-color":"#0e2f5a","show-index":"",headers:e.HEADERS,items:e.arrayTable,"rows-per-page":6,class:"mt-4 mb-2"},(0,s.Nv)({"item-promedio":(0,s.w5)((e=>[(0,s._)("div",null,[e.promedio>=55?((0,s.wg)(),(0,s.iD)("span",J,[(0,s.Wm)(Z.v,{"prepend-icon":"mdi-thumb-up-outline",color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Aprobado ")])),_:1})])):((0,s.wg)(),(0,s.iD)("span",Y,[(0,s.Wm)(Z.v,{"prepend-icon":"mdi-thumb-down-outline",color:"red"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Desaprobado ")])),_:1})]))])])),_:2},[(0,s.Ko)(e.arrayCursos,((e,a)=>({name:e,fn:(0,s.w5)((a=>[(0,s._)("div",null,[(0,s.Uk)((0,p.zw)(a[e.split("-")[1]])+" ",1),a[e.split("-")[1]]>=11?((0,s.wg)(),(0,s.iD)("span",B,[(0,s.Wm)(N.t,{color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-thumb-up-outline")])),_:1})])):((0,s.wg)(),(0,s.iD)("span",X,[(0,s.Wm)(N.t,{color:"red"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-thumb-down-outline")])),_:1})]))])]))})))]),1032,["headers","items"])])),_:1}),(0,s.Wm)(f.o,{class:"ma-0 mt-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xxl:"6",class:"pa-0 pr-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(v.C,{color:"white",class:"cardGraphs"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,(0,s.dG)(e.doughnutChartProps,{height:"250",width:"250"}),null,16)])),_:1})])),_:1}),(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xxl:"6",class:"pa-0 pl-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(v.C,{color:"white",class:"cardGraphs"},{default:(0,s.w5)((()=>[(0,s.Wm)(m,(0,s.dG)(e.barChartProps,{height:"250",width:"250"}),null,16)])),_:1})])),_:1})])),_:1})])):(0,s.kq)("",!0)])),_:1},8,["style"]),(0,s.Wm)(b.T,{onClick:a[2]||(a[2]=a=>e.returnpage()),color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" volver ")])),_:1})],64)}var K=o(8010),Q=o(7158),ee=o(6300);ee.kL.register(...ee.zX);var ae=(0,s.aZ)({components:{Vue3EasyDataTable:K.Z,DoughnutChart:Q.LD,BarChart:Q.vz},setup(){const e=(0,P.oR)(),a=(0,F.iH)(""),o=(0,F.iH)([]),r=(0,F.iH)([]),t=(0,F.iH)(["item-Curso1","item-Curso2","item-Curso3","item-Curso4","item-Curso5"]),l=(0,F.iH)(["aprobados","desaprobados"]),n=(0,F.iH)({promedio:{aprobado:0,desaprobado:0},cursos:{},cursoAprop:[],cursoDespr:[]}),u=(0,F.iH)({titles:[],aprobados:[],desaprobados:[]}),{smAndDown:m}=(0,g.AW)(),i=()=>{ce.push("/")},d=()=>{n.value.promedio={aprobado:0,desaprobado:0},n.value.cursos={},r.value=[];let s=[];e.state.usuarios.forEach((e=>{if(s=[{text:"Usuario",value:"usuario",sortable:!0}],a.value===e.empresa){if("object"===typeof e.cursos){let a=e.nombre,o={usuario:a},t=0;e.cursos.forEach((e=>{!n.value.cursos[e.name]&&(n.value.cursos[e.name]={aprob:0,desaprob:0}),o[e.name]=e.nota,s.push({text:e.name,value:e.name,sortable:!0}),t+=parseInt(e.nota),e.nota>=11?n.value.cursos[e.name].aprob=n.value.cursos[e.name].aprob+1:n.value.cursos[e.name].desaprob=n.value.cursos[e.name].desaprob+1})),o["promedio"]=t,t>=55?n.value.promedio.aprobado=n.value.promedio.aprobado+1:n.value.promedio.desaprobado=n.value.promedio.desaprobado+1,s.push({text:"Promedio",value:"promedio",sortable:!0}),r.value.push(o)}o.value=s}})),p()},c=(0,s.Fl)((()=>({labels:l.value,datasets:[{data:[n.value.promedio.aprobado,n.value.promedio.desaprobado],backgroundColor:["#0FFF7F","#FF0905"]}]}))),p=()=>{let e=[],a=[];const o=Object.keys(n.value.cursos),r=Object.values(n.value.cursos);r.forEach((o=>{e.push(o.aprob),a.push(o.desaprob)})),u.value.titles=o,u.value.aprobados=e,u.value.desaprobados=a},b=(0,s.Fl)((()=>({labels:u.value.titles,datasets:[{label:"Aprobados: ",data:u.value.aprobados,backgroundColor:"#0FFF7F"},{label:"Desaprobados: ",data:u.value.desaprobados,backgroundColor:"#FF0905"}]}))),f=(0,s.Fl)((()=>({plugins:{title:{display:!0,text:"Total Aprobados"}}}))),v=(0,s.Fl)((()=>({plugins:{title:{display:!0,text:"Total Aprobados Por Curso"}},responsive:!0,scales:{x:{stacked:!0},y:{stacked:!0}}}))),{doughnutChartProps:h}=(0,Q.l4)({chartData:c,options:f}),{barChartProps:C}=(0,Q.xZ)({chartData:b,options:v});return{returnpage:i,changeUsuarios:d,doughnutChartProps:h,barChartProps:C,HEADERS:o,arrayTable:r,arrayCursos:t,empresa:a,smAndDown:m,arrayGraph:n}}});const oe=(0,m.Z)(ae,[["render",$]]);var re=oe;const se=(0,s._)("h4",null,"Seleccione su Empresa",-1),te=(0,s._)("h4",null,"Seleccione al trabajador",-1);function le(e,a,o,r,t,l){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s.Wm)(W._,{class:"pa-4 my-4 logincard",color:"#effefb",style:(0,p.j5)(e.smAndDown?"width: 95%":"width:80%")},{default:(0,s.w5)((()=>[(0,s.Wm)(f.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,p.C_)(e.smAndDown?"CardTitleXS":"CardTitle")}," Registro de Notas ",2)])),_:1}),(0,s.Wm)(f.o,{class:"ma-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6"},{default:(0,s.w5)((()=>[se,(0,s.Wm)(x.rL,{variant:"outlined","hide-details":"",class:"selectItem mt-2 mb-4","onUpdate:menu":a[0]||(a[0]=a=>e.changeUsuarios()),modelValue:e.empresaReg,"onUpdate:modelValue":a[1]||(a[1]=a=>e.empresaReg=a),items:["Empresa1","Empresa2","Empresa3","Empresa4","Empresa5","Empresa6"]},null,8,["modelValue"])])),_:1}),(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6"},{default:(0,s.w5)((()=>[te,(0,s.Wm)(x.rL,{variant:"outlined","hide-details":"",class:"selectItem mt-2 mb-4",disabled:""===e.empresaReg,items:e.usuarios,"item-title":"text","item-value":"value",modelValue:e.usuario,"onUpdate:modelValue":a[2]||(a[2]=a=>e.usuario=a)},null,8,["disabled","items","modelValue"])])),_:1}),(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.h,{class:"selectItem",label:"Curso 1",modelValue:e.curso1,"onUpdate:modelValue":a[3]||(a[3]=a=>e.curso1=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1}),(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.h,{class:"selectItem",label:"Curso 2",modelValue:e.curso2,"onUpdate:modelValue":a[4]||(a[4]=a=>e.curso2=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1}),(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.h,{class:"selectItem",label:"Curso 3",modelValue:e.curso3,"onUpdate:modelValue":a[5]||(a[5]=a=>e.curso3=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1}),(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.h,{class:"selectItem",label:"Curso 4",modelValue:e.curso4,"onUpdate:modelValue":a[6]||(a[6]=a=>e.curso4=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1}),(0,s.Wm)(E.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.h,{class:"selectItem",label:"Curso 5",modelValue:e.curso5,"onUpdate:modelValue":a[7]||(a[7]=a=>e.curso5=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1})])),_:1}),(0,s.Wm)(f.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(b.T,{class:"btnGuardar","prepend-icon":"mdi-content-save",onClick:a[8]||(a[8]=a=>e.guardarNota()),color:"#029f8f"},{default:(0,s.w5)((()=>[(0,s.Uk)(" guardar ")])),_:1})])),_:1}),(0,s.Wm)(V.v,{modelValue:e.snackbarAdd,"onUpdate:modelValue":a[9]||(a[9]=a=>e.snackbarAdd=a),timeout:2e3,color:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Notas Agregadas exitosamente ")])),_:1},8,["modelValue"])])),_:1},8,["style"]),(0,s.Wm)(b.T,{onClick:a[10]||(a[10]=a=>e.returnpage()),color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" volver ")])),_:1}),(0,s.Wm)(b.T,{onClick:a[11]||(a[11]=a=>e.showTable()),color:"blue"},{default:(0,s.w5)((()=>[(0,s.Uk)(" mostrar tabla ")])),_:1})],64)}var ne=(0,s.aZ)({setup(){const e=(0,P.oR)(),a=(0,F.iH)([]),o=(0,F.iH)(""),r=(0,F.iH)(""),{smAndDown:s}=(0,g.AW)(),t=(0,F.iH)(),l=(0,F.iH)(),n=(0,F.iH)(),u=(0,F.iH)(),m=(0,F.iH)(),i=(0,F.iH)([e=>!!e||"Este campo es requerido",e=>!!e&&e<=20||"No ingresar valores mayores a 20"]),d=(0,F.iH)(!1),c=()=>{ce.push("/")},p=()=>{r.value="",a.value=[],e.state.usuarios.forEach((e=>{o.value===e.empresa&&a.value.push({text:`${e.nombre} ${e.apellido}`,value:e.id})}))},b=()=>{ce.push("/estadisticas")},f=()=>{e.state.usuarios.find((({id:a,nombre:s,empresa:i})=>{if(r.value===a&&o.value===i){let a=[{name:"Curso1",nota:t.value},{name:"Curso2",nota:l.value},{name:"Curso3",nota:n.value},{name:"Curso4",nota:u.value},{name:"Curso5",nota:m.value}],o={cursos:a,nombre:s,empresa:i};e.commit("addCursos",o)}})),t.value=void 0,l.value=void 0,n.value=void 0,u.value=void 0,m.value=void 0,r.value="",d.value=!0};return{returnpage:c,changeUsuarios:p,showTable:b,guardarNota:f,curso1:t,curso2:l,curso3:n,curso4:u,curso5:m,rules:i,smAndDown:s,usuarios:a,empresaReg:o,usuario:r,snackbarAdd:d}}});const ue=(0,m.Z)(ne,[["render",le]]);var me=ue;const ie=[{path:"/",name:"home",component:_},{path:"/login",name:"Login",component:S},{path:"/estadisticas",name:"Estadisticas",component:re},{path:"/register",name:"Register",component:me}],de=(0,c.p7)({history:(0,c.r5)("/prospecto/"),routes:ie});var ce=de,pe=(0,P.MT)({state:{usuarios:[{id:1,nombre:"Jorge",apellido:"Chavez",correo:"jorge.chavez@gmail.com",cursos:[{name:"Curso1",nota:18},{name:"Curso2",nota:0},{name:"Curso3",nota:0},{name:"Curso4",nota:14},{name:"Curso5",nota:20}],empresa:"Empresa1"},{id:2,nombre:"Mateo",apellido:"Ruiz",correo:"mateo.ruiz@gmail.com",cursos:[{name:"Curso1",nota:18},{name:"Curso2",nota:15},{name:"Curso3",nota:15},{name:"Curso4",nota:10},{name:"Curso5",nota:15}],empresa:"Empresa1"},{id:3,nombre:"Maria",apellido:"Rodriguez",correo:"Maria.Rodriguez@gmail.com",cursos:[{name:"Curso1",nota:9},{name:"Curso2",nota:14},{name:"Curso3",nota:15},{name:"Curso4",nota:14},{name:"Curso5",nota:19}],empresa:"Empresa1"},{id:4,nombre:"Mario",apellido:"Baltazar",correo:"mario.baltazar@gmail.com",cursos:[{name:"Curso1",nota:0},{name:"Curso2",nota:0},{name:"Curso3",nota:0},{name:"Curso4",nota:0},{name:"Curso5",nota:0}],empresa:"Empresa1"},{id:5,nombre:"Julio",apellido:"Sanchez",correo:"julio.sanchez@gmail.com",cursos:[{name:"Curso1",nota:11},{name:"Curso2",nota:10},{name:"Curso3",nota:10},{name:"Curso4",nota:14},{name:"Curso5",nota:17}],empresa:"Empresa2"},{id:6,nombre:"Roberto",apellido:"Llanos",correo:"roberto.llanos@gmail.com",cursos:[{name:"Curso1",nota:14},{name:"Curso2",nota:16},{name:"Curso3",nota:19},{name:"Curso4",nota:20},{name:"Curso5",nota:20}],empresa:"Empresa2"},{id:7,nombre:"Jazmine",apellido:"Cavana",correo:"jazmine.cavana@gmail.com",cursos:[{name:"Curso1",nota:14},{name:"Curso2",nota:15},{name:"Curso3",nota:6},{name:"Curso4",nota:3},{name:"Curso5",nota:20}],empresa:"Empresa2"},{id:8,nombre:"Georgina",apellido:"Quiroz",correo:"georgina.quiroz@gmail.com",cursos:[{name:"Curso1",nota:19},{name:"Curso2",nota:14},{name:"Curso3",nota:13},{name:"Curso4",nota:14},{name:"Curso5",nota:17}],empresa:"Empresa3"},{id:9,nombre:"Tereza",apellido:"Perez",correo:"tereza.perez@gmail.com",cursos:[{name:"Curso1",nota:19},{name:"Curso2",nota:4},{name:"Curso3",nota:16},{name:"Curso4",nota:8},{name:"Curso5",nota:17}],empresa:"Empresa4"},{id:10,nombre:"Luis",apellido:"Advincula",correo:"luiz.advincula@gmail.com",cursos:[{name:"Curso1",nota:15},{name:"Curso2",nota:13},{name:"Curso3",nota:12},{name:"Curso4",nota:11},{name:"Curso5",nota:17}],empresa:"Empresa5"},{id:11,nombre:"Cesar",apellido:"Cueto",correo:"cesar.cueto@gmail.com",cursos:[{name:"Curso1",nota:20},{name:"Curso2",nota:20},{name:"Curso3",nota:20},{name:"Curso4",nota:20},{name:"Curso5",nota:20}],empresa:"Empresa6"}]},getters:{},mutations:{listarUsuarios(e,a){e.usuarios.push(a)},addCursos(e,a){const o=e.usuarios.findIndex((({nombre:e,empresa:o})=>{if(e===a.nombre&&o===a.empresa)return!0}));e.usuarios[o].cursos=a.cursos}},actions:{},modules:{}}),be=(o(9773),o(8460)),fe=(0,be.Rd)();async function ve(){const e=await o.e(461).then(o.t.bind(o,5933,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}ve(),(0,r.ri)(d).use(ce).use(pe).use(fe).component("EasyDataTable",K.Z).mount("#app")}},a={};function o(r){var s=a[r];if(void 0!==s)return s.exports;var t=a[r]={exports:{}};return e[r](t,t.exports,o),t.exports}o.m=e,function(){var e=[];o.O=function(a,r,s,t){if(!r){var l=1/0;for(i=0;i<e.length;i++){r=e[i][0],s=e[i][1],t=e[i][2];for(var n=!0,u=0;u<r.length;u++)(!1&t||l>=t)&&Object.keys(o.O).every((function(e){return o.O[e](r[u])}))?r.splice(u--,1):(n=!1,t<l&&(l=t));if(n){e.splice(i--,1);var m=s();void 0!==m&&(a=m)}}return a}t=t||0;for(var i=e.length;i>0&&e[i-1][2]>t;i--)e[i]=e[i-1];e[i]=[r,s,t]}}(),function(){var e,a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(r,s){if(1&s&&(r=this(r)),8&s)return r;if("object"===typeof r&&r){if(4&s&&r.__esModule)return r;if(16&s&&"function"===typeof r.then)return r}var t=Object.create(null);o.r(t);var l={};e=e||[null,a({}),a([]),a(a)];for(var n=2&s&&r;"object"==typeof n&&!~e.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach((function(e){l[e]=function(){return r[e]}}));return l["default"]=function(){return r},o.d(t,l),t}}(),function(){o.d=function(e,a){for(var r in a)o.o(a,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(a,r){return o.f[r](e,a),a}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.e90cc099.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="prospecto:";o.l=function(r,s,t,l){if(e[r])e[r].push(s);else{var n,u;if(void 0!==t)for(var m=document.getElementsByTagName("script"),i=0;i<m.length;i++){var d=m[i];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==a+t){n=d;break}}n||(u=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",a+t),n.src=r),e[r]=[s];var c=function(a,o){n.onerror=n.onload=null,clearTimeout(p);var s=e[r];if(delete e[r],n.parentNode&&n.parentNode.removeChild(n),s&&s.forEach((function(e){return e(o)})),a)return a(o)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=c.bind(null,n.onerror),n.onload=c.bind(null,n.onload),u&&document.head.appendChild(n)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/prospecto/"}(),function(){var e={143:0};o.f.j=function(a,r){var s=o.o(e,a)?e[a]:void 0;if(0!==s)if(s)r.push(s[2]);else{var t=new Promise((function(o,r){s=e[a]=[o,r]}));r.push(s[2]=t);var l=o.p+o.u(a),n=new Error,u=function(r){if(o.o(e,a)&&(s=e[a],0!==s&&(e[a]=void 0),s)){var t=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;n.message="Loading chunk "+a+" failed.\n("+t+": "+l+")",n.name="ChunkLoadError",n.type=t,n.request=l,s[1](n)}};o.l(l,u,"chunk-"+a,a)}},o.O.j=function(a){return 0===e[a]};var a=function(a,r){var s,t,l=r[0],n=r[1],u=r[2],m=0;if(l.some((function(a){return 0!==e[a]}))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(u)var i=u(o)}for(a&&a(r);m<l.length;m++)t=l[m],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(i)},r=self["webpackChunkprospecto"]=self["webpackChunkprospecto"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(2313)}));r=o.O(r)})();
//# sourceMappingURL=app.b612aa88.js.map