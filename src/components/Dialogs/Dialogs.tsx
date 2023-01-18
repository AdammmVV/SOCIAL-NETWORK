import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {DialogsType, MessagesType} from "../../index";

type DialogsPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogItem = props.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id}/>)

    let message = props.messages.map(m =>
        <Message key={m.id} message={m.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    {dialogItem}
                </div>
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    )
}

export default Dialogs;