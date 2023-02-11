import {v1} from "uuid";
import {ActionType, DialogsPageType} from "./store";

export const dialogReducer = (action: ActionType, state: DialogsPageType) => {
    if (action.type === "ADD-MESSAGE") {
        let message = {id: v1(), message: state.dialogMessage}
        state.messages.push(message)
        state.dialogMessage = ''
    } else if (action.type === "UPDATE-DIALOG-MESSAGE") {
        if (action.newPost) state.dialogMessage = action.newPost
    }
    return state
}

export const addMessageActionCreator = () => ({type: "ADD-MESSAGE"} as const)
export const updateDialogMessageActionCreator = (text: string) => ({
    type: "UPDATE-DIALOG-MESSAGE",
    newPost: text
} as const)