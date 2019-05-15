import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead'
import App from './App.vue'

// Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Global registration
Vue.component('vue-bootstrap-typeahead', VueBootstrapTypeahead)

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  render: h => h(App),
}).$mount('#app')
