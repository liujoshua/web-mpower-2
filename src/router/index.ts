import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Hello from "@/components/Hello.vue";
import About from "@/components/About.vue";
import congratulations from "@/components/congratulations.vue";


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello,
    },
    {
      path: '/About',
      name: 'About',
      component: About,
    },
    {
      path: '/congratulations',
      name: 'congratulations',
      component: congratulations,
    },
  ],
});

