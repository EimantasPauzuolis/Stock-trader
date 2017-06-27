// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/store'
import axios from 'axios'
Vue.config.productionTip = false
axios.defaults.baseURL = 'https://vuejs-stock-trader-2bb20.firebaseio.com/';
Vue.prototype.$axios = axios;
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  store
});
