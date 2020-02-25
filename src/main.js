import Vue from 'vue'
import axios from 'axios'
import App from './App'
import router from './router'
import store from './store/store.js'

// Vue.use(axios);
Vue.prototype.axios = axios    //全局注册，使用方法为:this.$axios


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store, // 全局使用vuex
  components: { App },
  template: '<App/>'
})