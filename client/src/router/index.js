import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue';
import Admin from '../components/admin/Admin.vue';
import Purchaser from '../components/purchaser/Purchaser.vue';
import Staff from '../components/staff/Staff.vue';
import StoreKeeper from '../components/storekeeper/StoreKeeper.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/staff',
    name: 'Staff',
    component: Staff
  },
  {
    path: '/store-keeper',
    name: 'StoreKeeper',
    component: StoreKeeper
  },
  {
    path: '/sa',
    name: 'Admin',
    component: Admin
  },
  {
    path: '/purchaser',
    name: 'Purchaser',
    component: Purchaser
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
