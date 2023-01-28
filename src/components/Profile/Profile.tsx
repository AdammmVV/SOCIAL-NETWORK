import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/state";

type ProfilePropsType = {
    profilePage: profilePageType
    addPost: (message: string)=> void
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo addPost={props.addPost}/>
            <MyPosts profilePage={props.profilePage}/>
        </div>
    );
}