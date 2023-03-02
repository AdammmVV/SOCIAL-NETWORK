import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {navBarReducer} from "./navBar-reducer";
import {usersReducer} from "./users-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
})

export type AppStateType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer);