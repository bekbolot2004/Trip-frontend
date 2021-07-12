import React from 'react'
import style from './style.module.scss'
import bg from './assets/bg.jpg'
import bottom from './assets/bottom.svg'
import hotel from './assets/hotel.svg'
import departures from './assets/departures.svg'
import train from './assets/train.svg'
import {NavLink} from 'react-router-dom'

const LinksObj = [
    {
        "id": 1,
        "title": "Hotels",
        "icon": hotel,
    },
    {
        "id": 2,
        "title": "Flights",
        "icon": departures
    },
    {
        "id": 3,
        "title": "Trains",
        "icon": train,
    },
    {
        "id": 4,
        "title": "Hotels",
        "icon": hotel,
    },
    {
        "id": 5,
        "title": "Flights",
        "icon": departures
    },
    {
        "id": 6,
        "title": "Trains",
        "icon": train,
    },
]

export default function Main() {
    return (
        <div className={style.main}>
            <div className={style.background}>
                <img src={bg} alt="bg"/>
                <div className={style.black}/>
            </div>
            <div className={style.bottom}>
                <img src={bottom} alt="bottom"/>
            </div>

            <div className={style.advantages}>
                {LinksObj.map(p =>
                    <NavLink to={"/hotels"}>
                        <div className={style.advantages_item}>
                            <div className={style.icon}>
                                <img src={p.icon} alt="icon"/>
                            </div>
                            <div className={style.itemTitle}>
                                <p>{p.title}</p>
                            </div>

                        </div>
                    </NavLink>
                )}
            </div>
        </div>
    )
}