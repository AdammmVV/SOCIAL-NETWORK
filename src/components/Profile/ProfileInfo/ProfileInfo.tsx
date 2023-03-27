import s from "./ProfileInfo.module.css";
import React from "react";
import {ProfileInfoType} from "../../../redux/profile-reducer";
import ava from '../../../img/avaEvery.jpg'
import {Preloader} from "../../common/preloader/Preloader";

type ProfileInfoPropsType = {
    profileInfo: ProfileInfoType
    isFetching: boolean
}

export const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div className={s.content}>
            { props.isFetching && <Preloader/> }
            <div className={s.avatarDescriptionContainer}>
                <img src='https://обложка-вк.рф/src/img/lower/it/it-khakery/it-khakery-1.png' alt="cover"/>
                <div className={s.avatarDescription}>
                    <span className={s.ava}>
                        <img
                            src={props.profileInfo.photos.small ? props.profileInfo.photos.small : ava}
                            alt='avatar'/>
                        </span>
                    <div className={s.description}>
                        <span>{props.profileInfo.fullName}</span>
                        <span>О мне: {props.profileInfo.aboutMe}</span>
                        <div>
                            Контакты:
                            <span>{props.profileInfo.contacts.facebook}</span>
                            <span>{props.profileInfo.contacts.vk}</span>
                            <span>{props.profileInfo.contacts.github}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Status = (props: any) => {
    return <span>О мне: {props.profileInfo.aboutMe}</span>
}


// return (
//     <div className={s.content}>
//         <div className={s.avatarDescriptionContainer}>
//             <img src='https://обложка-вк.рф/src/img/lower/it/it-khakery/it-khakery-1.png' alt="cover"/>
//             <div className={s.avatarDescription}>
//                     <span className={s.ava}>
//                         <img
//                             src="https://avatars.githubusercontent.com/u/114234336?s=400&u=733596071371f0b251db3bfeeaef4d0d953bca77&v=4"
//                             alt='avatar'/>
//                         </span>
//                 <span className={s.description}>Валерий Адамчук</span>
//             </div>
//         </div>
//     </div>
// )