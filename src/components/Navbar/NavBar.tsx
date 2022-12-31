import React from "react";
import s from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={s.navBar}>
            <div className={s.item}>
                <a href='#'>Profile</a>
            </div>
            <div className={s.item}>
                Message
            </div>
            <div className={s.item}>
                News
            </div>
            <div className={s.item}>
                Music
            </div>
            <div className={s.item}>
                Setting
            </div>
        </div>
    );
}


export default NavBar;