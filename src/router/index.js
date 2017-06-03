import Vue from 'vue'
import Router from 'vue-router'
import signIn from '../components/auth/signin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/sign-in',
      name: 'sign-in',
      component: signIn
    }
  ]
})
