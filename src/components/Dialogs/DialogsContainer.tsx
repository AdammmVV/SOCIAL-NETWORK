import React from "react";
import {StoreType} from "../../redux/store";
import {addMessageActionCreator, updateDialogMessageActionCreator} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";

type DialogsContainerPropsType = {
    store: StoreType
}

export const DialogsContainer = (props: DialogsContainerPropsType) => {

    let state = props.store.getState()

    const onChangeTextareaDialogHandler = (textMessage: string) => {
        props.store.dispatch(updateDialogMessageActionCreator(textMessage))
    }

    const addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }

    return <Dialogs state={state.dialogsPage}
                    updateDialogMessage={onChangeTextareaDialogHandler}
                    addMessage={addMessage}/>
}
