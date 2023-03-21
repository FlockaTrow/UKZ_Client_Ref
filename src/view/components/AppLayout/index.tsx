import React from 'react'
import s from './index.module.scss'
import {css} from "../../../helpers/css";
import { Outlet } from 'react-router-dom';
import {Navigation} from "../Navigation";
import { Footer } from '../Footer';

export const AppLayout = () => {

    return (
        <div className={css(s.AppLayout)} id='AppLayout'>
            <Navigation />
            <Outlet />
            <Footer/>
            {/*<PopupWrapper><ChangePassword id={`changePasswordPopupMain`} type={`changePassword`}/></PopupWrapper>*/}
        </div>
    )
}
