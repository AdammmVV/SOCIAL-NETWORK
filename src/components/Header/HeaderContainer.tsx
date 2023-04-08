import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getMe, logOut} from "../../redux/auth-reducer";

export type HeaderAPIType = MapStateToPropsType & {
    getMe: () => void
    logOut: () => void
}

class HeaderAPI extends React.Component<HeaderAPIType> {
    componentWillMount() {
        this.props.getMe()
    }

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

const HeaderContainer = connect(mapStateToProps, {getMe, logOut})(HeaderAPI)

export default HeaderContainer;