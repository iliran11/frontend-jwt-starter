import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import authReducer from './auth-reducer.js';

const rootReducer = combineReducers({
  form,
  authentication: authReducer
});

export default rootReducer;