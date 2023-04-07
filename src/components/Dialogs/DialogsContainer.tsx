import React from "react";
import {
    addMessageActionCreator,
    InitialStateDialogsPageType,
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
    addMessage: (newMessage: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToProps => {
    return {
        addMessage: (newMessage: string) => dispatch(addMessageActionCreator(newMessage))
    }
}

export const DialogsContainer =  compose<React.ComponentType>(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps)
)(Dialogs)
