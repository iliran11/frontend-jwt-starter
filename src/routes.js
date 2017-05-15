import React from 'react';
import { Route } from 'react-router';
import App from './App.js';
import Signin from './components/auth/signin.jsx';


export default (
    <Route path="/" component={App}>
        <Route path="signin" component={Signin} />
    </Route>
)