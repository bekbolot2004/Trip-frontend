import React from 'react'
import style from './style.module.scss'
import car from './assets/photo_2021-07-02_18-45-38.jpg'
import car2 from './assets/photo_2021-07-02_18-45-39.jpg'
import car3 from './assets/photo_2021-07-02_18-45-40.jpg'
import car4 from './assets/photo_2021-07-02_18-45-42.jpg'
import car5 from './assets/photo_2021-07-02_18-45-41.jpg'
import car6 from './assets/photo_2021-07-02_18-45-41 (2).jpg'
import carsIcon from './assets/car.svg'
import gasStation from './assets/gas-station.svg'

interface DataProps {
    title: string,
    id: number,
    year: string,
    category: string,
    price: string,
    consumption: number,
    rating: number
}

interface Props {
    data: DataProps,
}

const CarsElement: React.FC<Props> = ({data}) => {
    return (
        <div className={style.carItem}>
            <div className={style.imgCars}>
                <img src={car} alt="cars"/>
                <div className={style.title}>
                    <p>{data.title}</p>
                </div>
                <div className={style.liner}/>
            </div>
            <div className={style.LtrAndYear}>
                <div className={style.ltr}>
                    <div  className={style.icon}><img src={gasStation} alt="gasStation"/></div>
                    <p>{data.consumption}L/100km</p>
                </div>
                <div className={style.year}>
                    <p>Year {data.year}</p>
                </div>
            </div>
            <div className={style.categoryAndPrice}>
                <div className={style.category}>
                    <div className={style.icon}><img src={carsIcon} alt="carsIcon"/></div>
                    <p>{data.category}</p>
                </div>
                <div className={style.price}>
                    <p>${data.price}</p>
                </div>
            </div>
        </div>
    )
}

export default CarsElement;