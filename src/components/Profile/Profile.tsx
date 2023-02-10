import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType, profilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: profilePageType
    profileMessage: string
    dispatch: (action: ActionType) => void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo profileMessage={props.profileMessage} dispatch={props.dispatch}/>
            <MyPosts profilePage={props.profilePage}/>
        </div>
    );
}