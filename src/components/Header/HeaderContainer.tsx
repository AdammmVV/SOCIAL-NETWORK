import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getMe} from "../../redux/auth-reducer";

export type HeaderAPIType = MapStateToPropsType & MapDispatchToProps

class HeaderAPI extends React.Component<HeaderAPIType> {
    componentWillMount() {
        this.props.getMe()
    }

    render() {
        return <Header {...this.props}/>
    }
}

type MapStateToPropsType = {
    userId: number
    login: string
    email: string
    isAuth: boolean
}
type MapDispatchToProps = {
    getMe: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userId: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect(mapStateToProps, {getMe})(HeaderAPI)

export default HeaderContainer;