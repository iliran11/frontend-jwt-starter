import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '../router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    authenicationStatus: false,
    authenticationError: ''
  },
  getters: {
    authenicationStatus(state) {
      return state.authenticationStatus
    }
  },
  mutations: {
    authenticate(state, authenticationStatus) {
      state.authenticated = authenticationStatus;
    },
    authenticationError(state, isError) {
      state.authenticationError = 'Authentication Error';
    }
  },
  actions: {
    getLoginStatus(context, credentials) {
      // Post the credentials
      axios.post('http://localhost:3001/signin', {
        'email': credentials.email,
        'password': credentials.password
      })
        .then(response => {
          // If request if good ...
          // Update state to indicate user is authenticated
          context.commit('authenticate', true);
          // Save the JWT token
          localStorage.setItem('token', response.data.token);
          // clear error ...
          if (context.state.authenticationError) {
            context.commit('authenticationError', false);
          }
          // -Redirect to the route '/feature/'
          router.push('/feature');
        })
        .catch(response => {
          // If request is bad ...
          // -Show an error to the user
          context.commit('authenticationError', true);
        })
    }
  }
})

export default store
