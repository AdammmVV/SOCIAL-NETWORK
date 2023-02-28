import {followAC, setUsersAC, unfollowAC, usersReducer, UsersType} from "../users-reducer";
import {v1} from "uuid";
import logoMan from "../../img/logo-man.jpg";
import logoWoman from "../../img/logoWoman.jpg";

const users = [
    {
        id: v1(),
        name: 'Andrey',
        description: 'I love sports)) Cybersport',
        avatar: `${logoMan}`,
        online: true,
        follow: true,
        address: {
            cityName: 'Brest',
            country: 'Belarus',
        }
    },
    {
        id: v1(),
        name: 'Vladimir',
        description: 'I\'m in Germany right now',
        avatar: `${logoMan}`,
        online: true,
        follow: true,
        address: {
            cityName: 'Biała-Podlaska',
            country: 'Poland',
        }
    },
    {
        id: v1(),
        name: 'Alena',
        description: 'I am now at home',
        avatar: `${logoWoman}`,
        online: false,
        follow: false,
        address: {
            cityName: 'Minsk',
            country: 'Belarus',
        }
    },
    {
        id: v1(),
        name: 'Natasha',
        description: 'I have the best counter ',
        avatar: `${logoWoman}`,
        online: false,
        follow: true,
        address: {
            cityName: 'Minsk',
            country: 'Belarus',
        }
    },
    {
        id: v1(),
        name: 'Roma',
        description: 'i love my dog',
        avatar: `${logoMan}`,
        online: true,
        follow: true,
        address: {
            cityName: 'Minsk',
            country: 'Belarus',
        }
    },
    {
        id: v1(),
        name: 'Valentina',
        description: 'dream of vacation',
        avatar: `${logoWoman}`,
        online: false,
        follow: true,
        address: {
            cityName: 'Brest',
            country: 'Belarus',
        }

    },
] as UsersType[]

test('follow should be correct installed', () => {
    const initialState = {
        users: users
    }

    const endState = usersReducer(initialState, followAC(users[2].id))

    expect(endState).not.toBe(initialState)
    expect(endState.users[2].follow).toBeTruthy()
})

test('unfollow should be correct installed', () => {
    const initialState = {
        users: users
    }

    const endState = usersReducer(initialState, unfollowAC(users[1].id))

    expect(endState).not.toBe(initialState)
    expect(endState.users[1].follow).toBeFalsy()
})

test('users should be correct installed', () => {
    const initialState = {
        users: []
    }

    const endState = usersReducer(initialState, setUsersAC(users))

    expect(endState).not.toBe(initialState)
    expect(endState.users.length).toBe(6)
})
