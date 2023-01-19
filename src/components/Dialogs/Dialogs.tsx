import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {dialogsPageType} from "../../redux/state";

type DialogsPropsType = {
    state: dialogsPageType
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogItem = props.state.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id} src={d.src}/>)

    let message = props.state.messages.map(m =>
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