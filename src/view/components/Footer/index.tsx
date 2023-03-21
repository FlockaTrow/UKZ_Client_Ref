import React from 'react'
import { css } from '../../../helpers/css'
import s from './index.module.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useAppState } from '../../../store/reduxStore'
import { LanguageState } from '../../../store/reducers/language'
import { Languages } from '../../../types/language'

export const Footer = () => {
    const navigate = useNavigate();
    const { language } = useAppState(LanguageState)

    const onClick = (e: any, to: string, flag: boolean = false) => {
        e.preventDefault()
        window.scrollTo(0, 0)
        navigate(to)
        if (flag) {
            setTimeout(() => {
                const id = 'contacts';
                const yourElement = document.getElementById(id);
                if (yourElement === null) return
                const y = yourElement.getBoundingClientRect().top + window.pageYOffset;
                window.scrollTo({ top: y, behavior: 'smooth' });
            }, 100)
        }
    }

    return (
        <div className={css(s.Footer)}>
            <div className={css(s.Footer__container)}>
                <div className={css(s.logo)}>
                    <img src="logo2.png" alt="" />
                    <p className={css(s.foot)}>©ООО"УКЗ", 2022</p>
                </div>
                <div className={css(s.nav)}>
                    <a onClick={e => onClick(e, '/catalog')}>{Languages.catalog[language]}</a>
                    <a onClick={e => onClick(e, '/main', true)}>{Languages.contacts[language]}</a>
                    <a onClick={e => onClick(e, '/service1')}>{Languages.services1[language]}</a>
                    <a onClick={e => onClick(e, '/service2')}>{Languages.services2[language]}</a>
                    <a onClick={e => onClick(e, '/service3')}>{Languages.services3[language]}</a>
                </div>
                <div className={css(s.info)}>
                    <p>Челябинская область, г. Чебаркуль, ул. Суворова, д.17</p>
                    <p>ukz2@yandex.ru</p>
                </div>
            </div>
        </div>
    )
}