import {ActionType, NavBarType} from "./store";
import {v1} from "uuid";
import logoMan from "../img/logo-man.jpg";
import logoWoman from "../img/logoWoman.jpg";

let initialState: NavBarType = {
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
    ],
}


export const navBarReducer = (state:NavBarType = initialState, action: ActionType) => {
    return state
}