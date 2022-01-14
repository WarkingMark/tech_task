import Vue from 'vue'
import VueRouter from 'vue-router'
import Add from '@/views/Add'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Add',
    component: Add,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
