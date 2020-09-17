import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import Clipboard from 'v-clipboard'
import '@/assets/style.css'

Vue.use(VueAxios, axios)
Vue.use(Clipboard)

Vue.config.productionTip = false

new Vue({
  // router,
  render: h => h(App)
}).$mount('#app')
