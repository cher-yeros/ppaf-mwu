import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue';
import Admin from '../components/admin/Admin.vue';
import Purchaser from '../components/purchaser/Purchaser.vue';
import Staff from '../components/staff/Staff.vue';
import StoreKeeper from '../components/storekeeper/StoreKeeper.vue';
import Log from '../components/admin/Log.vue';
import Transaction from '../components/admin/Transcation.vue';
import Employees from '../components/admin/Employees.vue';

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
    name: 'store-keeper',
    component: StoreKeeper
  },
  {
    path: '/sa',
    name: 'admin',
    component: Admin
  },
  {
    path: '/purchaser',
    name: 'purchaser',
    component: Purchaser
  },
  {
    path: '/sa/logs',
    name: 'logs',
    component: Log
  },
  {
    path: '/sa/employees',
    name: 'employees',
    component: Employees
  },
  {
    path: '/sa/transaction',
    name: 'transaction',
    component: Transaction
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
