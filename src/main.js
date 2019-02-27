import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { sync } from 'vuex-router-sync'
import VueDragscroll from 'vue-dragscroll'

Vue.config.productionTip = false
Vue.use(VueDragscroll)
sync(store, router)

window.eventBus = new Vue({});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
