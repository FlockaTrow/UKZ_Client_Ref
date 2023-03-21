import React from "react";
import { css } from "../../../../helpers/css";
import s from './index.module.scss'
import { Link, useNavigate } from "react-router-dom";
import { IProduct } from "../../../../types/product";
import { useActions } from "../../../../helpers/reduxHook";
import { ProductActions } from "../../../../store/reducers/product";
import { img_server } from "../../../../helpers/config";
export const Product = ({product}:{product:IProduct}) => {
    const navigate = useNavigate()
    const {setProductAction} = useActions(ProductActions)

    // const onClick = (url:string) => {
    //     setProductAction(product)
    //     navigate(url)
    // }

    return (
        <div className={css(s.Product)}>
            <div className={css(s.info)}>
                <div><img src={`${img_server}/${product.image}`} alt=""/></div>
                <p>{product.name}</p>
            </div>
            {/* <p className={css(s.art)}>{product.article}</p> */}
        </div>
    )
}