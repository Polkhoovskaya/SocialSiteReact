import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';
import { loginThunkCreator } from '../../redux/auth-reducer';
import LoginForm from './LoginForm';

//a unique name for the form
const LoginReduxFrom = reduxForm({ form: 'login' })(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.loginThunkCreator(formData.login, formData.password, formData.rememberMe);
    }

    return <LoginReduxFrom onSubmit={onSubmit} isAuth={props.isAuth} />
}
// export default Login;
const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, { loginThunkCreator })(Login);