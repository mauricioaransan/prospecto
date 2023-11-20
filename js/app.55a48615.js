(function(){"use strict";var e={4512:function(e,a,o){var r=o(9963),s=o(6252),t=o(1457),l=o(2234),n=o(9289);function u(e,a,o,r,u,i){const m=(0,s.up)("NavigationDrawerVue"),d=(0,s.up)("router-view");return(0,s.wg)(),(0,s.j4)(t.q,null,{default:(0,s.w5)((()=>[(0,s.Wm)(l.s,null,{default:(0,s.w5)((()=>[(0,s.Wm)(m),(0,s.Wm)(n.O,null,{default:(0,s.w5)((()=>[(0,s.Wm)(d)])),_:1})])),_:1})])),_:1})}var i=o(7506),m=o(1923),d=o(1660),c=o(3890);function p(e,a,o,r,t,l){return e.showDrawer?((0,s.wg)(),(0,s.j4)(c.V,{key:0,"expand-on-hover":"",rail:"",permanent:!e.smAndDown,class:"navDrawerFixed"},{default:(0,s.w5)((()=>[(0,s.Wm)(m.i,null,{default:(0,s.w5)((()=>["user"===e.typeUser?((0,s.wg)(),(0,s.j4)(d.l,{key:0,"prepend-avatar":"https://randomuser.me/api/portraits/women/85.jpg",title:"Sandra Adams",subtitle:"sandra_a88@gmailcom"})):(0,s.kq)("",!0),"admin"===e.typeUser?((0,s.wg)(),(0,s.j4)(d.l,{key:1,"prepend-avatar":"https://randomuser.me/api/portraits/women/60.jpg",title:"Maria Palacios",subtitle:"maria.pal@gmailcom"})):(0,s.kq)("",!0)])),_:1}),(0,s.Wm)(i.J),(0,s.Wm)(m.i,{density:"compact",nav:""},{default:(0,s.w5)((()=>["user"===e.typeUser?((0,s.wg)(),(0,s.j4)(d.l,{key:0,onClick:a[0]||(a[0]=a=>e.cambiarView("userdata")),"prepend-icon":"mdi-account-search",title:"Info. Usuario",value:"userdata"})):(0,s.kq)("",!0),"admin"===e.typeUser?((0,s.wg)(),(0,s.j4)(d.l,{key:1,onClick:a[1]||(a[1]=a=>e.cambiarView("register")),"prepend-icon":"mdi-file-document-multiple",title:"Notas",value:"register"})):(0,s.kq)("",!0),"admin"===e.typeUser?((0,s.wg)(),(0,s.j4)(d.l,{key:2,onClick:a[2]||(a[2]=a=>e.cambiarView("estadisticas")),"prepend-icon":"mdi-file-chart",title:"Estadisticas",value:"estadisticas"})):(0,s.kq)("",!0),(0,s.Wm)(d.l,{onClick:a[3]||(a[3]=a=>e.cambiarView("salir")),"prepend-icon":"mdi-home-import-outline",title:"Salir",value:"loguot"})])),_:1})])),_:1},8,["permanent"])):(0,s.kq)("",!0)}var f=o(2262),v=o(3907),b=o(5455),w=(0,s.aZ)({components:{},setup(){const e=(0,v.oR)(),a=(0,f.iH)(""),{smAndDown:o}=(0,b.AW)(),r=(0,s.Fl)((()=>e.state.showDrawer)),t=(0,s.Fl)((()=>e.state.typeUser)),l=a=>{e.commit("changeViewPage",a)};return(0,s.bv)((()=>{e.commit("hiddenDrawer")})),{viewPage:a,smAndDown:o,showDrawer:r,typeUser:t,cambiarView:l}}}),h=o(3744);const g=(0,h.Z)(w,[["render",p]]);var C=g,y=(0,s.aZ)({name:"App",components:{NavigationDrawerVue:C},data(){return{}}});const V=(0,h.Z)(y,[["render",u]]);var _=V,k=o(2201);function D(e,a,o,r,t,l){const n=(0,s.up)("EstadisticasView"),u=(0,s.up)("RegisterView"),i=(0,s.up)("UserDataView");return(0,s.wg)(),(0,s.iD)(s.HY,null,["estadisticas"===e.drawerView?((0,s.wg)(),(0,s.j4)(n,{key:0})):(0,s.kq)("",!0),"register"===e.drawerView?((0,s.wg)(),(0,s.j4)(u,{key:1})):(0,s.kq)("",!0),"userdata"===e.drawerView?((0,s.wg)(),(0,s.j4)(i,{key:2})):(0,s.kq)("",!0)],64)}var W=o(3577),E=o(4447),U=o(9003),A=o(3379),x=o(7737),j=o(5734),H=o(3881);const F=(0,s._)("h4",{class:"mt-1 mb-3"},"Seleccione la Empresa ",-1),T={key:0},P=(0,s._)("h4",null," Promedio de Usuarios ",-1),O={key:0},R={key:1},z={key:0},q={key:1};function I(e,a,o,r,t,l){const n=(0,s.up)("Vue3EasyDataTable"),u=(0,s.up)("DoughnutChart"),i=(0,s.up)("BarChart");return(0,s.wg)(),(0,s.j4)(H.C,{class:"cardEstadisticas pa-5",style:(0,W.j5)(e.smAndDown?"width: 95%":"width:80%")},{default:(0,s.w5)((()=>[(0,s.Wm)(U.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,W.C_)(e.smAndDown?"CardTitleXS":"CardTitle")}," Resultado por Empresa ",2)])),_:1}),F,(0,s.Wm)(j.rL,{class:"selectItem",variant:"outlined","onUpdate:menu":a[0]||(a[0]=a=>e.changeUsuarios()),modelValue:e.empresa,"onUpdate:modelValue":a[1]||(a[1]=a=>e.empresa=a),items:["Empresa1","Empresa2","Empresa3","Empresa4","Empresa5","Empresa6"]},null,8,["modelValue"]),""!==e.empresa?((0,s.wg)(),(0,s.iD)("div",T,[(0,s.Wm)(H.C,{color:"white",class:"cardGraphs"},{default:(0,s.w5)((()=>[P,(0,s.Wm)(n,{"theme-color":"#0e2f5a","show-index":"",headers:e.HEADERS,items:e.arrayTable,"rows-per-page":6,class:"mt-4 mb-2"},(0,s.Nv)({"item-promedio":(0,s.w5)((e=>[(0,s._)("div",null,[e.promedio>=55?((0,s.wg)(),(0,s.iD)("span",z,[(0,s.Wm)(E.v,{"prepend-icon":"mdi-thumb-up-outline",color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Aprobado ")])),_:1})])):((0,s.wg)(),(0,s.iD)("span",q,[(0,s.Wm)(E.v,{"prepend-icon":"mdi-thumb-down-outline",color:"red"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Desaprobado ")])),_:1})]))])])),_:2},[(0,s.Ko)(e.arrayCursos,((e,a)=>({name:e,fn:(0,s.w5)((a=>[(0,s._)("div",null,[(0,s.Uk)((0,W.zw)(a[e.split("-")[1]])+" ",1),a[e.split("-")[1]]>=11?((0,s.wg)(),(0,s.iD)("span",O,[(0,s.Wm)(x.t,{color:"green"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-thumb-up-outline")])),_:1})])):((0,s.wg)(),(0,s.iD)("span",R,[(0,s.Wm)(x.t,{color:"red"},{default:(0,s.w5)((()=>[(0,s.Uk)("mdi-thumb-down-outline")])),_:1})]))])]))})))]),1032,["headers","items"])])),_:1}),(0,s.Wm)(U.o,{class:"ma-0 mt-4"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xxl:"6",class:"pa-0 pr-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(H.C,{color:"white",class:"cardGraphs"},{default:(0,s.w5)((()=>[(0,s.Wm)(u,(0,s.dG)(e.doughnutChartProps,{height:"250",width:"250"}),null,16)])),_:1})])),_:1}),(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xxl:"6",class:"pa-0 pl-2"},{default:(0,s.w5)((()=>[(0,s.Wm)(H.C,{color:"white",class:"cardGraphs"},{default:(0,s.w5)((()=>[(0,s.Wm)(i,(0,s.dG)(e.barChartProps,{height:"250",width:"250"}),null,16)])),_:1})])),_:1})])),_:1})])):(0,s.kq)("",!0)])),_:1},8,["style"])}var S=o(8010),Z=o(7158),N=o(6300);N.kL.register(...N.zX);var L=(0,s.aZ)({components:{Vue3EasyDataTable:S.Z,DoughnutChart:Z.LD,BarChart:Z.vz},setup(){const e=(0,v.oR)(),a=(0,f.iH)(""),o=(0,f.iH)([]),r=(0,f.iH)([]),t=(0,f.iH)(["item-Curso1","item-Curso2","item-Curso3","item-Curso4","item-Curso5"]),l=(0,f.iH)(["aprobados","desaprobados"]),n=(0,f.iH)({promedio:{aprobado:0,desaprobado:0},cursos:{},cursoAprop:[],cursoDespr:[]}),u=(0,f.iH)({titles:[],aprobados:[],desaprobados:[]}),{smAndDown:i}=(0,b.AW)(),m=()=>{Ae.push("/")},d=()=>{n.value.promedio={aprobado:0,desaprobado:0},n.value.cursos={},r.value=[];let s=[];e.state.usuarios.forEach((e=>{if(s=[{text:"Usuario",value:"usuario",sortable:!0}],a.value===e.empresa){if("object"===typeof e.cursos){let a=e.nombre,o={usuario:a},t=0;e.cursos.forEach((e=>{!n.value.cursos[e.name]&&(n.value.cursos[e.name]={aprob:0,desaprob:0}),o[e.name]=e.nota,s.push({text:e.name,value:e.name,sortable:!0}),t+=parseInt(e.nota),e.nota>=11?n.value.cursos[e.name].aprob=n.value.cursos[e.name].aprob+1:n.value.cursos[e.name].desaprob=n.value.cursos[e.name].desaprob+1})),o["promedio"]=t,t>=55?n.value.promedio.aprobado=n.value.promedio.aprobado+1:n.value.promedio.desaprobado=n.value.promedio.desaprobado+1,s.push({text:"Promedio",value:"promedio",sortable:!0}),r.value.push(o)}o.value=s}})),p()},c=(0,s.Fl)((()=>({labels:l.value,datasets:[{data:[n.value.promedio.aprobado,n.value.promedio.desaprobado],backgroundColor:["#0FFF7F","#FF0905"]}]}))),p=()=>{let e=[],a=[];const o=Object.keys(n.value.cursos),r=Object.values(n.value.cursos);r.forEach((o=>{e.push(o.aprob),a.push(o.desaprob)})),u.value.titles=o,u.value.aprobados=e,u.value.desaprobados=a},w=(0,s.Fl)((()=>({labels:u.value.titles,datasets:[{label:"Aprobados: ",data:u.value.aprobados,backgroundColor:"#0FFF7F"},{label:"Desaprobados: ",data:u.value.desaprobados,backgroundColor:"#FF0905"}]}))),h=(0,s.Fl)((()=>({plugins:{title:{display:!0,text:"Total Aprobados"}}}))),g=(0,s.Fl)((()=>({plugins:{title:{display:!0,text:"Total Aprobados Por Curso"}},responsive:!0,scales:{x:{stacked:!0},y:{stacked:!0}}}))),{doughnutChartProps:C}=(0,Z.l4)({chartData:c,options:h}),{barChartProps:y}=(0,Z.xZ)({chartData:w,options:g});return{returnpage:m,changeUsuarios:d,doughnutChartProps:C,barChartProps:y,HEADERS:o,arrayTable:r,arrayCursos:t,empresa:a,smAndDown:i,arrayGraph:n}}});const M=(0,h.Z)(L,[["render",I]]);var G=M,X=o(6673),B=o(6216),J=o(9357),$=o(2482),Y=o(8677);const K=(0,s._)("h4",null,"Seleccione su Empresa",-1),Q=(0,s._)("h4",null,"Seleccione al trabajador",-1);function ee(e,a,o,r,t,l){return(0,s.wg)(),(0,s.j4)(B._,{class:"pa-4 mb-4 registerCard",color:"#effefb",sytle:"margin: 0 auto",style:(0,W.j5)(e.smAndDown?"width: 95%":"width:80%")},{default:(0,s.w5)((()=>[(0,s.Wm)(U.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,W.C_)(e.smAndDown?"CardTitleXS":"CardTitle")}," Registro de Notas ",2),(0,s.Uk)(" "+(0,W.zw)(e.refFormulario),1)])),_:1}),(0,s.Wm)(J.O,{modelValue:e.refFormulario,"onUpdate:modelValue":a[9]||(a[9]=a=>e.refFormulario=a)},{default:(0,s.w5)((()=>[(0,s.Wm)(U.o,{class:"ma-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6"},{default:(0,s.w5)((()=>[K,(0,s.Wm)(j.rL,{variant:"outlined","hide-details":"",class:"selectItem mt-2 mb-4","onUpdate:menu":a[0]||(a[0]=a=>e.changeUsuarios()),modelValue:e.empresaReg,"onUpdate:modelValue":a[1]||(a[1]=a=>e.empresaReg=a),items:["Empresa1","Empresa2","Empresa3","Empresa4","Empresa5","Empresa6"]},null,8,["modelValue"])])),_:1}),(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6"},{default:(0,s.w5)((()=>[Q,(0,s.Wm)(j.rL,{variant:"outlined","hide-details":"",class:"selectItem mt-2 mb-4",disabled:""===e.empresaReg,items:e.usuarios,"item-title":"text","item-value":"value",modelValue:e.usuario,"onUpdate:modelValue":a[2]||(a[2]=a=>e.usuario=a)},null,8,["disabled","items","modelValue"])])),_:1}),(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y.h,{class:"selectItem",label:"Curso 1",modelValue:e.curso1,"onUpdate:modelValue":a[3]||(a[3]=a=>e.curso1=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1}),(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y.h,{class:"selectItem",label:"Curso 2",modelValue:e.curso2,"onUpdate:modelValue":a[4]||(a[4]=a=>e.curso2=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1}),(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y.h,{class:"selectItem",label:"Curso 3",modelValue:e.curso3,"onUpdate:modelValue":a[5]||(a[5]=a=>e.curso3=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1}),(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y.h,{class:"selectItem",label:"Curso 4",modelValue:e.curso4,"onUpdate:modelValue":a[6]||(a[6]=a=>e.curso4=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1}),(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xll:"6",class:"my-3"},{default:(0,s.w5)((()=>[(0,s.Wm)(Y.h,{class:"selectItem",label:"Curso 5",modelValue:e.curso5,"onUpdate:modelValue":a[7]||(a[7]=a=>e.curso5=a),disabled:""===e.usuario,type:"number","hide-spin-buttons":"",rules:e.rules,variant:"outlined"},null,8,["modelValue","disabled","rules"])])),_:1})])),_:1}),(0,s.Wm)(U.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(X.T,{class:"btnGuardar","prepend-icon":"mdi-content-save",onClick:a[8]||(a[8]=a=>e.guardarNota()),color:"#029f8f",disabled:!e.refFormulario},{default:(0,s.w5)((()=>[(0,s.Uk)(" guardar ")])),_:1},8,["disabled"])])),_:1})])),_:1},8,["modelValue"]),(0,s.Wm)($.v,{modelValue:e.snackbarAdd,"onUpdate:modelValue":a[10]||(a[10]=a=>e.snackbarAdd=a),timeout:2e3,color:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Notas Agregadas exitosamente ")])),_:1},8,["modelValue"])])),_:1},8,["style"])}var ae=(0,s.aZ)({setup(){const e=(0,v.oR)(),a=(0,f.iH)([]),o=(0,f.iH)(""),r=(0,f.iH)(""),{smAndDown:s}=(0,b.AW)(),t=(0,f.iH)(),l=(0,f.iH)(),n=(0,f.iH)(),u=(0,f.iH)(),i=(0,f.iH)(),m=(0,f.iH)(!1),d=(0,f.iH)([e=>!!e||"Este campo es requerido",e=>!!e&&e<=20||"No ingresar valores mayores a 20",e=>{const a=/^[0-9.]+$/.test(e);return a||"Only numbers and dots are allowed"}]),c=(0,f.iH)(!1),p=()=>{Ae.push("/")},w=()=>{r.value="",a.value=[],e.state.usuarios.forEach((e=>{o.value===e.empresa&&a.value.push({text:`${e.nombre} ${e.apellido}`,value:e.id})}))},h=()=>{Ae.push("/estadisticas")},g=()=>{e.state.usuarios.find((({id:a,nombre:s,empresa:m})=>{if(r.value===a&&o.value===m){let a=[{name:"Curso1",nota:t.value},{name:"Curso2",nota:l.value},{name:"Curso3",nota:n.value},{name:"Curso4",nota:u.value},{name:"Curso5",nota:i.value}],o={cursos:a,nombre:s,empresa:m};e.commit("addCursos",o)}})),t.value=void 0,l.value=void 0,n.value=void 0,u.value=void 0,i.value=void 0,r.value="",m.value=null,c.value=!0};return{returnpage:p,changeUsuarios:w,showTable:h,guardarNota:g,curso1:t,curso2:l,curso3:n,curso4:u,curso5:i,rules:d,smAndDown:s,refFormulario:m,usuarios:a,empresaReg:o,usuario:r,snackbarAdd:c}}});const oe=(0,h.Z)(ae,[["render",ee]]);var re=oe,se=o.p+"img/imgprincipal.d723fc8d.jpg",te=o(7742),le=o(7074);const ne={class:"content-register"},ue=(0,s._)("h4",null,"Nombres",-1),ie=(0,s._)("h4",null,"Apellidos",-1),me=(0,s._)("h4",null,"Correo",-1),de=(0,s._)("h4",null,"Empresa",-1),ce=(0,s._)("h4",null,"Documentos",-1);function pe(e,a,o,r,t,l){return(0,s.wg)(),(0,s.iD)("div",ne,[(0,s.Wm)(B._,{class:"pa-4 mt-10 mb-4 userDatacard",style:(0,W.j5)(e.smAndDown?"width: 95%":"width:80%")},{default:(0,s.w5)((()=>[(0,s.Wm)(J.O,{"fast-fail":"",modelValue:e.refFormulario,"onUpdate:modelValue":a[6]||(a[6]=a=>e.refFormulario=a)},{default:(0,s.w5)((()=>[(0,s.Wm)(U.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,W.C_)(e.smAndDown?"CardTitleXS":"CardTitle")}," Ficha de usuario ",2)])),_:1}),(0,s.Wm)(U.o,{class:"ma-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xxl:"6",class:"px-0"},{default:(0,s.w5)((()=>[ue,(0,s.Wm)(Y.h,{rules:[e.rules.required],"prepend-icon":"mdi-account",class:"selectItem mt-1 mb-3",variant:"outlined",modelValue:e.nombre,"onUpdate:modelValue":a[0]||(a[0]=a=>e.nombre=a)},null,8,["rules","modelValue"]),ie,(0,s.Wm)(Y.h,{rules:[e.rules.required],"prepend-icon":"mdi-ticket-account",class:"selectItem mt-1 mb-3",variant:"outlined",modelValue:e.apellido,"onUpdate:modelValue":a[1]||(a[1]=a=>e.apellido=a)},null,8,["rules","modelValue"]),me,(0,s.Wm)(Y.h,{rules:[e.rules.required,e.rules.email],"prepend-icon":"mdi-email",class:"selectItem mt-1 mb-3",variant:"outlined",modelValue:e.correo,"onUpdate:modelValue":a[2]||(a[2]=a=>e.correo=a)},null,8,["rules","modelValue"]),de,(0,s.Wm)(j.rL,{rules:[e.rules.required],"prepend-icon":"mdi-office-building",class:"selectItem mt-1 mb-3",modelValue:e.empresa,"onUpdate:modelValue":a[3]||(a[3]=a=>e.empresa=a),items:["Empresa1","Empresa2","Empresa3","Empresa4","Empresa5","Empresa6"],variant:"outlined"},null,8,["rules","modelValue"]),ce,(0,s.Wm)(te.Z,{class:"selectItem mt-1 mb-3",variant:"outlined",modelValue:e.documento,"onUpdate:modelValue":a[4]||(a[4]=a=>e.documento=a),label:"Registre su Documento"},null,8,["modelValue"])])),_:1}),(0,s.Wm)(A.D,{cols:"12",sm:"12",md:"6",lg:"6",xl:"6",xxl:"6","align-self":"center"},{default:(0,s.w5)((()=>[(0,s.Wm)(le.f,{class:"imguserData",src:se})])),_:1}),(0,s.Wm)(A.D,{cols:"12",class:"mt-8"},{default:(0,s.w5)((()=>[(0,s.Wm)(X.T,{class:"btnEnviar",onClick:a[5]||(a[5]=a=>e.guardar()),width:"200",color:"#029f8f","prepend-icon":"mdi-send",disabled:!e.refFormulario},{default:(0,s.w5)((()=>[(0,s.Uk)("Enviar")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1},8,["modelValue"])])),_:1},8,["style"]),(0,s.Wm)($.v,{modelValue:e.snackbarAdd,"onUpdate:modelValue":a[7]||(a[7]=a=>e.snackbarAdd=a),timeout:2e3,color:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Usuario agregado Exitosamente ")])),_:1},8,["modelValue"])])}var fe=(0,s.aZ)({setup(){const e=(0,f.iH)(""),a=(0,f.iH)(""),o=(0,f.iH)(""),r=(0,f.iH)(""),t=(0,f.iH)(""),l=(0,f.iH)([]),n=(0,f.iH)(!1),u=(0,f.iH)(!1),{smAndDown:i}=(0,b.AW)(),m=(0,v.oR)(),d=(0,s.Fl)((()=>m.state.usuarios.length)),c=()=>{Ae.push("/")},p=()=>{let s={id:d.value+1,nombre:a.value,apellido:o.value,correo:r.value,cursos:e.value,empresa:t.value};m.commit("listarUsuarios",s),u.value=!0,e.value="",a.value="",o.value="",r.value="",t.value="",l.value=[]},w=(0,f.iH)({required:e=>!!e||"Este campo es requerido.",email:e=>{const a=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return a.test(e)||"Correo Invalido"}});return{curso:e,nombre:a,apellido:o,correo:r,empresa:t,documento:l,snackbarAdd:u,smAndDown:i,rules:w,refFormulario:n,returnpage:c,guardar:p}}});const ve=(0,h.Z)(fe,[["render",pe]]);var be=ve,we=(0,s.aZ)({name:"HomeView",components:{EstadisticasView:G,RegisterView:re,UserDataView:be},setup(){const{smAndDown:e}=(0,b.AW)(),a=(0,v.oR)(),o=(0,s.Fl)((()=>a.state.viewPage));return(0,s.YP)(o,((e,o)=>{e===o&&console.log("hi"),"salir"===e&&(Ae.push("/"),a.commit("hiddenDrawer"))})),(0,s.bv)((()=>{a.commit("showDrawer")})),{smAndDown:e,drawerView:o}}});const he=(0,h.Z)(we,[["render",D]]);var ge=he;const Ce={class:"loginPage"},ye=(0,s._)("h4",null,"Usuario",-1),Ve=(0,s._)("h4",null,"Contraseña",-1);function _e(e,a,o,t,l,n){return(0,s.wg)(),(0,s.iD)(s.HY,null,[(0,s._)("div",Ce,[(0,s.Wm)(B._,{class:"pa-4 mb-4 LoginCard",width:"650",color:"#effefb"},{default:(0,s.w5)((()=>[(0,s.Wm)(J.O,{"fast-fail":"",modelValue:e.formLogin,"onUpdate:modelValue":a[4]||(a[4]=a=>e.formLogin=a),onSubmit:(0,r.iM)(e.enviar,["prevent"])},{default:(0,s.w5)((()=>[(0,s.Wm)(U.o,{class:"ma-0",justify:"center"},{default:(0,s.w5)((()=>[(0,s._)("div",{class:(0,W.C_)(e.smAndDown?"CardTitleXS":"CardTitle")}," Login ",2)])),_:1}),(0,s.Wm)(U.o,{class:"ma-0"},{default:(0,s.w5)((()=>[(0,s.Wm)(A.D,{cols:"12",class:"px-0"},{default:(0,s.w5)((()=>[ye,(0,s.Wm)(Y.h,{modelValue:e.usuario,"onUpdate:modelValue":a[0]||(a[0]=a=>e.usuario=a),class:"selectItem mt-1 mb-3",placeholder:"admin/usuario",rules:[e.rules.required],variant:"outlined","prepend-icon":"mdi-account"},null,8,["modelValue","rules"]),Ve,(0,s.Wm)(Y.h,{modelValue:e.password,"onUpdate:modelValue":a[1]||(a[1]=a=>e.password=a),class:"selectItem mt-1 mb-3",placeholder:"admin/password",rules:[e.rules.required],"prepend-icon":"mdi-lock","append-inner-icon":e.passIconEye,variant:"outlined",type:e.passTypeField,"onClick:appendInner":a[2]||(a[2]=a=>e.changeTypeField())},null,8,["modelValue","rules","append-inner-icon","type"])])),_:1}),(0,s.Wm)(A.D,{cols:"12",class:"mt-8"},{default:(0,s.w5)((()=>[(0,s.Wm)(X.T,{type:"submit",class:"btnEnviar",onClick:a[3]||(a[3]=a=>e.enviar()),width:"200",color:"#029f8f","prepend-icon":"mdi-send",disabled:!e.formLogin},{default:(0,s.w5)((()=>[(0,s.Uk)("Ingresar")])),_:1},8,["disabled"])])),_:1})])),_:1})])),_:1},8,["modelValue","onSubmit"])])),_:1})]),(0,s.Wm)($.v,{modelValue:e.snackbarFound,"onUpdate:modelValue":a[5]||(a[5]=a=>e.snackbarFound=a),timeout:2e3,color:"success"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Usuario Registrado ")])),_:1},8,["modelValue"]),(0,s.Wm)($.v,{modelValue:e.snackbarNotFound,"onUpdate:modelValue":a[6]||(a[6]=a=>e.snackbarNotFound=a),timeout:2e3,color:"red"},{default:(0,s.w5)((()=>[(0,s.Uk)(" Usuario Sin Registrar ")])),_:1},8,["modelValue"])],64)}var ke=(0,s.aZ)({setup(){const e=(0,f.iH)(""),a=(0,f.iH)(""),o=(0,f.iH)(""),r=(0,f.iH)(""),s=(0,f.iH)(""),t=(0,f.iH)([]),l=(0,f.iH)(!1),n=(0,f.iH)(!1),u=(0,f.iH)(!1),i=(0,f.iH)("mdi-eye"),m=(0,f.iH)("password"),{smAndDown:d}=(0,b.AW)(),c=(0,v.oR)(),p=()=>{"password"===m.value?(i.value="mdi-eye-off",m.value="text"):(i.value="mdi-eye",m.value="password")},w=()=>{"usuario"===a.value&&"password"===o.value?(n.value=!0,Ae.push("/home"),c.commit("changeViewPage","userdata"),c.commit("changeTypeUser","user")):"admin"===a.value&&"admin"===o.value?(n.value=!0,Ae.push("/home"),c.commit("changeViewPage","register"),c.commit("changeTypeUser","admin")):u.value=!0},h=(0,f.iH)({required:e=>!!e||"Este campo es requerido."});return{curso:e,usuario:a,password:o,correo:r,empresa:s,documento:t,rules:h,formLogin:l,passIconEye:i,passTypeField:m,snackbarFound:n,snackbarNotFound:u,smAndDown:d,enviar:w,changeTypeField:p}}});const De=(0,h.Z)(ke,[["render",_e]]);var We=De;const Ee=[{path:"/",name:"login",component:We},{path:"/home",name:"Home",component:ge},{path:"/userdata",name:"UserData",component:be},{path:"/estadisticas",name:"Estadisticas",component:G},{path:"/register",name:"Register",component:re}],Ue=(0,k.p7)({history:(0,k.r5)("/prospecto/"),routes:Ee});var Ae=Ue,xe=(0,v.MT)({state:{usuarios:[{id:1,nombre:"Jorge",apellido:"Chavez",correo:"jorge.chavez@gmail.com",cursos:[{name:"Curso1",nota:18},{name:"Curso2",nota:0},{name:"Curso3",nota:0},{name:"Curso4",nota:14},{name:"Curso5",nota:20}],empresa:"Empresa1"},{id:2,nombre:"Mateo",apellido:"Ruiz",correo:"mateo.ruiz@gmail.com",cursos:[{name:"Curso1",nota:18},{name:"Curso2",nota:15},{name:"Curso3",nota:15},{name:"Curso4",nota:10},{name:"Curso5",nota:15}],empresa:"Empresa1"},{id:3,nombre:"Maria",apellido:"Rodriguez",correo:"Maria.Rodriguez@gmail.com",cursos:[{name:"Curso1",nota:9},{name:"Curso2",nota:14},{name:"Curso3",nota:15},{name:"Curso4",nota:14},{name:"Curso5",nota:19}],empresa:"Empresa1"},{id:4,nombre:"Mario",apellido:"Baltazar",correo:"mario.baltazar@gmail.com",cursos:[{name:"Curso1",nota:0},{name:"Curso2",nota:0},{name:"Curso3",nota:0},{name:"Curso4",nota:0},{name:"Curso5",nota:0}],empresa:"Empresa1"},{id:5,nombre:"Julio",apellido:"Sanchez",correo:"julio.sanchez@gmail.com",cursos:[{name:"Curso1",nota:11},{name:"Curso2",nota:10},{name:"Curso3",nota:10},{name:"Curso4",nota:14},{name:"Curso5",nota:17}],empresa:"Empresa2"},{id:6,nombre:"Roberto",apellido:"Llanos",correo:"roberto.llanos@gmail.com",cursos:[{name:"Curso1",nota:14},{name:"Curso2",nota:16},{name:"Curso3",nota:19},{name:"Curso4",nota:20},{name:"Curso5",nota:20}],empresa:"Empresa2"},{id:7,nombre:"Jazmine",apellido:"Cavana",correo:"jazmine.cavana@gmail.com",cursos:[{name:"Curso1",nota:14},{name:"Curso2",nota:15},{name:"Curso3",nota:6},{name:"Curso4",nota:3},{name:"Curso5",nota:20}],empresa:"Empresa2"},{id:8,nombre:"Georgina",apellido:"Quiroz",correo:"georgina.quiroz@gmail.com",cursos:[{name:"Curso1",nota:19},{name:"Curso2",nota:14},{name:"Curso3",nota:13},{name:"Curso4",nota:14},{name:"Curso5",nota:17}],empresa:"Empresa3"},{id:9,nombre:"Tereza",apellido:"Perez",correo:"tereza.perez@gmail.com",cursos:[{name:"Curso1",nota:19},{name:"Curso2",nota:4},{name:"Curso3",nota:16},{name:"Curso4",nota:8},{name:"Curso5",nota:17}],empresa:"Empresa4"},{id:10,nombre:"Luis",apellido:"Advincula",correo:"luiz.advincula@gmail.com",cursos:[{name:"Curso1",nota:15},{name:"Curso2",nota:13},{name:"Curso3",nota:12},{name:"Curso4",nota:11},{name:"Curso5",nota:17}],empresa:"Empresa5"},{id:11,nombre:"Cesar",apellido:"Cueto",correo:"cesar.cueto@gmail.com",cursos:[{name:"Curso1",nota:20},{name:"Curso2",nota:20},{name:"Curso3",nota:20},{name:"Curso4",nota:20},{name:"Curso5",nota:20}],empresa:"Empresa6"}],viewPage:"userdata",showDrawer:!1,typeUser:""},getters:{},mutations:{listarUsuarios(e,a){e.usuarios.push(a)},changeViewPage(e,a){e.viewPage=a},showDrawer(e){e.showDrawer=!0},changeTypeUser(e,a){e.typeUser=a},hiddenDrawer(e){e.showDrawer=!1},addCursos(e,a){const o=e.usuarios.findIndex((({nombre:e,empresa:o})=>{if(e===a.nombre&&o===a.empresa)return!0}));e.usuarios[o].cursos=a.cursos}},actions:{},modules:{}}),je=(o(9773),o(8460)),He=(0,je.Rd)();async function Fe(){const e=await o.e(461).then(o.t.bind(o,5933,23));e.load({google:{families:["Roboto:100,300,400,500,700,900&display=swap"]}})}Fe(),(0,r.ri)(_).use(Ae).use(xe).use(He).component("EasyDataTable",S.Z).mount("#app")}},a={};function o(r){var s=a[r];if(void 0!==s)return s.exports;var t=a[r]={exports:{}};return e[r](t,t.exports,o),t.exports}o.m=e,function(){var e=[];o.O=function(a,r,s,t){if(!r){var l=1/0;for(m=0;m<e.length;m++){r=e[m][0],s=e[m][1],t=e[m][2];for(var n=!0,u=0;u<r.length;u++)(!1&t||l>=t)&&Object.keys(o.O).every((function(e){return o.O[e](r[u])}))?r.splice(u--,1):(n=!1,t<l&&(l=t));if(n){e.splice(m--,1);var i=s();void 0!==i&&(a=i)}}return a}t=t||0;for(var m=e.length;m>0&&e[m-1][2]>t;m--)e[m]=e[m-1];e[m]=[r,s,t]}}(),function(){var e,a=Object.getPrototypeOf?function(e){return Object.getPrototypeOf(e)}:function(e){return e.__proto__};o.t=function(r,s){if(1&s&&(r=this(r)),8&s)return r;if("object"===typeof r&&r){if(4&s&&r.__esModule)return r;if(16&s&&"function"===typeof r.then)return r}var t=Object.create(null);o.r(t);var l={};e=e||[null,a({}),a([]),a(a)];for(var n=2&s&&r;"object"==typeof n&&!~e.indexOf(n);n=a(n))Object.getOwnPropertyNames(n).forEach((function(e){l[e]=function(){return r[e]}}));return l["default"]=function(){return r},o.d(t,l),t}}(),function(){o.d=function(e,a){for(var r in a)o.o(a,r)&&!o.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:a[r]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(a,r){return o.f[r](e,a),a}),[]))}}(),function(){o.u=function(e){return"js/webfontloader.e90cc099.js"}}(),function(){o.miniCssF=function(e){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)}}(),function(){var e={},a="prospecto:";o.l=function(r,s,t,l){if(e[r])e[r].push(s);else{var n,u;if(void 0!==t)for(var i=document.getElementsByTagName("script"),m=0;m<i.length;m++){var d=i[m];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==a+t){n=d;break}}n||(u=!0,n=document.createElement("script"),n.charset="utf-8",n.timeout=120,o.nc&&n.setAttribute("nonce",o.nc),n.setAttribute("data-webpack",a+t),n.src=r),e[r]=[s];var c=function(a,o){n.onerror=n.onload=null,clearTimeout(p);var s=e[r];if(delete e[r],n.parentNode&&n.parentNode.removeChild(n),s&&s.forEach((function(e){return e(o)})),a)return a(o)},p=setTimeout(c.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=c.bind(null,n.onerror),n.onload=c.bind(null,n.onload),u&&document.head.appendChild(n)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/prospecto/"}(),function(){var e={143:0};o.f.j=function(a,r){var s=o.o(e,a)?e[a]:void 0;if(0!==s)if(s)r.push(s[2]);else{var t=new Promise((function(o,r){s=e[a]=[o,r]}));r.push(s[2]=t);var l=o.p+o.u(a),n=new Error,u=function(r){if(o.o(e,a)&&(s=e[a],0!==s&&(e[a]=void 0),s)){var t=r&&("load"===r.type?"missing":r.type),l=r&&r.target&&r.target.src;n.message="Loading chunk "+a+" failed.\n("+t+": "+l+")",n.name="ChunkLoadError",n.type=t,n.request=l,s[1](n)}};o.l(l,u,"chunk-"+a,a)}},o.O.j=function(a){return 0===e[a]};var a=function(a,r){var s,t,l=r[0],n=r[1],u=r[2],i=0;if(l.some((function(a){return 0!==e[a]}))){for(s in n)o.o(n,s)&&(o.m[s]=n[s]);if(u)var m=u(o)}for(a&&a(r);i<l.length;i++)t=l[i],o.o(e,t)&&e[t]&&e[t][0](),e[t]=0;return o.O(m)},r=self["webpackChunkprospecto"]=self["webpackChunkprospecto"]||[];r.forEach(a.bind(null,0)),r.push=a.bind(null,r.push.bind(r))}();var r=o.O(void 0,[998],(function(){return o(4512)}));r=o.O(r)})();
//# sourceMappingURL=app.55a48615.js.map