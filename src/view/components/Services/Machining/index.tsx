import React from "react";
import { css } from "../../../../helpers/css";
import { Link } from "react-router-dom";
import s from './index.module.scss'
import { useAppState } from '../../../../store/reduxStore'
import { LanguageState } from "../../../../store/reducers/language";
import { Languages } from "../../../../types/language";

export const Machining = () => {

    const { language } = useAppState(LanguageState)

    return (
        <div className={css(s.Machining)}>
            <div className={css(s.Machining__nav)}>
                <div className={css(s.navTitle)}>
                    <h2>{Languages.service[language]}</h2>
                    {/* <img src="https://img.icons8.com/material-outlined/24/ffffff/multiply--v1.png" onClick={e => setModal(false)}/>     */}
                </div>
                <div className={css(s.navList)}>
                    <Link to='/service1'>{Languages.serviceNav1[language]}</Link>
                    <Link to='/service2'>{Languages.serviceNav2[language]}</Link>
                    <Link to='/service3' className={css(s.activeItem)}>{Languages.serviceNav3[language]}</Link>
                </div>
            </div>
            <div className={css(s.Machining__main)}>
                <div className={css(s.head)}>{Languages.services3[language]}</div>
                <div className={css(s.content)}>
                    <p><b>{Languages.MachiningTitle1[language]}</b> {Languages.MachiningText1[language]}</p>
                    <p>{Languages.MachiningText2[language]}</p>
                    <p>1) <b>{Languages.MachiningTitle3[language]}</b> {Languages.MachiningText3[language]}</p>
                    {/* <img className={css(s.imageMain)} src="./Machining1.png" alt="" /> */}
                    <p>2) <b>{Languages.MachiningTitle4[language]}</b> {Languages.MachiningText4[language]}</p>
                    {/* <img className={css(s.imageMain)} src="../Machining1.png" alt="" /> */}
                    <p>3) <b>{Languages.MachiningTitle5[language]}</b> {Languages.MachiningText5[language]}</p>
                    {/* <img className={css(s.imageMain)} src="./Machining2.png" alt="" /> */}
                    <p>4) <b>{Languages.MachiningTitle6[language]}</b> {Languages.MachiningText6[language]}</p>
                    {/* <img className={css(s.imageMain)} src="./Machining3.png" alt="" /> */}
                    <p>5) <b>{Languages.MachiningTitle7[language]}</b> {Languages.MachiningText7[language]}</p>
                    {/* <img className={css(s.imageMain)} src="./Machining4.png" alt="" /> */}
                </div>
            </div>
        </div>
    )
}