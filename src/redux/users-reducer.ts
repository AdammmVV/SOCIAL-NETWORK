import {usersAPI} from "../api/api";
import {Dispatch} from "redux";

export type InitialStateUsersType = {
    items: UsersType[]
    totalCount: number
    numberPage: number
    countPage: number
    isFetching: boolean
    toggleFollowing: []
    error: null
}

export type UsersType = {
    name: string
    id: number
    uniqueUrlName: null | string
    photos: {
        "small": null | string
        "large": null | string
    }
    status: string
    followed: boolean
}

export const initialState: InitialStateUsersType = {
    items: [],
    totalCount: 0,
    numberPage: 1,
    countPage: 10,
    isFetching: false,
    toggleFollowing: [],
    error: null,
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: MainAT) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(i => i.id === action.payload.userId ? {...i, followed: true} : i)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(i => i.id === action.payload.userId ? {...i, followed: false} : i)}
        case 'SET-USERS':
            return {...state, ...action.payload.newUsers}
        case 'SET-NUMBER-PAGE':
            return {...state, numberPage: action.payload.numberPage}
        case 'SET-IS-FETCHING':
            return {...state, isFetching: action.payload.isFetching}
        case "TOGGLE-FOLLOWING-PROGRESS":
            console.log(state.toggleFollowing)
            return {...state, toggleFollowing: action.payload.isFetching
                    ? [...state.toggleFollowing, action.payload.userId]
                    : state.toggleFollowing.filter(id => id !== action.payload.userId) }
        default:
            return state
    }
}

type MainAT = FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetNumberPageAT
    | SetIsFetchingAT
    | ToggleFollowingProgressAT

type FollowAT = ReturnType<typeof followSuccess>
type UnfollowAT = ReturnType<typeof unfollowSuccess>
type SetUsersAT = ReturnType<typeof setUsers>
type SetNumberPageAT = ReturnType<typeof setNumberPage>
type SetIsFetchingAT = ReturnType<typeof setIsFetching>
type ToggleFollowingProgressAT = ReturnType<typeof toggleFollowingProgress>

export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unfollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsers = (newUsers: InitialStateUsersType) => {
    return {
        type: 'SET-USERS',
        payload: {
            newUsers
        }
    } as const
}

export const setNumberPage = (numberPage: number) => {
    return {
        type: 'SET-NUMBER-PAGE',
        payload: {
            numberPage
        }
    } as const
}

export const setIsFetching = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}

export const toggleFollowingProgress = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE-FOLLOWING-PROGRESS',
        payload: {
            isFetching,
            userId
        }
    } as const
}

export const getUsers = (countPage: number, numberPage: number) => {
    return (dispatch: Dispatch) => {
        dispatch(setIsFetching(true))
        usersAPI.getUsers(countPage, numberPage).then(data => {
            dispatch(setIsFetching(false))
            dispatch(setUsers(data))
        })
    }
}

export const follow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.createFollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(followSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    })
}

export const unfollow = (userId: number) => (dispatch: Dispatch) => {
    dispatch(toggleFollowingProgress(true, userId))
    usersAPI.createUnfollow(userId).then(data => {
        if (data.resultCode === 0) {
            dispatch(unfollowSuccess(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
    })
}