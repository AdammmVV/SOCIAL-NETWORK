import {v1} from "uuid";
import {ActionType, ProfilePageType} from "./store";

let initialState: ProfilePageType = {
    posts: [
        {id: v1(), message: 'How are you?', likeCount: '12'},
        {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
        {id: v1(), message: 'Yo!', likeCount: '17'},
    ],
    profileMessage: '',
}


export const profileReducer = (state: ProfilePageType = initialState, action: ActionType) => {
    if (action.type === "ADD-POST") {
        let post = {id: v1(), message: state.profileMessage, likeCount: '0'}
        state.posts.push(post)
        state.profileMessage = ''
    } else if (action.type === "UPDATE-PROFILE-MESSAGE") {
        if (action.newMessage) state.profileMessage = action.newMessage
    }
    return state
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateProfileMessageActionCreator = (text: string) => ({
    type: "UPDATE-PROFILE-MESSAGE",
    newMessage: text
} as const)
