import React, {useEffect , useState} from 'react'
import s from './index.module.scss'
import { css } from "../../../helpers/css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppState } from '../../../store/reduxStore';
import { LanguageState, LanguageActions } from '../../../store/reducers/language';
import { useActions } from '../../../helpers/reduxHook';
import { Languages } from '../../../types/language';
import { ProductActions } from '../../../store/reducers/product';

export const Navigation = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const { language } = useAppState(LanguageState)
    const {setLanguageAction} = useActions(LanguageActions)
    const [flagBg , setFlagBg] = useState(false)
    const {setFilterAction} = useActions(ProductActions)
    
    useEffect(() => {
        if (location.pathname !== '/main') setFlagBg(true)
        else setFlagBg(false)
    }, [location] )

    const onClick = (e: any, to: string, flag: boolean = false) => {
        e.preventDefault()
        window.scrollTo(0, 0)
        setFilterAction(null)
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

    const changeLanguage = () => {
        if (language === 'Ru') setLanguageAction('En')
        else setLanguageAction('Ru')
    }

    return (
        <div className={css(s.Navigation , flagBg && s.NavigationBg)}>
            {flagBg && <img className={css(s.bgcHeader)} src='header.png'></img>}
            <div className={css(s.nav)}>
                <a onClick={e => onClick(e, '/catalog')}>{Languages.catalog[language]}</a>
                <a onClick={e => onClick(e, '/main')}><img src='./logo.png'/></a>
                <a onClick={e => onClick(e, '/main', true)}>{Languages.contacts[language]}</a>
            </div>
            <div className={css(s.language)} onClick={changeLanguage}>
                {language}
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.5 11.4159L0.00481036 0.277279L12.9952 0.27728L6.5 11.4159Z" fill="#D6EAEC" />
                </svg>
            </div>
        </div>
    )
}
