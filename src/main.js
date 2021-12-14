import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
// Install BootstrapVue
Vue.use(BootstrapVue, IconsPlugin);
// Optionally install the BootstrapVue icon components plugin
//Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

library.add(faUserSecret);
Vue.component("font-awesome-icon", FontAwesomeIcon);
//Vue.prototype.$Apiurl = "https://weebnation.fr/";
Vue.prototype.$Apiurl = "http://localhost:3000/";

Vue.use(VueAxios, axios);

Vue.config.productionTip = false;

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");