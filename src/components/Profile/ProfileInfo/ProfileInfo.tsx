import s from "./ProfileInfo.module.css";
import React from "react";


export const ProfileInfo = () => {

    return (
        <div className={s.content}>
            <div className={s.avatarDescriptionContainer}>
                <img src='https://обложка-вк.рф/src/img/lower/it/it-khakery/it-khakery-1.png' alt="cover"/>
                <div className={s.avatarDescription}>
                    <span className={s.ava}>
                        <img
                            src="https://avatars.githubusercontent.com/u/114234336?s=400&u=733596071371f0b251db3bfeeaef4d0d953bca77&v=4"
                            alt='avatar'/>
                        </span>
                    <span className={s.description}>Валерий Адамчук</span>
                </div>
            </div>
        </div>
    )
}