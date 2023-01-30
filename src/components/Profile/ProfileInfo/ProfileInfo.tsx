import s from "./ProfileInfo.module.css";
import React, {ChangeEvent} from "react";

type ProfileInfoPropsType = {
    addPost: () => void
    profileMessage: string
    updateProfileMessage: (val:string) => void
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {
    
    const onClickButtonHandler = () => {
     props.addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateProfileMessage(e.currentTarget.value)
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
                    <textarea onChange={onChangeHandler} value={props.profileMessage}/>
                </div>
                <div>
                    <button onClick={onClickButtonHandler}>Add post</button>
                </div>
            </div>
        </div>
    )
}