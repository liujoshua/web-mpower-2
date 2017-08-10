// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import Multiselect from 'vue-multiselect'
import Vuetify from 'vuetify'
Vue.use(Vuetify)

  // register globally
var vueScrollTo = require('vue-scrollto')
Vue.use(vueScrollTo)
Vue.component(Multiselect)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
