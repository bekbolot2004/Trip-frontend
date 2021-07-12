import React, {ReactChildren, ReactChild} from 'react'
import Header from "./Header";
import style from './style.module.scss'
import Footer from "./Footer";

interface AuxProps {
    children: ReactChild | ReactChildren;
}

export default function MainLayout({children}: AuxProps) {
    return (
        <div className={style.mainLayout}>
            <Header/>
            <div className={style.content}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}