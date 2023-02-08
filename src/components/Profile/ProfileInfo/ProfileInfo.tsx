import s from "./ProfileInfo.module.css";
import React, {ChangeEvent} from "react";

type ProfileInfoPropsType = {
    addPost: () => void
    profileMessage: string
    updateProfileMessage: (val:string) => void
}

const logo = 'https://обложка-вк.рф/src/img/lower/it/it-khakery/it-khakery-1.png'

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    const onClickButtonHandler = () => {
     props.addPost()
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateProfileMessage(e.currentTarget.value)
    }

    return (
        <div className={s.content}>
            <div className={s.avatarDescriptionContainer}>
                <img src={logo} alt=""/>
                <div className={s.avatarDescription}>
                    <span className={s.ava}>
                        <img src="https://avatars.githubusercontent.com/u/114234336?s=400&u=733596071371f0b251db3bfeeaef4d0d953bca77&v=4" />
                        </span>
                    <span className={s.description}>Валерий Адамчук</span>
                </div>
            </div>

            <div className={s.myPosts}>
                My posts
            </div>
            <div className={s.addPosts}>
                <div className={s.addPostTextarea}>
                    <textarea placeholder={'New post'} onChange={onChangeHandler} value={props.profileMessage}/>
                </div>
                <div className={s.addPostsButton}>
                    <button onClick={onClickButtonHandler}>Add post</button>
                </div>
            </div>
        </div>
    )
}