import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import functions from "../shared/functions";

Vue.use(Vuetify);
const opts = {};
const vuetify = new Vuetify(opts);

Vue.config.productionTip = false;
Vue.use(functions);

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount("#app");
