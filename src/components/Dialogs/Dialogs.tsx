import React from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {InitialStateDialogsPageType} from "../../redux/dialog-reducer";
import {AddMessageFormDataType, AddMessageWithForm} from "./AddMessageForm";

type DialogsPropsType = {
    dialogsPage: InitialStateDialogsPageType
    addMessage: (newMessage: string) => void
}


export const Dialogs = (props: DialogsPropsType) => {
    let dialogItem = props.dialogsPage.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id} src={d.src}/>)

    let message = props.dialogsPage.messages.map(m =>
        <Message key={m.id} message={m.message}/>)

    const onAddMessage = (value: AddMessageFormDataType) => {
        props.addMessage(value.dialogMessage)
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
                <AddMessageWithForm onSubmit={onAddMessage}/>
            </div>
        </div>
    )
}




