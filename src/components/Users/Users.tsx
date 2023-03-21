import React, {ChangeEvent} from "react";
import {InitialStateUsersType} from "../../redux/users-reducer";
import logoMan from "../../img/logo-man.jpg";
import s from "./Users.module.css"
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    usersPage: InitialStateUsersType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setNumberPageHandler: (e: ChangeEvent<HTMLSelectElement>) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
}

export const Users: React.FC<UsersPropsType> = (props) => {

    let page = Math.ceil(props.usersPage.totalCount / props.usersPage.countPage)
    let pagination = []
    for (let i = 1; i <= page; i++) {
        pagination.push(i)
    }

    return (
        <div className={s.usersWrapper}>
            Users:
            {props.usersPage.isFetching && <Preloader/>}
            <div>
                <select name="Users" value={props.usersPage.numberPage} onChange={props.setNumberPageHandler}>
                    {pagination.map(p => (<option key={p}>{p}</option>))}
                </select>
            </div>
            {props.usersPage.items && props.usersPage.items.map(i => {
                return (
                    <div key={i.id} className={s.userWrapper}>
                        <div className={s.avatarWrapper}>
                            <NavLink to={`/profile/${i.id}`}>
                                <div className={s.avatar}>
                                    <img src={i.photos.small ? i.photos.small : logoMan} alt={i.name}/>
                                </div>
                            </NavLink>
                            <div className={s.button}>
                                {i.followed
                                    ? <button onClick={()=>props.unfollow(i.id)}
                                              disabled={props.usersPage.toggleFollowing.some(id => id === i.id)}>Unfollow</button>
                                    : <button onClick={()=>props.follow(i.id)}
                                              disabled={props.usersPage.toggleFollowing.some(id => id === i.id)}>Follow</button>}
                            </div>
                        </div>
                        <div className={s.descriptionWrapper}>
                            <div className={s.nameDescription}>
                                <div className={s.name}>{i.name}</div>
                                <div>{i.status}</div>
                            </div>
                            <div className={s.address}>
                                <div>{'i.address.country'},</div>
                                <div>{'i.address.cityName'}</div>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}