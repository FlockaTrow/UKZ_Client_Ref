import React from "react";
import { css } from "../../../helpers/css";
import s from './index.module.scss'
import { Carousel } from "./Carousel";
import { Directions } from "./Directions";
import { Contacts } from "./Contacts";

export const MainPage = () => {
    return (
        <div className={s.MainPage}>
            <Carousel />
            <Directions />
            <Contacts />
        </div>
    )
}