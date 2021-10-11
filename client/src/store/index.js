import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)


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
  },
  plugins: [createPersistedState()],
})
