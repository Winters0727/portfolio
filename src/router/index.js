import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '@/views/index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: () => import('@/views/introduction')
  },
  {
    path: '/activity',
    name: 'activity',
    component: () => import('@/views/activity')
  },
  {
    path: '/project',
    name: 'project',
    component: () => import('@/views/project')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
