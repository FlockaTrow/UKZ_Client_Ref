import React from "react";
import { css } from "../../../../helpers/css";
import { Link } from "react-router-dom";
import s from './index.module.scss'
import {useAppState} from '../../../../store/reduxStore'
import { LanguageState } from "../../../../store/reducers/language";
import { Languages } from "../../../../types/language";

export const Forging = () => {

    const { language } = useAppState(LanguageState)

    return (
        <div className={css(s.Forging)}>
            <div className={css(s.Forging__nav)}>
                <div className={css(s.navTitle)}>
                    <h2>{Languages.service[language]}</h2>
                    {/* <img src="https://img.icons8.com/material-outlined/24/ffffff/multiply--v1.png" onClick={e => setModal(false)}/>     */}
                </div>
                <div className={css(s.navList)}>
                    <Link to='/service1' className={css(s.activeItem)}>{Languages.serviceNav1[language]}</Link>
                    <Link to='/service2'>{Languages.serviceNav2[language]}</Link>
                    <Link to='/service3'>{Languages.serviceNav3[language]}</Link>
                </div>
            </div>
            <div className={css(s.Forging__main)}>
                <div className={css(s.head)}>{Languages.services1[language]}</div>
                <div className={css(s.content)}>
                    <img className={css(s.imageMain)} src="./Forging_main.png" alt="" />
                    <p><strong>{Languages.ForgingTitle1[language]}</strong> {Languages.ForgingText1[language]}</p>
                    <p><b>{Languages.ForgingTitle2[language]}</b> {Languages.ForgingText2[language]}</p>
                    {/* <p>{Languages.ForgingText3[language]}</p> */}
                    <div className={css(s.imageContainer)}>
                        <img src="./Forging1.png" alt="" />
                        <img src="./Forging2.png" alt="" />
                    </div>
                    <p><b>{Languages.ForgingTitle4[language]}</b> {Languages.ForgingText4[language]}</p>
                    <p>{Languages.ForgingText3[language]}</p>
                </div>
            </div>
        </div>
    )
}