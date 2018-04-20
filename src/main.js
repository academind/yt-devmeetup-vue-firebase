import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import { store } from './store'
import DateFilter from './filters/date'

Vue.use(Vuetify)
Vue.config.productionTip = false

Vue.filter('date', DateFilter)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB6zVuk6lgucc_Xd2ufjQB1E9Mx9bQKERs',
      authDomain: 'devmeetup-e83cd.firebaseapp.com',
      databaseURL: 'https://devmeetup-e83cd.firebaseio.com',
      projectId: 'devmeetup-e83cd',
      storageBucket: 'devmeetup-e83cd.appspot.com'
    })
  }
})
