import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import { routes } from "@/routes";

Vue.config.productionTip = false;

// Tell Vue to use the vue router
Vue.use(VueRouter);

// Setup Vue Router Routes
const router = new VueRouter({
  routes: routes,
  mode: "history",
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
  },
});

router.beforeEach((to, from, next) => {
  console.log("Inside Global Guard", to, from);
  next();
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
