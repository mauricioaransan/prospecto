import { createStore } from 'vuex'

export default createStore({
  state: {
    usuarios:[
      {
        id        : 1,
        nombre    : 'Jorge',
        apellido  : 'Chavez',
        correo    : 'jorge.chavez@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 18},
          {name : 'Curso2', nota: 0},
          {name : 'Curso3', nota: 0},
          {name : 'Curso4', nota: 14},
          {name : 'Curso5', nota: 20},
        ],
        empresa   : 'Empresa1',
      },
      {
        id        : 2,
        nombre    : 'Mateo',
        apellido  : 'Ruiz',
        correo    : 'mateo.ruiz@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 18},
          {name : 'Curso2', nota: 15},
          {name : 'Curso3', nota: 15},
          {name : 'Curso4', nota: 10},
          {name : 'Curso5', nota: 15},
        ],
        empresa   : 'Empresa1',
      },
      {
        id        : 3,
        nombre    : 'Maria',
        apellido  : 'Rodriguez',
        correo    : 'Maria.Rodriguez@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 9},
          {name : 'Curso2', nota: 14},
          {name : 'Curso3', nota: 15},
          {name : 'Curso4', nota: 14},
          {name : 'Curso5', nota: 19},
        ],
        empresa   : 'Empresa1',
      },
      {
        id        : 4,
        nombre    : 'Mario',
        apellido  : 'Baltazar',
        correo    : 'mario.baltazar@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 0},
          {name : 'Curso2', nota: 0},
          {name : 'Curso3', nota: 0},
          {name : 'Curso4', nota: 0},
          {name : 'Curso5', nota: 0},
        ],
        empresa   : 'Empresa1',
      },
      {
        id        : 5,
        nombre    : 'Julio',
        apellido  : 'Sanchez',
        correo    : 'julio.sanchez@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 11},
          {name : 'Curso2', nota: 10},
          {name : 'Curso3', nota: 10},
          {name : 'Curso4', nota: 14},
          {name : 'Curso5', nota: 17},
        ],
        empresa   : 'Empresa2',
      },
      {
        id        : 6,
        nombre    : 'Roberto',
        apellido  : 'Llanos',
        correo    : 'roberto.llanos@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 14},
          {name : 'Curso2', nota: 16},
          {name : 'Curso3', nota: 19},
          {name : 'Curso4', nota: 20},
          {name : 'Curso5', nota: 20},
        ],
        empresa   : 'Empresa2',
      },
      {
        id        : 7,
        nombre    : 'Jazmine',
        apellido  : 'Cavana',
        correo    : 'jazmine.cavana@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 14},
          {name : 'Curso2', nota: 15},
          {name : 'Curso3', nota: 6},
          {name : 'Curso4', nota: 3},
          {name : 'Curso5', nota: 20},
        ],
        empresa   : 'Empresa2',
      },
      {
        id        : 8,
        nombre    : 'Georgina',
        apellido  : 'Quiroz',
        correo    : 'georgina.quiroz@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 19},
          {name : 'Curso2', nota: 14},
          {name : 'Curso3', nota: 13},
          {name : 'Curso4', nota: 14},
          {name : 'Curso5', nota: 17},
        ],
        empresa   : 'Empresa3',
      },
      {
        id        : 9,
        nombre    : 'Tereza',
        apellido  : 'Perez',
        correo    : 'tereza.perez@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 19},
          {name : 'Curso2', nota: 4},
          {name : 'Curso3', nota: 16},
          {name : 'Curso4', nota: 8},
          {name : 'Curso5', nota: 17},
        ],
        empresa   : 'Empresa4',
      },
      {
        id        : 10,
        nombre    : 'Luis',
        apellido  : 'Advincula',
        correo    : 'luiz.advincula@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 15},
          {name : 'Curso2', nota: 13},
          {name : 'Curso3', nota: 12},
          {name : 'Curso4', nota: 11},
          {name : 'Curso5', nota: 17},
        ],
        empresa   : 'Empresa5',
      },
      {
        id        : 11,
        nombre    : 'Cesar',
        apellido  : 'Cueto',
        correo    : 'cesar.cueto@gmail.com',
        cursos    : [
          {name : 'Curso1', nota: 20},
          {name : 'Curso2', nota: 20},
          {name : 'Curso3', nota: 20},
          {name : 'Curso4', nota: 20},
          {name : 'Curso5', nota: 20},
        ],
        empresa   : 'Empresa6',
      },
  ],
    viewPage:'userdata',
    showDrawer:false,
    typeUser:''
  },
  getters: {
  },
  mutations: {
    listarUsuarios(state,totalUsuarios){
      state.usuarios.push(totalUsuarios);
    },

    changeViewPage(state,value){
      state.viewPage = value;
    },

    showDrawer(state){
      state.showDrawer = true;
    },
    
    changeTypeUser(state,value){
      state.typeUser = value;
    },

    hiddenDrawer(state){
      state.showDrawer = false;
    },

    addCursos(state,finalCurso){
      const indexado = state.usuarios.findIndex(({nombre,empresa}:any)=>{
        if(nombre === finalCurso.nombre && empresa === finalCurso.empresa){
          return true
        }
      })
      state.usuarios[indexado].cursos = finalCurso.cursos;
    }
  },
  actions: {
    // agregarUsuarios({commit,state}, usuario){
    //   const midUsuario = usuario ? usuario : []
    //   const listaUsuarios = state.usuarios.push(midUsuario);

    //   commit('listarUsuarios', listaUsuarios)
    // }
  },
  modules: {
  }
})
