import { RouteRecordRaw } from 'vue-router'

const router: Array<RouteRecordRaw> = [
  {
    path: '/about',
    component: () => import(/* webpackChunkName: 'about' */ '../../views/About.vue')
  }
]

export default router
