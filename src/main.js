import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'

Vue.config.productionTip = false
Vue.use(api)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
