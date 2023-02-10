import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {ActionType, dialogsPageType} from "../../redux/store";

type DialogsPropsType = {
    state: dialogsPageType
    dialogMessage: string
    dispatch: (action: ActionType) => void
}

const Dialogs = (props: DialogsPropsType) => {
    let dialogItem = props.state.dialogs.map(d =>
        <DialogItem key={d.id} name={d.name} id={d.id} src={d.src}/>)

    let message = props.state.messages.map(m =>
        <Message key={m.id} message={m.message}/>)

    const onChangeTextareaDialogHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.dispatch({type: "UPDATE-DIALOG-MESSAGE", newMessage: e.currentTarget.value})
    }

    const addMessage = () => {
        props.dispatch({type: "ADD-MESSAGE"})
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
                              value={props.dialogMessage}/>
                </div>
                <div>
                    <button onClick={addMessage}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;