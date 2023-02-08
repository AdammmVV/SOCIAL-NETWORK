import React from "react";
import s from './Header.module.css'
import logo from '../../img/logo-red.png'

const Header = () => {
    return (
        <div className={s.header}>
            <div>
                <img src={logo}/>
            </div>
            <div className={s.formWrapper}>
                <input type="email" placeholder={'Email'}/>
                <input type="password" placeholder={"Password"}/>
                <button>Log in</button>
            </div>
        </div>
    )
}

export default Header;