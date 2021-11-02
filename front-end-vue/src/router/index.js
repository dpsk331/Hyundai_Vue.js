import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Menu01 from './menu01'
import Menu02 from './menu02'
import Menu03 from './menu03'
import Menu04 from './menu04'
import Menu05 from './menu05'
import Menu06 from './menu06'
import menu07 from './menu07'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  ...Menu01,
  ...Menu02,
  ...Menu03,
  ...Menu04,
  ...Menu05,
  ...Menu06,
  ...menu07
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
