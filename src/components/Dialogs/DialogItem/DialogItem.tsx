import s from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";

type DialogItemPropsType = {
    id: string
    name: string
    src: string
}
export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`'/dialogs/ ${props.id}`} activeClassName={s.active}>
                <span><img src={props.src} alt={props.name}/></span>
                {props.name}
            </NavLink>
        </div>
    )
}