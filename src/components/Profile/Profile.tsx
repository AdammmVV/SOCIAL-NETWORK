import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {profilePageType} from "../../redux/store";

type ProfilePropsType = {
    profilePage: profilePageType
    addPost: ()=> void
    updateProfileMessage: (val:string) => void
    profileMessage: string
}

export const Profile = (props: ProfilePropsType) => {
    return (
        <div>
            <ProfileInfo addPost={props.addPost}
                         profileMessage={props.profileMessage}
                         updateProfileMessage={props.updateProfileMessage}/>
            <MyPosts profilePage={props.profilePage}/>
        </div>
    );
}