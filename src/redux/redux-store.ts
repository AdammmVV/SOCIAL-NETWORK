import {applyMiddleware, combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogReducer} from "./dialog-reducer";
import {navBarReducer} from "./navBar-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";
import { reducer as formReducer } from 'redux-form'
import thunk from "redux-thunk";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type AppStateType = ReturnType<typeof rootReducer>


export let store = createStore(rootReducer, applyMiddleware(thunk));