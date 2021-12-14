import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import connexion from "../views/connexion.vue";
import register from "../views/register/register.vue";
import mailregister from "../views/register/mailregister.vue";
import mailvalide from "../views/register/mailvalide";
import actu from "../views/actu.vue";
import article from "../views/article.vue";
import fan_art from "../components/pageHome/card/cardManga";
import new_article from "../views/newArticle.vue";
import test from "../views/test.vue";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/test",
        name: "test",
        component: test,
    },
    {
        path: "/connexion",
        name: "connexion",
        component: connexion,
    },
    {
        path: "/register",
        name: "register",
        component: register,
    },

    {
        path: "/mailregister",
        name: "mailregister",
        component: mailregister,
    },
    {
        path: "/mailvalide",
        name: "mailvalide",
        component: mailvalide,
    },
    {
        path: "/actu",
        name: "actu",
        component: actu,
    },
    {
        path: "/article/:id",
        name: "article",
        component: article,
    },
    {
        path: "/fan_art",
        name: "fan_art",
        component: fan_art,
    },
    {
        path: "/new_article",
        name: "new_article",
        component: new_article,
    },
    {
        path: "/about",
        name: "About",
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/About.vue"
            ),
    },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;