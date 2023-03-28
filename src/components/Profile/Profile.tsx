import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    updateStatus: (newStatus: string) => void
    profileInfo: ProfileInfoType
    isFetching: boolean
    profileStatus: string
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
}