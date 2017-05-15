import axios from 'axios';
import { browserHistory } from 'react-router';
import { SUCCESS_AUTH, FAILURE_AUTH } from './types.js';
// const token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1OTE2YTg5ZDYxZTY5MjI1Mjg2OTk2MmUiLCJpYXQiOjE0OTQ2NTkwMTgwMjN9.A-zAD9i--NXEl2S3rc2aADbU6dmVi26nxaI4iY3Wkok';

export function getLoginStatus(status) {
  return dispatch => {
    axios.post('http://localhost:3001/signin', {
      "email": "tony1235",
      "password": "3"
    })
      .then(response => {
        // If request is good ...
        // -Update state to indicate user is authenticated
        dispatch({ type: SUCCESS_AUTH })
        // -Save the JWT token
        localStorage.setItem('token', response.data.token);
        // -Redirect to the route '/feature/'
        browserHistory.push('/feature');
      })
      .catch(() => {
        // If request is bad ...
        dispatch({ type: FAILURE_AUTH })
        // -Show an error to the user
      })
  }
}
