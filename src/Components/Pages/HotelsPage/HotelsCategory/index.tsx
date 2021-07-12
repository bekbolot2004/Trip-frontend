import React, {useState} from 'react'
import style from './style.module.scss'

export default function HotelsCategory() {
    const [cat, setCat] = useState(1)


    const hotelsObj = [
        {
            id: 1,
            category_title: "Hotels"
        },
        {
            id: 2,
            category_title: "Yurts"
        },
        {
            id: 3,
            category_title: "Rooms"
        },
        {
            id: 4,
            category_title: "House"
        },
    ]

    return (
        <div className={style.category}>
            {hotelsObj.map(p =>
                <div key={p.id} className={style.item} >
                    <p>{p.category_title}</p></div>
            )}
        </div>
    )
}