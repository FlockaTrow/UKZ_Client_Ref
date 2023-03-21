import React from "react";
import { css } from "../../../../helpers/css";
import s from './index.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { useAppState } from "../../../../store/reduxStore";
import { LanguageState } from "../../../../store/reducers/language";
import { Languages } from "../../../../types/language";
import { useActions } from "../../../../helpers/reduxHook";
import { ProductActions } from "../../../../store/reducers/product";

export const Directions = () => {
    const {language} = useAppState(LanguageState)
    const {setFilterAction} = useActions(ProductActions)
    const navigate = useNavigate();

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

    const onClickDirection = (e:any, to:string , id:number) => {
        e.preventDefault()
        window.scrollTo(0, 0)
        setFilterAction(id)
        navigate(to)
    }

    return (
        <div className={css(s.Directions)}>
            <h1>{Languages.titleDirections[language]}</h1>
            <div className={css(s.Directions__list)}>
                <div onClick={e=>onClickDirection(e,'/catalog',1)} className={css(s.Directions__item)}>
                    <p>{Languages.DirectionsItem1[language]}</p>
                    <img src="./d1.png" alt="" />
                </div>
                <div onClick={e=>onClickDirection(e,'/catalog',2)} className={css(s.Directions__item)}>
                <p>{Languages.DirectionsItem2[language]}</p>
                    <img src="./d2.png" alt="" />
                </div>
                <div onClick={e=>onClickDirection(e,'/catalog',3)} className={css(s.Directions__item)}>
                <p>{Languages.DirectionsItem3[language]}</p>
                    <img src="./d3.png" alt="" />
                </div>
                {/* <div className={css(s.Directions__item)}>
                <p>{Languages.DirectionsItem4[language]}</p>
                    <img src="./d4.png" alt="" />
                </div> */}
                <div onClick={e=>onClick(e,'/service1')}  className={css(s.Directions__item)}>
                <p>{Languages.services1[language]}</p>
                    <img src="./s1.png" alt="" />
                </div>
                <div onClick={e=>onClick(e,'/service2')}  className={css(s.Directions__item)}>
                <p>{Languages.services2[language]}</p>
                    <img src="./s2.png" alt="" />
                </div>
                <div onClick={e=>onClick(e,'/service3')}  className={css(s.Directions__item)}>
                <p>{Languages.services3[language]}</p>
                    <img src="./s3.png" alt="" />
                </div>
            </div>
            <div className={css(s.bntBox)}>
                <Link to='/catalog' className={css(s.btn)}> <p>{Languages.allDirections[language]}</p></Link>
            </div>
        </div>
    )
}
