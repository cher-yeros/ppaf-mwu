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
import Issue from '../components/staff/Issue.vue';
import Borrow from '../components/staff/Borrow.vue';
import Leave_Issue from '../components/staff/Leave_Issue.vue';
import Show_Status from '../components/staff/Show_status.vue';
import Transfer from '../components/staff/Transfer.vue';
import AcceptAndGiveIssue from '../components/storekeeper/A&Gissue.vue';
import ViewProperty from '../components/storekeeper/ViewP.vue';
import TakeProperty from '../components/storekeeper/TakeP.vue';
import ManageIssue from '../components/storekeeper/ManageP.vue';
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
  {
    path: '/sk/agissue',
    name: 'Accept and Give Issue',
    component: AcceptAndGiveIssue
  },
  {
    path: '/sk/viewP',
    name: 'ViewProperty',
    component: ViewProperty
  },
  {
    path: '/sk/takep',
    name: 'TakeProperty',
    component: TakeProperty
  },
  {
    path: '/sk/managep',
    name: 'ManageIssue',
    component: ManageIssue
  },
  {
    path: '/s/Issue',
    name: 'Issue',
    component: Issue
  },
  {
    path:'/s/Borrow',
    name:'Borrow',
    component:Borrow
  },
  {
   path:'/s/Transfer',
   name:'Transfer',
   componet:Transfer
  },
  {
    path:'/s/Leave_Issue',
    name:'Leave_issue',
    component: Leave_Issue

  },
  {
     path:'/s/Show_status',
     name:'Show_status',
     component: Show_Status
  },

  {
    path: '/s/staff',
    name: 'Staff',
    component: Staff
  },
  {
    path: '/s/store-keeper',
    name: 'StoreKeeper',
    component: StoreKeeper
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
