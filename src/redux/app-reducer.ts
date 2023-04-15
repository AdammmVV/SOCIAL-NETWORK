import {AppThunk} from "./redux-store";
import {getMe} from "./auth-reducer";

export const initialState = {
    initialized: false
} as InitialStateUsersType

//Reducer
export const appReducer = (state: InitialStateUsersType = initialState, action: MainActionForApp) => {
    switch (action.type) {
        case 'SET-INITIALIZED':
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

//Actions
export const setInitialized = () => ({type: 'SET-INITIALIZED'} as const)

//Thunk
export const initializedAT = (): AppThunk => (dispatch) => {
    Promise.all([dispatch(getMe())]).then(() => {
        dispatch(setInitialized())
    })
}

// Types
export type InitialStateUsersType = {
    initialized: boolean
}
export type MainActionForApp = SetInitializedAT
type SetInitializedAT = ReturnType<typeof setInitialized>