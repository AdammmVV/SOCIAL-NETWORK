import {Redirect} from "react-router-dom";
import React, {ComponentType} from "react";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {

    const AuthRedirectComponent = (props: mapStateToPropsType) => {
        const {isAuth, ...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T}/>
    }

    return connect(mapStateToProps)(AuthRedirectComponent)
}