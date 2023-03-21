import React from "react";
import { css } from "../../../../helpers/css";
import { Link } from "react-router-dom";
import s from './index.module.scss'
import {useAppState} from '../../../../store/reduxStore'
import { LanguageState } from "../../../../store/reducers/language";
import { Languages } from "../../../../types/language";

export const Treatment = () => {
    const { language } = useAppState(LanguageState)

    return (
        <div className={css(s.Treatment)}>
            <div className={css(s.Treatment__nav)}>
                <div className={css(s.navTitle)}>
                    <h2>{Languages.service[language]}</h2>
                    {/* <img src="https://img.icons8.com/material-outlined/24/ffffff/multiply--v1.png" onClick={e => setModal(false)}/>     */}
                </div>
                <div className={css(s.navList)}>
                    <Link to='/service1'>{Languages.serviceNav1[language]}</Link>
                    <Link to='/service2' className={css(s.activeItem)}>{Languages.serviceNav2[language]}</Link>
                    <Link to='/service3'>{Languages.serviceNav3[language]}</Link>
                </div>
            </div>
            <div className={css(s.Treatment__main)}>
                <div className={css(s.head)}>{Languages.services2[language]}</div>
                <div className={css(s.content)}>
                    <img className={css(s.imageMain)} src="Treatment_main.png" alt="" />
                    <p><b>{Languages.TreatmentTitle1[language]}</b> {Languages.TreatmentText1[language]}</p>
                    <p>{Languages.TreatmentText2[language]}</p>
                    <p>{Languages.TreatmentText3[language]}</p>
                    <p>1) <b>{Languages.TreatmentTitle4[language]}</b> {Languages.TreatmentText4[language]}</p>
                    <p>2) <b>{Languages.TreatmentTitle5[language]}</b> {Languages.TreatmentText5[language]}</p>
                    <p>3) <b>{Languages.TreatmentTitle6[language]}</b> {Languages.TreatmentText6[language]}</p>
                    <p>4) <b>{Languages.TreatmentTitle7[language]}</b> {Languages.TreatmentText7[language]}</p>
                    <div className={css(s.imageContainer)}>
                        <img src="./Treatment1.png" alt="" />
                        <img src="./Treatment2.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}