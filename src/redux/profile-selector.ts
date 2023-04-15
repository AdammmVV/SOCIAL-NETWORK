import {AppStateType} from "./redux-store";

export const getProfileInfo = (state: AppStateType) => state.profilePage.profileInfo
export const getIsFetching = (state: AppStateType) => state.profilePage.isFetching
export const getProfileStatus = (state: AppStateType) => state.profilePage.profileStatus
