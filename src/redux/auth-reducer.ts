import {Dispatch} from "redux";
import {usersAPI} from "../api/api";

export type InitialStateUsersType = {
    id: number
    email: string
    login: string
    isAuth: boolean
}

export const initialState  = {} as InitialStateUsersType

export const authReducer = (state: InitialStateUsersType = initialState, action: MainAT) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload,
                isAuth: true
            }
        default:
            return state
    }
}

export type MainAT = SetUsersAT



type SetUsersAT = ReturnType<typeof setUserData>


export const setUserData = (userId: number, login: string, email: string) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            userId,
            login,
            email
        }
    } as const
}

export const getMe = () => (dispatch: Dispatch) => {
    usersAPI.getMe().then(response => {
        if (response.resultCode === 0) {
            const {id, email, login} = response.data
            dispatch(setUserData(id, login, email))
        }
    })
}