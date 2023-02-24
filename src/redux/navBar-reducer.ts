import {ActionType} from "./store";
import {v1} from "uuid";
import logoMan from "../img/logo-man.jpg";
import logoWoman from "../img/logoWoman.jpg";


export type InitialStateNavType = typeof initialState

export type NavType = {
    id: string
    name: string
    avatar: string
    online: boolean
}

let initialState = {
    nav: [
        {
            id: v1(),
            name: 'Andrey',
            avatar: `${logoMan}`,
            online: true,
        },
        {
            id: v1(),
            name: 'Vladimir',
            avatar: `${logoMan}`,
            online: true,
        },
        {
            id: v1(),
            name: 'Alena',
            avatar: `${logoWoman}`,
            online: false,
        },
        {
            id: v1(),
            name: 'Natasha',
            avatar: `${logoWoman}`,
            online: false,
        },
        {
            id: v1(),
            name: 'Roma',
            avatar: `${logoMan}`,
            online: true,
        },
        {
            id: v1(),
            name: 'Valentina',
            avatar: `${logoWoman}`,
            online: false,
        },
    ] as NavType[],
}


export const navBarReducer = (state: InitialStateNavType = initialState, action: ActionType) => {
    return state
}