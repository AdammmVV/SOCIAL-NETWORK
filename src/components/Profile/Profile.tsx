import React from "react";
import s from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

export const Profile = () => {
    return (
        <div>
            <div className={s.content}>
                <div>
                    <img src="https://www.adlertreks.com/wp-content/uploads/2016/07/IMG_0965-850x350.jpg" alt=""/>
                </div>
                <MyPosts />
            </div>
        </div>
    );
}