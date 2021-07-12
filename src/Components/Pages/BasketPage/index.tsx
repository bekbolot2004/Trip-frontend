import React from 'react'
import style from './style.module.scss'
import MainLayout from "../../MainLayout";
import {NavLink} from "react-router-dom";
import cartIcon from './assets/cart.svg'

export default function BasketPage() {

    return (
        <MainLayout>
            <>

                <div className={style.basket}>

                    <div className={style.caption}>
                        <NavLink exact to={"/"}>
                            <p>В корзине пусто
                                перейдите в
                                <span> главную старницу</span></p>
                        </NavLink>
                    </div>
                    <div className={style.cartImg}>
                        <NavLink exact to={"/"}>
                            <img src={cartIcon} alt="basket"/>
                        </NavLink>
                    </div>
                </div>
            </>
        </MainLayout>
    )
}