import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import AdminAppBar from './components/admin/AppBar.vue';
import StaffAppBar from './components/staff/AppBar.vue';
import StoreKeeperAppBar from './components/storekeeper/AppBar.vue';
import PurchaserAppBar from './components/purchaser/AppBar.vue';
import FormDialog from './components/admin/FormProperty.vue';
import EmpForm from './components/admin/EmpForm.vue';
import PropForm from './components/storekeeper/FormProperty.vue';
import Alert from './components/Alert.vue';
const axios = require('axios');

Vue.prototype.$axios = axios

Vue.config.productionTip = false
Vue.component('a-app-bar', AdminAppBar)
Vue.component('sk-app-bar', StoreKeeperAppBar)
Vue.component('p-app-bar', PurchaserAppBar)
Vue.component('s-app-bar', StaffAppBar)
Vue.component('alert',Alert)
Vue.component('property-form', FormDialog)
Vue.component('emp-form',EmpForm)
Vue.component('property-form', PropForm)

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
