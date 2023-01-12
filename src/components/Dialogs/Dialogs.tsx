import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css'

type DialogItemPropsType = {
    id: string
    name: string
}

export const DialogItem = (props: DialogItemPropsType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={`'/dialogs/ ${props.id}`} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}


const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    <DialogItem name='Adammm' id='1'/>
                    <DialogItem name='Dron' id='2'/>
                    <DialogItem name='Alena' id='3'/>
                    <DialogItem name='Valentina' id='4'/>
                </div>
            </div>
            <div className={s.messages}>
                <Message message='I`m Valery' />
                <Message message='How are you?' />
                <Message message='I`m Alena' />
            </div>
        </div>
    )
}

export default Dialogs;