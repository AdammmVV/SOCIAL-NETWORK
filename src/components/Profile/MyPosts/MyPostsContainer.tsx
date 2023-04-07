import React from "react";
import {MyPosts} from "./MyPosts";
import {
    addPostActionCreator,
    InitialStateProfilePageStateType,
} from "../../../redux/profile-reducer";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {AppStateType} from "../../../redux/redux-store";

type MapStateToPropsType = {
    profilePage: InitialStateProfilePageStateType
}

type MapDispatchToPropsType = {
    addPost: (newPost: string) => void
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        addPost: (newPost: string) => dispatch(addPostActionCreator(newPost)),
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)