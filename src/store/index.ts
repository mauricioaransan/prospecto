import { createStore } from 'vuex'

export default createStore({
  state: {
    usuarios:[
      {
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
        nombre    : 'Julio',
        apellido  : 'Sanchez',
        correo    : 'julio.sanchez@gmail.com',
        cursos     : 'Curso2',
        empresa   : 'Empresa2',
      },
      {
        nombre    : 'Roberto',
        apellido  : 'Llanos',
        correo    : 'roberto.llanos@gmail.com',
        cursos     : 'Curso3',
        empresa   : 'Empresa2',
      },
      {
        nombre    : 'Jazmine',
        apellido  : 'Cavana',
        correo    : 'jazmine.cavana@gmail.com',
        cursos     : 'Curso1',
        empresa   : 'Empresa2',
      },
      {
        nombre    : 'Georgina',
        apellido  : 'Quiroz',
        correo    : 'georgina.quiroz@gmail.com',
        cursos     : 'Curso1',
        empresa   : 'Empresa3',
      },
      {
        nombre    : 'Tereza',
        apellido  : 'Perez',
        correo    : 'tereza.perez@gmail.com',
        cursos     : 'Curso1',
        empresa   : 'Empresa4',
      },
      {
        nombre    : 'Luis',
        apellido  : 'Advincula',
        correo    : 'luiz.advincula@gmail.com',
        cursos     : 'Curso1',
        empresa   : 'Empresa5',
      },
      {
        nombre    : 'Cesar',
        apellido  : 'Cueto',
        correo    : 'cesar.cueto@gmail.com',
        cursos     : 'Curso1',
        empresa   : 'Empresa6',
      },
  ],
  },
  getters: {
  },
  mutations: {
    listarUsuarios(state,totalUsuarios){
      state.usuarios.push(totalUsuarios);
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
