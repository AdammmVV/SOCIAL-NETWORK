import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.myPosts}>
            <div>
                ava + description
            </div>
            <div>
                My posts
            </div>
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message='How are you?' likeCount='12'/>
            <Post message='Hi, I am Adam.' likeCount='11'/>
            <Post message='Yo!' likeCount='17'/>
        </div>
    );
}


export default MyPosts;