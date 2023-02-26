import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, InitialStateUsersType, setUsersAC, unfollowAC, UsersType} from "../../redux/users-reducer";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";

type MapStateToPropsType = {
    usersPage: InitialStateUsersType
}

type MapDispatchToPropsType = {
    follow: (userId: string) => void
    unfollow: (userId: string) => void
    setUsers: (newUsers: UsersType[]) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        usersPage: state.usersPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (newUsers: UsersType[]) => {
            dispatch(setUsersAC(newUsers))
        },
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)