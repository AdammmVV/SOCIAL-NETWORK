import React from "react";
import {StoreType} from "../../../redux/store";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, updateProfileMessageActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    store: StoreType
}

export const MyPostsContainer = (props: MyPostsPropsType) => {

    let state = props.store.getState()

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())
    }

    const updateProfileMessage = (newMessage: string) => {
        props.store.dispatch(updateProfileMessageActionCreator(newMessage))
    }


    return <MyPosts state={state.profilePage} addPost={addPost} updateProfileMessage={updateProfileMessage}/>

}