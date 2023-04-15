import {applyMiddleware, combineReducers, createStore} from "redux";
import {MaineActionForProfile, profileReducer} from "./profile-reducer";
import {dialogReducer, MainActionForDialog} from "./dialog-reducer";
import {navBarReducer} from "./navBar-reducer";
import {MainATForUsers, usersReducer} from "./users-reducer";
import {authReducer, MainActionForAuth} from "./auth-reducer";
import {reducer as formReducer} from 'redux-form'
import thunk, {ThunkAction} from "redux-thunk";
import {appReducer, MainActionForApp} from "./app-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogReducer,
    navBar: navBarReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer
})

export type AppStateType = ReturnType<typeof rootReducer>

export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    AppStateType,
    unknown,
    AppRootActionType
    >

export type AppRootActionType =
    | MainActionForApp
    | MainActionForAuth
    | MaineActionForProfile
    | MainActionForDialog
    | MainATForUsers

export let store = createStore(rootReducer, applyMiddleware(thunk));