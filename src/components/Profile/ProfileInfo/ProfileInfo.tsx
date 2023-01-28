import s from "./ProfileInfo.module.css";
import React from "react";

type ProfileInfoPropsType = {
    addPost: (message:string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    let textareaRef = React.createRef<HTMLTextAreaElement>()

    const onClickButtonHandler = () => {
        if (textareaRef.current) {
            props.addPost(textareaRef.current.value)
            textareaRef.current.value = '';
        }

    }

    return (
        <div className={s.content}>
            <div>
                <img src="https://www.adlertreks.com/wp-content/uploads/2016/07/IMG_0965-850x350.jpg" alt=""/>
            </div>
            <div>
                ava + description
            </div>
            <div>
                My posts
            </div>
            <div>
                <div>
                    <textarea ref={textareaRef}> </textarea>
                </div>
                <div>
                    <button onClick={onClickButtonHandler}>Add post</button>
                </div>
            </div>
        </div>
    )
}