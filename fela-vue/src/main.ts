import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Renderer } from 'fela-vue'

Vue.mixin((new Renderer()).mixin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
