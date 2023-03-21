import React, {useState , useEffect} from "react";
import { css } from "../../../../helpers/css";
import { useAppState } from "../../../../store/reduxStore";
import { ProductState, ProductActions } from "../../../../store/reducers/product";
import { useActions } from "../../../../helpers/reduxHook";
import s from './index.module.scss'

export const Pagination = () => {
    const {pagination} = useAppState(ProductState)
    const {setPageAction} = useActions(ProductActions)
    const paginationArray = Array.from(Array(pagination.allPages).keys())
    console.log(paginationArray)

    useEffect(() => {
        return () => {
            setPageAction(0)
        }
    }, [])

    const onClick = (page:number) => {
        setPageAction(page)
    }

    return (
        <div className={css(s.pagination)}>
        <div className={css(s.paginationBlock)}>
            {paginationArray.map((item,key)=> (
                <div className={css(s.item, key===pagination.page && s.activePage)} onClick={e=> onClick(key)}>{key+1}</div>
            ))}
            {/* <div className={css(s.item)}>1</div>
            <div className={css(s.item)}>2</div>
            <div className={css(s.item)}>3</div> */}
        </div>
    </div>
    )
}