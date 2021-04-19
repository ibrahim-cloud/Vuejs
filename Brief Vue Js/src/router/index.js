import { createRouter, createWebHistory } from 'vue-router'
import InfosPersonnelles from '../views/InfosPersonnelles.vue'
import InfosProfessionnellesForm from '../views/InfosProfessionnelles.vue'
import Profile from '../views/Profile.vue'

const routes = [
  {
    path: '/',
    name: 'InfosPersonnelles',
    component: InfosPersonnelles
  },
  {
    path: '/InfosProfessionnelles',
    name: 'InfosProfessionnelles',
    component: InfosProfessionnellesForm
  },
  {
    path: '/Profile',
    name: 'Profile',
    component: Profile
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
