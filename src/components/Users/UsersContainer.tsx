import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {
    followAC,
    InitialStateUsersType, setIsFetchingAC,
    setNumberPageAC,
    setUsersAC,
    unfollowAC,
} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import axios from "axios";

type MapStateToPropsType = {
    usersPage: InitialStateUsersType
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: InitialStateUsersType) => void
    setNumberPage: (numberPage: number) => void
    setIsFetching: (isFetching: boolean) => void
}

type UsersPropsType = {
    usersPage: InitialStateUsersType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (newUsers: InitialStateUsersType) => void,
    setNumberPage: (numberPage: number) => void
    setIsFetching: (isFetching: boolean) => void

}

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.countPage}&page=${this.props.usersPage.numberPage}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data)
            })
    }

    setNumberPageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        this.props.setNumberPage(+e.currentTarget.value)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPage.countPage}&page=${+e.currentTarget.value}`)
            .then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data)
            })
    }

    render() {
        return <Users usersPage={this.props.usersPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      setNumberPageHandler={this.setNumberPageHandler}
        />
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (newUsers: InitialStateUsersType) => {
            dispatch(setUsersAC(newUsers))
        },
        setNumberPage: (numberPage: number) => {
            dispatch(setNumberPageAC(numberPage))
        },
        setIsFetching: (isFetching: boolean) => {
            dispatch(setIsFetchingAC(isFetching))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)