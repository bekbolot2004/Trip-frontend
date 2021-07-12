import React from 'react'
import slider1 from './assets/slider-1.png'
import style from './style.module.scss'
import Container from "../../../Container";

export default function Slider() {

    return (
        <div className={style.slider}>
            <div className={style.item}>

                <Container>
                    <div className={style.content}>
                        <div className={style.contentTxt}>Travel to kyrgystan</div>
                    </div>
                </Container>
                <div className={style.img}>
                    <img src={slider1} alt="slider"/>
                    <div className={style.black}/>
                </div>
            </div>
        </div>
    )
}