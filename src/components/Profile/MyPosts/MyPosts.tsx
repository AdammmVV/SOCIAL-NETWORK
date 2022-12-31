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
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    );
}


export default MyPosts;