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
        // axios.post('https://social-network.samuraijs.com/api/1.0/auth/login', {
        //     formData,
        //     withCredentials: true,
        //     headers: { 'API-KEY': '372328b3-bf81-42d0-8c1e-fab40f233c14' },
        //     captcha: true
        // });
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