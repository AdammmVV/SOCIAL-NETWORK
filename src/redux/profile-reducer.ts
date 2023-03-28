import {v1} from "uuid";
import {Dispatch} from "redux";
import {profileAPI, usersAPI} from "../api/api";

export type PostsType = {
    id: string
    message: string
    likeCount: string
}

export type ProfileInfoType = {
    aboutMe: null | string
    contacts: {
        facebook: null | string
        website: null | string
        vk: null | string
        twitter: null | string
        instagram: null | string
        youtube: null | string
        github: null | string
        mainLink: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: string
    userId: number
    photos: {
        small: null | string
        large: null | string
    }
}

let initialState = {
    profileInfo: {
        aboutMe: null,
        contacts: {
            facebook: null,
            website: null,
            vk: null,
            twitter: null,
            instagram: null,
            youtube: null,
            github: null,
            mainLink: null
        },
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: "NazarioSaf",
        userId: 28317,
        photos: {
            small: null,
            large: null
        }
    } as ProfileInfoType,
    posts: [
        {id: v1(), message: 'How are you?', likeCount: '12'},
        {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
        {id: v1(), message: 'Yo!', likeCount: '17'},
    ] as PostsType[],
    isFetching: false,
    profileMessage: '',
    profileStatus: ''
}

export type InitialStateProfilePageStateType = typeof initialState

export const profileReducer = (state: InitialStateProfilePageStateType = initialState, action: MaineAT) => {
    switch (action.type) {
        case "ADD-POST":
            let post = {id: v1(), message: state.profileMessage, likeCount: '0'}
            return {...state, posts: [post, ...state.posts], profileMessage: ''}
        case "UPDATE-PROFILE-MESSAGE":
            return {...state, profileMessage: action.newMessage}
        case "SET-PROFILE-INFO":
            return {...state, profileInfo: action.payload.profileInfo}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        case "SET-STATUS":
            return {...state, profileStatus: action.payload.titleStatus}
        default:
            return state
    }
}

type MaineAT = ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof updateProfileMessageActionCreator>
    | ReturnType<typeof setProfileInfo>
    | ReturnType<typeof setIsFetching>
    | ReturnType<typeof setStatus>

export const addPostActionCreator = () => ({type: "ADD-POST"} as const)
export const updateProfileMessageActionCreator = (text: string) => ({
    type: "UPDATE-PROFILE-MESSAGE",
    newMessage: text
} as const)

export const setProfileInfo = (profileInfo: ProfileInfoType) => ({
    type: "SET-PROFILE-INFO",
    payload: {
        profileInfo
    }
} as const)

export const setIsFetching = (isFetching: boolean) => ({
    type: "SET-IS-FETCHING",
    payload: {
        isFetching
    }
} as const)


export const setStatus = (titleStatus: string) => ({
    type: "SET-STATUS",
    payload: {
        titleStatus
    }
} as const)

export const getUser = (userId: string) => (dispatch: Dispatch) => {
    dispatch(setIsFetching(true))
    usersAPI.getUser(userId).then(data => {
        dispatch(setProfileInfo(data))
        dispatch(setIsFetching(false))
    })
}

export const getStatus = (userId: string) => (dispatch: Dispatch) => {
    profileAPI.getProfileStatus(userId).then(data => {
        dispatch(setStatus(data))
    })
}

export const updateStatus = (newStatus: string) => (dispatch: Dispatch) => {
    profileAPI.updateStatus(newStatus).then(data => {
        if (data.data.resultCode === 0) {
            dispatch(setStatus(newStatus))
        }
    })
}