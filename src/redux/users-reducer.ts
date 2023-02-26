export type InitialStateUsersType = {
    users: UsersType[]
}

export type UsersType = {
    id: string
    name: string
    description: string
    avatar: string
    online: boolean
    follow: boolean
    address: {
        cityName: string
        country: string
    }
}

export const initialState: InitialStateUsersType = {
    users: []
}

export const usersReducer = (state: InitialStateUsersType = initialState, action: MainAT) => {
    switch (action.type) {
        case 'FOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, follow: true} : u)}
        case 'UNFOLLOW':
            return {...state, users: state.users.map(u => u.id === action.payload.userId ? {...u, follow: false} : u)}
        case 'SET-USERS':
            console.log(action.payload.newUsers)
            return {...state, users: [...action.payload.newUsers]}
        default:
            return state
    }
}

type MainAT = FollowAT | UnfollowAT | SetUsersAT

type FollowAT = ReturnType<typeof followAC>
type UnfollowAT = ReturnType<typeof unfollowAC>
type SetUsersAT = ReturnType<typeof setUsersAC>

export const followAC = (userId: string) => {
    return {
        type: 'FOLLOW',
        payload: {
            userId
        }
    } as const
}

export const unfollowAC = (userId: string) => {
    return {
        type: 'UNFOLLOW',
        payload: {
            userId
        }
    } as const
}

export const setUsersAC = (newUsers: UsersType[]) => {
    return {
        type: 'SET-USERS',
        payload: {
            newUsers
        }
    } as const
}
