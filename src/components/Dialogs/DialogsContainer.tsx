import React from "react";
import {
    addMessageActionCreator,
    InitialStateDialogsPageType,
    updateDialogMessageActionCreator
} from "../../redux/dialog-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


type MapStateToPropsType = {
    dialogsPage: InitialStateDialogsPageType
}

type MapDispatchToProps = {
    updateDialogMessage: (textMessage: string) => void
    addMessage: () => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        updateDialogMessage: (textMessage: string) => dispatch(updateDialogMessageActionCreator(textMessage)),
        addMessage: () => dispatch(addMessageActionCreator())
    }
}

export const DialogsContainer = compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
