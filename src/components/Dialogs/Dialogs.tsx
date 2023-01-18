import React from "react";
import s from './Dialogs.module.css'
import {v1} from "uuid";
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

export type PropsDialogsDataType = {
    id: string
    name: string
}

export type PropsMessageDataType = {
    id: string
    message: string
}


let propsDialogsData:PropsDialogsDataType[] = [
    {id: v1(), name: 'Adammm'},
    {id: v1(), name: 'Dron'},
    {id: v1(), name: 'Alena'},
    {id: v1(), name: 'Valentina'},
]

let propsMessageData:PropsMessageDataType[] = [
    {id: v1(), message: 'I`m Valery'},
    {id: v1(), message: 'How are you?'},
    {id: v1(), message: 'I`m Alena'},
]

let mapDialogItem = propsDialogsData.map(d => {
    return (
        <DialogItem key={d.id} name={d.name} id={d.id}/>
    )
})

let mapMessage = propsMessageData.map(m => {
    return (
        <Message key={m.id} message={m.message} />
    )
})

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                <div className={s.dialog}>
                    {mapDialogItem}
                </div>
            </div>
            <div className={s.messages}>
                {mapMessage}
            </div>
        </div>
    )
}

export default Dialogs;