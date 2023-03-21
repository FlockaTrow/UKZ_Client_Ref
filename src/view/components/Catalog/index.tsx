import React, {useState , useEffect} from "react";
import {css} from '../../../helpers/css'
import s from './index.module.scss'
import { Product } from "./Product";
import { useAppState } from '../../../store/reduxStore'
import { LanguageState } from '../../../store/reducers/language'
import { Languages } from '../../../types/language'
import {useThunks , useActions} from '../../../helpers/reduxHook'
import { DirectionThunks } from "../../../store/thunks/direction.thunk";
import { DirectionState } from "../../../store/reducers/direction";
import { IDirection } from "../../../types/direction";
import { ProductState, ProductActions } from "../../../store/reducers/product";
import { ProductThunks } from "../../../store/thunks/product.thunk";
import { Pagination } from "./Pagination";

export const Catalog = () => {
    const [modal , setModal] = useState(false)
    const {language} = useAppState(LanguageState)
    const {directions} = useAppState(DirectionState)
    const {products , pagination , filter} = useAppState(ProductState)
    const {getDirectionTHUNK} = useThunks(DirectionThunks)
    const {setFilterAction,setProductsAction} = useActions(ProductActions)
    const {getProductTHUNK} = useThunks(ProductThunks)

    useEffect(() => {
        getDirectionTHUNK()
        getProductTHUNK()
        return(() => {
            setFilterAction(null)
            setProductsAction([])
        })
    }, [])

    useEffect(() => {
        getProductTHUNK()
    }, [filter])

    const onClickDirection = (id:number) => {
        setFilterAction(id)
    }

    return (
        <div className={css(s.Catalog)}>
            <h2 className={css(s.modalCategory)} onClick={e => setModal(!modal)}>
                <img src="https://img.icons8.com/sf-regular/48/null/sorting-options.png"/>
                {Languages.productCalalog[language]}
            </h2>
            <div className={css(s.Catalog__nav, modal && s.modalNav)}>
                <div className={css(s.navTitle)}>
                    <h2>{Languages.productCalalog[language]}</h2>
                    <img src="https://img.icons8.com/material-outlined/24/ffffff/multiply--v1.png" onClick={e => setModal(false)}/>    
                </div>
                <div className={css(s.navList)}>
                    <p onClick={e=> setFilterAction(null)}>{Languages.allDirections[language]}</p>
                    {directions?.map((item:IDirection) => (
                        <p onClick={e => onClickDirection(item.id)}>{item.name}</p>
                    ))}
                </div>
            </div>
            <div className={css(s.Catalog__products)}>
                <div className={css(s.list)}>
                    {products?.length < pagination.page*pagination.limit+pagination.limit ?
                        products?.slice(pagination.page*pagination.limit,products.length).map((item,id) => (
                            <Product key={id} product={item}/>
                        ))
                    :
                    products?.slice(pagination.page*pagination.limit,pagination.limit).map((item,id) => (
                        <Product key={id} product={item}/>
                    ))
                    }
                </div>
                <Pagination />
            </div>
        </div>
    )
}