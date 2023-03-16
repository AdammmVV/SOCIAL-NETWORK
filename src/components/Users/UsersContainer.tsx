import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {
    follow,
    InitialStateUsersType,
    setIsFetching,
    setNumberPage,
    setUsers,
    unfollow,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {usersAPI} from "../../api/api";

type MapStateToPropsType = {
    usersPage: InitialStateUsersType
}

type UsersPropsType = MapStateToPropsType & {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (newUsers: InitialStateUsersType) => void,
    setNumberPage: (numberPage: number) => void
    setIsFetching: (isFetching: boolean) => void
}

export class UsersAPIComponent extends React.Component<UsersPropsType> {

    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.usersPage.countPage, this.props.usersPage.numberPage).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data)
            })
    }

    setNumberPageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        this.props.setNumberPage(+e.currentTarget.value)
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.usersPage.countPage, +e.currentTarget.value).then(data => {
                this.props.setIsFetching(false)
                this.props.setUsers(data)
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

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setNumberPage,
    setIsFetching
})(UsersAPIComponent)