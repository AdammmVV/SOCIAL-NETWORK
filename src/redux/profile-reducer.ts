import {v1} from "uuid";
import {ActionType} from "./store";

export type PostsType = {
    id: string
    message: string
    likeCount: string
}

let initialState = {
    posts: [
        {id: v1(), message: 'How are you?', likeCount: '12'},
        {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
        {id: v1(), message: 'Yo!', likeCount: '17'},
    ] as PostsType[],
    profileMessage: '',
}

export type InitialStateProfilePageStateType = typeof initialState

export const profileReducer = (state: InitialStateProfilePageStateType = initialState, action: ActionType) => {
    switch (action.type) {
        case "ADD-POST":
        let post = {id: v1(), message: state.profileMessage, likeCount: '0'}
            return {...state, posts: [post, ...state.posts], profileMessage: ''}
        case "UPDATE-PROFILE-MESSAGE":
            return {...state, profileMessage: action.newMessage}
        default:
            return state
    }
}

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateProfileMessageActionCreator = (text: string) => ({
    type: "UPDATE-PROFILE-MESSAGE",
    newMessage: text
} as const)
