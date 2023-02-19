import React from "react";
import {addMessageActionCreator, updateDialogMessageActionCreator} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {StoreContext} from "../../StoreContext";


export const DialogsContainer = () => {
    return (
        <StoreContext.Consumer>{
            (store) => {
                let state = store.getState()

                const onChangeTextareaDialogHandler = (textMessage: string) => {
                    store.dispatch(updateDialogMessageActionCreator(textMessage))
                }

                const addMessage = () => {
                    store.dispatch(addMessageActionCreator())
                }
                return <Dialogs state={state.dialogsPage}
                                updateDialogMessage={onChangeTextareaDialogHandler}
                                addMessage={addMessage}/>
            }}
        </StoreContext.Consumer>
    )


}
