import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AppBar from './components/admin/AppBar.vue';
import FormDialog from './components/admin/FormProperty.vue';
import EmpForm from './components/admin/EmpForm.vue';

const axios = require('axios');

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.component('app-bar', AppBar)
Vue.component('property-form', FormDialog)
Vue.component('emp-form',EmpForm)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
