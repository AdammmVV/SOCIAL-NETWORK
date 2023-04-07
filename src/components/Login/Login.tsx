import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {signIn} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

type LoginPropsType = {
    signIn: (dataLogin: FormDataType) => void
}

export type FormDataType = {
    password: string
    email: string
    rememberMe: boolean
}

export const Login: React.FC<LoginPropsType> = ({signIn}) => {
    const onSubmitHandler = (values: FormDataType) => {
        authAPI.logIn(values).then(data => console.log(data))
        console.log(values)
    }
    return (
        <div>
            <h3>Login</h3>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    )
}

export const LoginForm: React.FC<InjectedFormProps<FormDataType>> = (props) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'email'} type={'email'} component={'input'} placeholder={'Email'}/>
            </div>
            <div>
                <Field name={'password'} type={'password'} component={'input'}/>
            </div>
            <div>
                <Field name={'rememberMe'} type={'checkbox'} component={'input'}/> Remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const mapStateToProps = (state: AppStateType) => {

}

const LoginWidthConnect = connect(mapStateToProps, {signIn})(Login)

const LoginReduxForm = reduxForm<FormDataType>({
    form: 'login'
})(LoginForm)
