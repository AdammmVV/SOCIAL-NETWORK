import React, {ChangeEvent} from "react";
import {InitialStateUsersType} from "../../redux/users-reducer";
import logoMan from "../../img/logo-man.jpg";
import s from "./Users.module.css"
import {Preloader} from "../common/preloader/Preloader";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";

type UsersPropsType = {
    usersPage: InitialStateUsersType,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setNumberPageHandler: (e: ChangeEvent<HTMLSelectElement>) => void
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

                const followHandler = () => {
                    usersAPI.createFollow(i.id).then(data => {
                        if (data.resultCode === 0) {
                            props.follow(i.id)
                        }
                    })
                }

                const unfollowHandler = () => {
                    usersAPI.createUnfollow(i.id).then(data => {
                        if (data.resultCode === 0) {
                            props.unfollow(i.id)
                        }
                    })
                }

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
                                    ? <button onClick={unfollowHandler}>Unfollow</button>
                                    : <button onClick={followHandler}>Follow</button>}
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