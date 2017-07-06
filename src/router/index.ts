import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

import Subject_Interest from "@/components/Subject_Interest.vue";
import Eligibility from "@/components/Eligibility.vue";
import congratulations from "@/components/congratulations.vue";


export default new Router({
  routes: [
    {
      path: '/',
      name: 'Subject_cInterest',
      component: Subject_Interest,
    },
    {
      path: '/Eligibility',
      name: 'Eligibility',
      component: Eligibility,
    },
    {
      path: '/congratulations',
      name: 'congratulations',
      component: congratulations,
    },
  ],
});

