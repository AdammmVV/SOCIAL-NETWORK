import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileInfoType} from "../../redux/profile-reducer";

type ProfilePropsType = {
    profileInfo: ProfileInfoType
    isFetching: boolean
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    );
}