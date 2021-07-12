import React, {useState} from 'react'
import style from './style.module.scss'
import cartIcon from './assets/basket.svg'
import {NavLink} from "react-router-dom";

export default function HeaderCart() {
    const [sumCart, setSumCart] = useState(0)

    return (
        <NavLink exact to={"/basket"}>
            <div className={style.cart}>
                <div className={style.icon}>
                    <img src={cartIcon} alt="cartIcon"/>
                    <div className={style.sum}>{sumCart}</div>
                </div>
            </div>
        </NavLink>
    )
}