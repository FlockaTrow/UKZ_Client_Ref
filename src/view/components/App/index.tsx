import React, {useEffect} from 'react'
import {Route, Routes, useNavigate, useLocation, Navigate} from "react-router-dom";
import {AppLayout} from "../AppLayout";
import { MainPage } from '../MainPage';
import { Catalog } from '../Catalog';
import { Forging } from '../Services/Forging';
import { Treatment } from '../Services/Treatment';
import { Machining } from '../Services/Machining';

export const App = () => {
    const navigate = useNavigate();
    const location = useLocation()

    useEffect(()=>{
        if (location.pathname === '/') navigate(`/main`)
    },[])

    return (

            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route path="/main" element={<MainPage />}/>
                    {/* <Route path="/product/:id" element={<CardProduct />}/> */}
                    <Route path="/catalog" element={<Catalog />}/>
                    <Route path="/service1" element={<Forging />}/>
                    <Route path="/service2" element={<Treatment />}/>
                    <Route path="/service3" element={<Machining />}/>
                </Route>
                <Route
                    path="*"
                    element={<Navigate to="/main" replace />}
                />
            </Routes>

    )
}
