import React, {Props} from "react";
import s from './Post.module.css'

type PostPropsType = {
    message: string,
    likeCount: string,
}

const Post = (props: PostPropsType) => {
    return (
        <div>
            <div className={s.item}>
                <img src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" alt="dogs"/>
                {props.message}
                <div>
                    <span>like: {props.likeCount}</span>
                </div>
            </div>
        </div>
    );
}


export default Post;