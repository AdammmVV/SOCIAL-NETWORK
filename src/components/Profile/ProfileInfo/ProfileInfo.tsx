import s from "./ProfileInfo.module.css";
import React from "react";

export const ProfileInfo = (props: any) => {
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
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
        </div>
    )
}