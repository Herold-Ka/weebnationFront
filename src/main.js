import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//Vue.prototype.$Apiurl = "http://51.210.97.80/";
Vue.prototype.$Apiurl = "http://localhost:3000/article/";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')