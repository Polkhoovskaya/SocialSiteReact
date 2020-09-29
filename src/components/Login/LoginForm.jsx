import React from 'react';
import { Redirect } from 'react-router-dom';
import { Field } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';
import { Input } from '../common/FormsControls/FromsControls';
import s from '../common/FormsControls/FormControls.module.css';

const maxLength = maxLengthCreator(25);

const LoginForm = (props) => {

    if (props.isAuth) { return <Redirect to={"/profile"} /> }

    return <div>
        <h1>Login</h1>
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={"login"} placeholder={"Login"} component={Input} validate={[requiredField, maxLength]} />
            </div>
            <div>
                <Field name={"password"} placeholder={"Password"} component={Input} validate={[requiredField, maxLength]} />
            </div>
            <div>
                <Field name={"rememberMe"} component={Input} type={"checkbox"} />remember me
            </div>
            {
                props.error && <div className={s.formSummaryError}>
                    {props.error}
                </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    </div>
}

export default LoginForm;