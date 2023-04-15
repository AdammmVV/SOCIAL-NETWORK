import {Dispatch} from "redux";
import {authAPI} from "../api/api";
import {FormDataType} from "../components/Login/Login";
import {AppThunk} from "./redux-store";
import {getUser} from "./profile-reducer";

export type InitialStateUsersType = {
    id: number | null
    email: string
    login: string
    isAuth: boolean
}

export const initialState  = {} as InitialStateUsersType

export const authReducer = (state: InitialStateUsersType = initialState, action: MainActionForAuth) => {
    switch (action.type) {
        case 'SET-USER-DATA':
            return {
                ...state,
                ...action.payload
            }
        default:
            return state
    }
}

export type MainActionForAuth = SetUsersAT

type SetUsersAT = ReturnType<typeof setUserData>

export const setUserData = (id: number | null, login: string, email: string, isAuth: boolean) => {
    return {
        type: 'SET-USER-DATA',
        payload: {
            id,
            login,
            email,
            isAuth
        }
    } as const
}

export const getMe = (): AppThunk => (dispatch) => {
    return authAPI.getMe().then(response => {
        if (response.resultCode === 0) {
            console.log(response.data.id)
            const {id, email, login} = response.data
            dispatch(setUserData(id, login, email, true))
            dispatch(getUser(response.data.id))
        }
    })
}

export const signIn = (dataLogin: FormDataType): AppThunk => dispatch => {
    authAPI.logIn(dataLogin).then(data => {
        console.log(data)
        if (data.resultCode === 0) {
            dispatch(getMe())
        }
    })
}

export const logOut = () => (dispatch: Dispatch) => {
    authAPI.logOut().then(data => {
        if (data.resultCode === 0) {
            dispatch(setUserData(null, '', '', false))
        }
    })
}
