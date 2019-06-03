import Vue from 'vue'
import App from './App.vue'

//working in development mode, no need production warnings.
Vue.config.productionTip = false 

new Vue({
  render: h => h(App), //h=createElement, mount=place it into DOM
}).$mount('#app')
