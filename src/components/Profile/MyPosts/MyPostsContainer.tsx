import React from "react";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, updateProfileMessageActionCreator} from "../../../redux/profile-reducer";
import {StoreContext} from "../../../StoreContext";


export const MyPostsContainer = () => {
    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()

                const addPost = () => {
                    debugger
                    store.dispatch(addPostActionCreator())
                }

                const updateProfileMessage = (newMessage: string) => {
                    store.dispatch(updateProfileMessageActionCreator(newMessage))
                }
                return <MyPosts state={state.profilePage} addPost={addPost}
                                updateProfileMessage={updateProfileMessage}/>
            }
        }
    </StoreContext.Consumer>

}