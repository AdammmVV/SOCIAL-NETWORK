import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import axios from "axios";
import {AppStateType} from "../../redux/redux-store";
import {setUserData} from "../../redux/auth-reducer";

export type HeaderAPIType = MapStateToPropsType & MapDispatchToProps

class HeaderAPI extends React.Component<HeaderAPIType> {
    componentWillMount() {
        console.log(this.props)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
            .then( response => {
                console.log(response)
            if (response.data.resultCode === 0) {
                const {id, email, login} = response.data.data
                this.props.setUserData(id, login, email)
            }
        })
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
    setUserData: (userId: number, login: string, email: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        userId: state.auth.id,
        login: state.auth.login,
        email: state.auth.email,
        isAuth: state.auth.isAuth
    }
}

const HeaderContainer = connect(mapStateToProps, {setUserData})(HeaderAPI)

export default HeaderContainer;