import React from 'react'
import style from './style.module.scss'
import room from "./assets/room.svg";
import airConditioning from "./assets/AirConditioning.svg";
import house from "./assets/house.png";
import star from "./assets/star.svg";

interface DataProps {
    title: string,
    count_room: number,
    conditioner: boolean,
    price: string,
    category: string,
    rating: number
}
interface Props {
    data: DataProps,
}

const HotelElement: React.FC<Props> = ({data}) => {
    return (
        <div className={style.hotelsItem}>
            <div className={style.itemCaption}>
                <div className={style.category}>
                    <p>Hotels</p>
                </div>
                <div className={style.roomsAndAirConditioning}>
                    {/*{data.count_room &&*/}
                    {/*<div><img src={room} alt="room"/></div>.repeat(p.count_room)}*/}
                    {data.count_room &&
                    <div className={style.roomsHow}><img src={room}
                                                         alt="room"/><span>{data.count_room}</span>
                    </div>}
                    {data.conditioner &&
                    <div><img src={airConditioning} alt="airConditioning"/></div>}
                </div>
            </div>
            <div className={style.imgHouse}>
                <img src={house} alt="house"/>
                <div className={style.rating}>
                    <div className={style.imgStar}><img src={star} alt="star"/></div>
                    <p>{data.rating}</p>
                </div>
                <div className={style.liner}/>
            </div>
            <div className={style.price}>
                <h2>$<span>{data.price}</span></h2>
            </div>
            <div className={style.title}>
                <p>{data.title}</p>
            </div>
        </div>
    )
}

export default HotelElement;