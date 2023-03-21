import React, {useState, useEffect} from 'react'
import {css} from '../../../helpers/css'
import s from './index.module.scss'
import { useParams,Link } from 'react-router-dom'
import { ModalContacts } from './ModalContacts'
import { useAppState } from '../../../store/reduxStore'
import { LanguageState } from '../../../store/reducers/language'
import { Languages } from '../../../types/language'
import { ProductState, ProductActions } from '../../../store/reducers/product'
import { useActions } from '../../../helpers/reduxHook'


export const CardProduct = () => {
    const [flag , setFlagShow] = useState(false)
    const {language} = useAppState(LanguageState)
    const {activeProduct} = useAppState(ProductState)
    const {clearProductAction} = useActions(ProductActions)

    useEffect(() => {
        return () => {
            clearProductAction()
        }
    }, [])


    return (
        <div className={css(s.CardProduct)}>
            <div className={css(s.CardProduct__head)}>
                <Link to='/catalog'>{Languages.productCalalog[language]}</Link> -&gt; <Link to='/catalog'>{Languages.allDirections[language]}</Link>
            </div>
            <div className={css(s.CardProduct__main)}>
                <div className={css(s.productImg)}>
                    <h3>{activeProduct?.name}</h3>
                    <div className={css(s.img)}>
                        <img src={`./files/${activeProduct?.image}`} alt="" />
                    </div>
                </div>
                <div className={css(s.productInfo)}>
                    <div className={css(s.text)}>
                        <div className={css(s.infoDesc)}>{activeProduct?.descriptoin}</div>
                        <p>{activeProduct?.article}</p>
                    </div>
                    <button onClick={e => setFlagShow(true)}>{Languages.form[language]}</button>
                </div>
            </div>
            <ModalContacts flag={flag} setFlagShow={setFlagShow}/>
        </div>
    )
}