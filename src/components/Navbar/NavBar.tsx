import React from "react";
import {NavLink} from "react-router-dom";
import s from './NavBar.module.css'
import {NavType} from "../../redux/state";

type NavBarPropsType = {
    friend: NavType[]
}

export const NavBar = (props: NavBarPropsType) => {

    const mapFriend = props.friend.map(f => {
        return (
            <div key={f.id} className={s.friendWrapper}>
                <div className={s.imgWrapper}>
                    <img src={f.avatar} alt={f.name}/>
                    {f.online ? <span style={{backgroundColor: 'green'}}/> : <span style={{backgroundColor: 'red'}}/>}
                </div>
                <div>{f.name}</div>
            </div>
        )
    })
    return (
        <div className={s.navBar}>
            <div className={s.navLincContainer}>
                <div className={s.item}>
                    <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/dialogs' activeClassName={s.active}>Message</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/news' activeClassName={s.active}>News</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='music' activeClassName={s.active}>Music</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='settings' activeClassName={s.active}>Setting</NavLink>
                </div>
            </div>
            <div className={s.containerFriends}>
                <div className={s.controlFriends}>
                    <span style={{color: "black", fontWeight: '700'}}>Friends:</span>
                    <span>see all</span>
                </div>
                <div className={s.friendsWrapper}>
                    {mapFriend}
                </div>
            </div>
        </div>
    );
}