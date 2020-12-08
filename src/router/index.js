import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import connexion from '../views/connexion.vue'
import register from '../views/register.vue'
import mailregister from '../views/mailregister.vue'
import actu from '../components/cardActu'
import fan_art from '../components/cardFan-Art.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/connexion',
        name: 'connexion',
        component: connexion,
    },
    {
        path: '/register',
        name: 'register',
        component: register,
    },
    {
        path: '/mailregister',
        name: 'mailregister',
        component: mailregister,
    },
    {
        path: '/actu',
        name: 'actu',
        component: actu,
    },
    {
        path: '/fan_art',
        name: 'fan_art',
        component: fan_art,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/About.vue')
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router