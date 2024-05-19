import { createRouter, createWebHistory } from 'vue-router'
import App from '../App.vue'
import ProjectDisplay from '../components/ProjectDisplay.vue'
import Main from '../components/Main.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Main
  },
  {
    path: '/projects',
    name: 'projects',
    component: ProjectDisplay
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
