import Vue from "vue";

import store from "./store/index.js";

import VueRouter from "vue-router";
import { routes } from "./routes";


import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
  routes,
  mode: "history",
});

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
