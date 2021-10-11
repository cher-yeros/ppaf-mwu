import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const model = {
  token: {
    default: null,
    saved: true,
  },
  user: {
    default: null,
    saved: true,
  },
  loggedIn: {
    default: false,
    saved: true,
  },
};


export default new Vuex.Store({
  state: {
    id: {
      id : 261
    },
    login : {
      loggedIn : false,
      user : {},
    },
    alertData : {
      show : false,
      msg : '',
      type : ''
    }
  },
  mutations: {
    storeLogin(state, credential) {
      state.login.user = credential
      state.login.loggedIn = true
    },
    showAlert(state, alert) {
      state.alertData = alert
    }
  },
  actions: {
  },
  modules: {
  }
})
