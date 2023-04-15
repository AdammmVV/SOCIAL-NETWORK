import React, {ChangeEvent} from "react";
import {connect} from "react-redux";
import {
    follow,
    getUsers,
    InitialStateUsersType,
    setNumberPage,
    setUsers,
    toggleFollowingProgress,
    unfollow,
} from "../../redux/users-reducer";
import {AppStateType} from "../../redux/redux-store";
import {Users} from "./Users";
import {getUsersPage} from "../../redux/users-selector";

export class UsersAPIComponent extends React.Component<UsersPropsType> {
    componentDidMount() {
        this.props.getUsers(this.props.usersPage.countPage, this.props.usersPage.numberPage)
    }

    setNumberPageHandler = (e: ChangeEvent<HTMLSelectElement>) => {
        this.props.setNumberPage(+e.currentTarget.value)
        this.props.getUsers(this.props.usersPage.countPage, +e.currentTarget.value)
    }

    render() {
        return <Users usersPage={this.props.usersPage}
                      follow={this.props.follow}
                      unfollow={this.props.unfollow}
                      setNumberPageHandler={this.setNumberPageHandler}
                      toggleFollowingProgress={this.props.toggleFollowingProgress}/>
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType =>
    ({usersPage: getUsersPage(state)})

export const UsersContainer = connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setNumberPage,
    toggleFollowingProgress,
    getUsers
})(UsersAPIComponent)

//types
type MapStateToPropsType = {
    usersPage: InitialStateUsersType
}

type UsersPropsType = MapStateToPropsType & {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (newUsers: InitialStateUsersType) => void,
    setNumberPage: (numberPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    getUsers: (countPage: number, numberPage: number) => void
}
