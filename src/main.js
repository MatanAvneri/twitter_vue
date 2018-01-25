// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'

Vue.config.productionTip = false

export const ADD_NEW_TWEET = 'ADD_NEW_TWEET'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tweets: []
  },
  mutations: {
    [ADD_NEW_TWEET] (state, tweetData) {
      state.tweets.unshift(tweetData)
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
