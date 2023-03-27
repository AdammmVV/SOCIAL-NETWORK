import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateDialogsPageType} from "../../redux/dialog-reducer";

type DialogsPropsType = {
    dialogsPage: InitialStateDialogsPageType
    updateDialogMessage: (textMessage: string)=> void
    addMessage: ()=> void
}


export const Dialogs = (props: DialogsPropsType) => {
    let dialogItem = props.dialogsPage.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id} src={d.src}/>)

    let message = props.dialogsPage.messages.map(m =>
        <Message key={m.id} message={m.message}/>)

    const onChangeTextareaDialogHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateDialogMessage(e.currentTarget.value)
    }

    const onAddMessage = () => {
        props.addMessage()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    {dialogItem}
                </div>
            </div>
            <div className={s.messages}>
                {message}
                <div>
                    <textarea onChange={onChangeTextareaDialogHandler}
                              value={props.dialogsPage.dialogMessage}/>
                </div>
                <div>
                    <button onClick={onAddMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}