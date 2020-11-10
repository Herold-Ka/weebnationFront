import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import connexion from '../views/connexion.vue'
import register from '../views/register.vue'
import mailregister from '../views/mailregister.vue'
import carrousel from '../components/Carrousel.vue'
import navmaj from '../components/navM_A_J.vue'
import actu from '../views/actu.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/connexion',
    name: 'connexion',
    component: connexion
  },
  {
    path: '/register',
    name: 'register',
    component: register
  },
  {
    path: '/mailregister',
    name: 'mailregister',
    component: mailregister
  },
  {
    path: '/carrousel',
    name: '/carrousel',
    component: carrousel,
  },
  {
    path: '/navmaj',
    name: '/navmaj',
    component: navmaj,
  },
  {
    path: '/actu',
    name: '/actu',
    component: actu,
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
