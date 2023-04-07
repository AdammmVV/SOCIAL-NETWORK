import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {InitialStateProfilePageStateType} from "../../../redux/profile-reducer";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type MyPostsPropsType = {
    profilePage: InitialStateProfilePageStateType
    addPost: (newPost: string) => void
}

export const MyPosts = (props: MyPostsPropsType) => {

    const onAddPost = (value: AddNewPostFormType) => {
        props.addPost(value.profileMessage)
    }

    let post = props.profilePage.posts.map(p =>
        <Post key={p.id} message={p.message} likeCount={p.likeCount}/>)
    return (
        <div className={s.myPosts}>
            <div className={s.addPosts}>
                <div>
                    My posts
                </div>
                <AddNewPostWithForm onSubmit={onAddPost}/>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    );
}

export type AddNewPostFormType = {
    profileMessage: string
}


export const AddNewPostForm: React.FC<InjectedFormProps<AddNewPostFormType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={s.addPostTextarea}>
                <Field component='textarea' name='profileMessage' placeholder='New post' />
            </div>
            <div className={s.addPostsButton}>
                <button>Add post</button>
            </div>
        </form>
    )
}

export const AddNewPostWithForm = reduxForm<AddNewPostFormType>({
    form: 'addNewPost'
})(AddNewPostForm)