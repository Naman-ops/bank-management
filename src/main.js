import Vue from 'vue'
import App from './App.vue'
import {routes} from './routing'
import VueRouter from 'vue-router'
import vuelidate from 'vuelidate'
import {store} from './store/store'


export const bus = new Vue();

Vue.use(vuelidate)

Vue.use(VueRouter);
const router = new VueRouter({
  routes,
  mode:'history'
  
})

new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
