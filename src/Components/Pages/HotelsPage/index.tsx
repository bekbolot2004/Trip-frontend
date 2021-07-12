import React, {useEffect} from 'react'
import MainLayout from "../../MainLayout";
import Container from "../../Container";
import style from './style.module.scss'
import {useDispatch} from "react-redux";
import {useTypedSelector} from "../../../hooks/useTypedSelector";
import {fetchHouse} from "../../../Redux/actions/house";
import HotelElement from "./HotelElement";

const HotelsPage: React.FC = () => {
    const {items, loading} = useTypedSelector(state => state.house)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchHouse())
    }, [])

    return (
        <div>
            <MainLayout>
                <Container>
                    <div>
                        <div className={style.contentCaption}>
                            <h1>Hotels</h1>
                            <div className={style.houseRow}>
                                {items.map(p => <HotelElement key={p.id} data={p}/>)}
                            </div>
                        </div>
                    </div>
                    {/*{hotelsElementsObj.map(p => <HotelElement key={p.id} title={p.title}/>)}*/}
                </Container>
            </MainLayout>
        </div>
    )
}

export default HotelsPage;