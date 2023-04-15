import {AppStateType} from "./redux-store";

export const getUsersPage = (state:AppStateType) => state.usersPage
export const getUserId = (state: AppStateType) => state.auth.id