export type InitialStateUsersType = {
    items: UsersType[]
    totalCount: number
    numberPage: number
    countPage: number
    isFetching: boolean
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
    error: null,
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: MainAT) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, items: state.items.map(i => i.id === action.payload.userId ? {...i, followed: true} : i)}
        case 'UNFOLLOW':
            return {...state, items: state.items.map(i => i.id === action.payload.userId ? {...i, followed: false} : i)}
        case 'SET-USERS':
            console.log(action.payload.newUsers)
            return {...state, ...action.payload.newUsers}
        case "SET-NUMBER-PAGE":
            return {...state, numberPage: action.payload.numberPage}
        case "SET-IS-FETCHING":
            return {...state, isFetching: action.payload.isFetching}
        default:
            return state
    }
}

type MainAT = FollowAT
    | UnfollowAT
    | SetUsersAT
    | SetNumberPageAT
    | SetIsFetchingAC

type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>
type SetNumberPageAT = ReturnType<typeof setNumberPageAC>
type SetIsFetchingAC = ReturnType<typeof setIsFetchingAC>

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (newUsers: InitialStateUsersType) => {
    return {
        type: 'SET-USERS',
        payload: {
            newUsers
        }
    } as const
}

export const setNumberPageAC = (numberPage: number) => {
    return {
        type: 'SET-NUMBER-PAGE',
        payload: {
            numberPage
        }
    } as const
}

export const setIsFetchingAC = (isFetching: boolean) => {
    return {
        type: 'SET-IS-FETCHING',
        payload: {
            isFetching
        }
    } as const
}
