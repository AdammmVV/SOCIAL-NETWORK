import React from "react";
import {connect} from "react-redux";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";

type MapStateToPropsType = {
    usersPage: InitialStateUsersType
}

type MapDispatchToPropsType = {
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    setUsers: (newUsers: UsersType[]) => void
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
        setUsers: (newUsers: UsersType[]) => {
            dispatch(setUsersAC(newUsers))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)