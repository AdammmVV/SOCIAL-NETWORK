import React, {ChangeEvent} from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/store";

type MyPostsPropsType = {
    state: ProfilePageType
    addPost: () => void
    updateProfileMessage: (newMessage: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {


    const onAddPost = () => {
        props.addPost()
    }

    const onChangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateProfileMessage(e.currentTarget.value)
    }


    let post = props.state.posts.map(p =>
        <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={s.myPosts}>
            <div className={s.addPosts}>
                <div>
                    My posts
                </div>
                <div className={s.addPostTextarea}>
                    <textarea placeholder={'New post'} onChange={onChangeMessageHandler} value={props.state.profileMessage}/>
                </div>
                <div className={s.addPostsButton}>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
}