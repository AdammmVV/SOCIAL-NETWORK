import React from "react";
import {InitialStateUsersType, UsersType} from "../../redux/users-reducer";
import {v1} from "uuid";
import logoMan from "../../img/logo-man.jpg";
import logoWoman from "../../img/logoWoman.jpg";
import s from "./Users.module.css"

type UsersPropsType = {
    usersPage: InitialStateUsersType,
    follow: (userId: string) => void,
    unfollow: (userId: string) => void,
    setUsers: (newUsers: UsersType[]) => void,

}

export const Users = (props: UsersPropsType) => {
    const users: UsersType[] = [
        {
            id: v1(),
            name: 'Andrey',
            description: 'I love sports)) Cybersport',
            avatar: `${logoMan}`,
            online: true,
            follow: true,
            address: {
                cityName: 'Brest',
                country: 'Belarus',
            }
        },
        {
            id: v1(),
            name: 'Vladimir',
            description: 'I\'m in Germany right now',
            avatar: `${logoMan}`,
            online: true,
            follow: true,
            address: {
                cityName: 'Biała-Podlaska',
                country: 'Poland',
            }
        },
        {
            id: v1(),
            name: 'Alena',
            description: 'I am now at home',
            avatar: `${logoWoman}`,
            online: false,
            follow: true,
            address: {
                cityName: 'Minsk',
                country: 'Belarus',
            }
        },
        {
            id: v1(),
            name: 'Natasha',
            description: 'I have the best counter ',
            avatar: `${logoWoman}`,
            online: false,
            follow: true,
            address: {
                cityName: 'Minsk',
                country: 'Belarus',
            }
        },
        {
            id: v1(),
            name: 'Roma',
            description: 'i love my dog',
            avatar: `${logoMan}`,
            online: true,
            follow: true,
            address: {
                cityName: 'Minsk',
                country: 'Belarus',
            }
        },
        {
            id: v1(),
            name: 'Valentina',
            description: 'dream of vacation',
            avatar: `${logoWoman}`,
            online: false,
            follow: true,
            address: {
                cityName: 'Brest',
                country: 'Belarus',
            }

        },
    ]

    if (props.usersPage.users.length === 0) {
        props.setUsers(users)
    }

    const mapUsers = props.usersPage.users && props.usersPage.users.map(u => {
        return (
            <div key={u.id} className={s.userWrapper}>
                <div className={s.avatarWrapper}>
                    <div className={s.avatar}>
                        <img src={u.avatar} alt={u.name}/>
                    </div>
                    <div className={s.button}>
                        {u.follow
                            ? <button onClick={() => props.unfollow(u.id)}>Unfollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </div>
                <div className={s.descriptionWrapper}>
                    <div className={s.nameDescription}>
                        <div className={s.name}>{u.name}</div>
                        <div>{u.description}</div>
                    </div>
                    <div className={s.address}>
                        <div>{u.address.country},</div>
                        <div>{u.address.cityName}</div>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className={s.usersWrapper}>
            Users:
            {mapUsers}
        </div>
    )
}