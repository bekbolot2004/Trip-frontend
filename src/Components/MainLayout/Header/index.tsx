import React from 'react'
import style from './style.module.scss'
import Container from "../../Container";
import logo from '../../assets/logo.svg'
import {NavLink} from "react-router-dom";
import Language from "./Language";
import HeaderCart from "./HeaderCart";

export default function Header({}) {
    return (
        <div className={style.header}>
            <Container>
                <div className={style.headerContent}>
                    <div className={style.logo}>
                        <NavLink exact to={"/"}>
                            <img src={logo} alt="logo"/>
                        </NavLink>
                    </div>
                    <div className={style.links}>
                        <NavLink exact to={"/"} activeClassName={style.active}>
                            <div className={style.linkItem}>Home</div>
                        </NavLink>
                        <NavLink exact to={"/hotels"} activeClassName={style.active}>
                            <div className={style.linkItem}>Hotels</div>
                        </NavLink>
                        <NavLink exact to={"/cars"} activeClassName={style.active}>
                            <div className={style.linkItem}>Cars</div>
                        </NavLink>
                        <NavLink exact to={"/driver"} activeClassName={style.active}>
                            <div className={style.linkItem}>Driver</div>
                        </NavLink>
                        <NavLink exact to={"/instruments"} activeClassName={style.active}>
                            <div className={style.linkItem}>Instruments</div>
                        </NavLink>
                        <NavLink exact to={"/plan"} activeClassName={style.active}>
                            <div className={style.linkItem}>Plan</div>
                        </NavLink>

                        <NavLink exact to={"/econom-travels"} activeClassName={style.active}>
                            <div className={style.linkItem}>Econom travels</div>
                        </NavLink>
                    </div>
                    <div className={style.btnIcons}>
                        <HeaderCart/>
                        <Language/>
                    </div>
                </div>
            </Container>
        </div>
    )
}