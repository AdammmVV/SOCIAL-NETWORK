import React from "react";
import {InitialStateUsersType, UsersType} from "../../redux/users-reducer";
import logoMan from "../../img/logo-man.jpg";
import s from "./Users.module.css"
import axios from "axios";

type UsersPropsType = {
    usersPage: InitialStateUsersType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUsers: (newUsers: UsersType[]) => void,

}

export class Users extends React.Component<UsersPropsType> {

    constructor(props: UsersPropsType) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }


    render() {
        return (
            <div className={s.usersWrapper}>
                Users:
                {this.props.usersPage.users && this.props.usersPage.users.map(u => {
                    return (
                        <div key={u.id} className={s.userWrapper}>
                            <div className={s.avatarWrapper}>
                                <div className={s.avatar}>
                                    <img src={u.photos.small ? u.photos.small : logoMan} alt={u.name}/>
                                </div>
                                <div className={s.button}>
                                    {u.followed
                                        ? <button onClick={() => this.props.unfollow(u.id)}>Unfollow</button>
                                        : <button onClick={() => this.props.follow(u.id)}>Follow</button>}
                                </div>
                            </div>
                            <div className={s.descriptionWrapper}>
                                <div className={s.nameDescription}>
                                    <div className={s.name}>{u.name}</div>
                                    <div>{u.status}</div>
                                </div>
                                <div className={s.address}>
                                    <div>{'u.address.country'},</div>
                                    <div>{'u.address.cityName'}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>)
    }
}