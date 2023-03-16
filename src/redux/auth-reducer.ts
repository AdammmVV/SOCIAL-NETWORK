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
            console.log(action.payload)
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
