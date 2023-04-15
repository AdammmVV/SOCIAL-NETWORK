import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {logOut} from "../../redux/auth-reducer";

export type HeaderAPIType = MapStateToPropsType & {
    logOut: () => void
}

class HeaderAPI extends React.Component<HeaderAPIType> {
    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    userId: number | null
    login: string
    email: string
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userId: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect(mapStateToProps, {logOut})(HeaderAPI)

export default HeaderContainer;