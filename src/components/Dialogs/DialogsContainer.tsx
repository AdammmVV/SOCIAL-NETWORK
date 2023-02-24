import React from "react";
import {
    addMessageActionCreator,
    InitialStateDialogsPageType,
    updateDialogMessageActionCreator
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";


type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsPageType
}

type MapDispatchToProps = {
    updateDialogMessage: (textMessage: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateDialogMessage: (textMessage: string) => dispatch(updateDialogMessageActionCreator(textMessage)),
        addMessage: () => dispatch(addMessageActionCreator())
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
