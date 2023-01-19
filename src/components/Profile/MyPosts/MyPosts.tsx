import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {profilePageType} from "../../../redux/state";

type MyPostsPropsType = {
    profilePage: profilePageType
}

const MyPosts = (props: MyPostsPropsType) => {

    let post = props.profilePage.posts.map(p =>
        <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)

    return (
        <div className={s.myPosts}>
            {post}
        </div>
    );
}


export default MyPosts;