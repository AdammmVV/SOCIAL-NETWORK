import React from "react";
import s from './Header.module.css'
import logo from '../../img/logo-red.png'
import {NavLink} from "react-router-dom";
import {HeaderAPIType} from "./HeaderContainer";

type HeaderPropsTyp = HeaderAPIType


const Header: React.FC<HeaderPropsTyp> = ({
    isAuth,
    login,
    logOut
                                          }) => {

    console.log(isAuth, login)
    return (
        <div className={s.header}>
            <div>
                <img src={logo} alt='avatar'/>
            </div>
            <div className={s.formWrapper}>
                {isAuth ? <>{login} <div><button onClick={logOut}>Log Out</button></div></> : <NavLink to={'/login'}>Log in</NavLink>}
            </div>
        </div>
    )
}

export default Header;