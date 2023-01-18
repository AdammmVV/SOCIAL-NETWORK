import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {v1} from "uuid";

const MyPosts = () => {

    type PropsDataType = {
        id:string
        message: string
        likeCount: string
    }

    let propsData: PropsDataType[] = [
        {id: v1(), message: 'How are you?', likeCount: '12'},
        {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
        {id: v1(), message: 'Yo!', likeCount: '17'},
    ]
    let mapPost = propsData.map((p) => {
        return (
            <Post key={p.id} message={p.message} likeCount={p.likeCount}/>
        )
    })
    return (
        <div className={s.myPosts}>
            {mapPost}
        </div>
    );
}


export default MyPosts;