import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'

const permissionModules = require.context('./permissionModules', true, /\.ts$/)
let permissionRouter: RouteRecordRaw[] = []
permissionModules.keys().forEach(key => {
  if (key === './index.ts') return
  permissionRouter = permissionRouter.concat(permissionModules(key).default)
})

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  ...permissionRouter
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
