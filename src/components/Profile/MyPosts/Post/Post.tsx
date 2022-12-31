import React from "react";
import s from './Post.module.css'

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" alt="dogs"/>
                post 1
                <div>
                    <span>like</span>
                </div>
            </div>
        </div>
    );
}


export default Post;