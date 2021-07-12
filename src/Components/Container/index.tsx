import React, {ReactChild, ReactChildren} from 'react'
import style from './style.module.scss'

interface AuxProps {
    children: ReactChild | ReactChildren;
}

export default function Container({ children }: AuxProps) {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}