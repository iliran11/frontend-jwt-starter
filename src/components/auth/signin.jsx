import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { getLoginStatus } from '../../actions/actions.js';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';


class Signin extends Component {
    constructor(props) {
        super(props);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }
    handleFormSubmit(email, password) {
        this.props.getLoginStatus();
    }
    render() {
        const { handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit(this.handleFormSubmit)}>
                <fieldset className="form-group">
                    <label>Email:</label>
                    <Field className="form-control" name="email" component="input" type="text" placeholder="email" />
                </fieldset>
                <fieldset className="form-group">
                    <label>password:</label>
                    <Field className="form-control" name="password" component="input" type="text" placeholder="password" />
                </fieldset>
                <button action="submit" className="btn btn-primary">Sign In</button>
            </form>
        );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({getLoginStatus}, dispatch)
}
 Signin = reduxForm({
    form: 'signin'
})(Signin);

Signin = connect(null,mapDispatchToProps)(Signin)

export default Signin;