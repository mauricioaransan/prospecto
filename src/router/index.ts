import { createRouter, createWebHashHistory , RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import LoginView from '@/views/LoginView.vue';
import EstadisticasView from '@/views/EstadisticasView.vue';
import RegisterView from '@/views/RegisterView.vue'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
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
