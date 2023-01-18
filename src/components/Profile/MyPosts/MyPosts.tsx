import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    type PropsDataType = {
        message: string
        likeCount: string
    }

    let propsData: PropsDataType[] = [
        {message: 'How are you?', likeCount: '12'},
        {message: 'Hi, I am Adam.', likeCount: '11'},
        {message: 'Yo!', likeCount: '17'},
    ]
    let mapPost = propsData.map((p) => {
        return (
            <Post message={p.message} likeCount={p.likeCount}/>
        )
    })
    return (
        <div className={s.myPosts}>
            {mapPost}
        </div>
    );
}


export default MyPosts;