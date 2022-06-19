import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Lotr from '../views/Lotr.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
        path: '/lotr',
        name: 'lotr',
        component: Lotr
      }
  ]
})

export default router
