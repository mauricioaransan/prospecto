import { createRouter, createWebHashHistory , RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import EstadisticasView from '@/views/EstadisticasView.vue';
import RegisterView from '@/views/RegisterView.vue';
import UserDataViewVue from '@/views/UserDataView.vue';



const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'login',
    component: LoginView
  },
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/userdata',
    name: 'UserData',
    component: UserDataViewVue
  },
  {
    path: '/estadisticas',
    name: 'Estadisticas',
    component: EstadisticasView
  },
  {
    path: '/register',
    name: 'Register',
    component: RegisterView
  },
]

const router = createRouter({
  history: createWebHashHistory (process.env.BASE_URL),
  routes
})

export default router
