import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import {
  get,
  post
} from './utils/http'

// 调试工具
import vConsole from 'vconsole';
new vConsole();


Vue.config.productionTip = false
Vue.prototype.$http = {
  get,
  post
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')