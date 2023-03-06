import React from "react";
import s from "./Preloader.module.css";

export const Preloader = () => {
    return (
        <div className={s.loaderWrapper}>
            <span className={s.loader}/>
        </div>
    )
}