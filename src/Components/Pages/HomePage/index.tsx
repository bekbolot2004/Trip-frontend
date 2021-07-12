import React, {useEffect} from 'react'
import MainLayout from "../../MainLayout";
import Main from "./Main";
import Container from "../../Container";
import style from './style.module.scss'
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {useDispatch} from "react-redux";
import {fetchHouse} from "../../../Redux/actions/house";
import HotelElement from "../HotelsPage/HotelElement";
import {fetchCars} from "../../../Redux/actions/cars";
import CarsElement from "../CarsPage/CarsElements";
import HotelsCategory from "../HotelsPage/HotelsCategory";
import Slider from "./Slider";

export default function HomePage() {
    const {items, loading} = useTypedSelector(state => state.house)
    const carsItems = useTypedSelector(state => state.cars.items)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchHouse())
        dispatch(fetchCars())
    }, [])



    useEffect(() => {
        // const apiUrl = `https://api.github.com/users/hacktivist123/repos`;
        const apiUrl = `http://192.168.0.23:8000/api/cars-model/`;
        fetch(apiUrl)
            .then((res) => res.json())
            .then((repos) => {
                console.log(repos)
            });
    }, []);

    return (
        <div>
            <MainLayout>
                <>
                    <Slider/>
                    {/*<Main/>*/}
                    <Container>
                        <>
                            <div>
                                <h1>Hotels</h1>
                                <HotelsCategory/>
                                <div className={style.hotels}>
                                    {items.map(p => <div>
                                        <HotelElement data={p}/>
                                    </div>)}
                                </div>
                            </div>
                            <div>
                                <h1>Cars</h1>
                                <div className={style.hotels}>
                                    {carsItems.map(p => <div>
                                        <CarsElement data={p}/>
                                    </div>)}
                                </div>
                            </div>
                        </>
                    </Container>
                </>
            </MainLayout>
        </div>
    )
}