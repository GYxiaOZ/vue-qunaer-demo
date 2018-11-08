import Vue from 'vue'
import App from './App.vue'
import router from './router'
import fastCkick from 'fastclick'
import 'normalize.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

Vue.config.productionTip = false
fastCkick.attach(document.body)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
