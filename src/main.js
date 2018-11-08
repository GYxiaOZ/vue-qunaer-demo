import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import App from './App.vue'
import router from './router'
import fastCkick from 'fastclick'
import 'normalize.css'
import './assets/styles/border.css'
import './assets/styles/iconfont.css'

// require styles
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false
fastCkick.attach(document.body)
Vue.use(VueAwesomeSwiper)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
