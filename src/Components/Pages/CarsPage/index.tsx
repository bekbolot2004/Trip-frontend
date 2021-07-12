import React, {useEffect} from 'react'
import MainLayout from "../../MainLayout";
import Container from "../../Container";
import style from './style.module.scss'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {fetchCars} from "../../../Redux/actions/cars";
import CarsElement from "./CarsElements";

export default function CarsPage() {
    const {items, loading} = useTypedSelector(state => state.cars)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchCars())
    }, [])
    console.log(items)
    return (
        <div>
            <MainLayout>
                <Container>
                    <div>
                        <div className={style.contentCaption}>
                            <h1>Cars</h1>
                            {/*{carsItems.map(p => <div>*/}
                            {/*</div>)}*/}
                            <div className={style.carsRow}>
                                {items.map(p => <CarsElement key={p.id} data={p}/>)}
                            </div>
                        </div>
                    </div>
                </Container>
            </MainLayout>
        </div>
    )
}