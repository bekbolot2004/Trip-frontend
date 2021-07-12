import {CarsActionTypes, CarsAction} from "../Types/todo";
import {Dispatch} from "react";
import axios from "axios";
import {apiAdress} from "../../api";

export const fetchCars = () => {
    return async (dispatch:Dispatch<CarsAction>) => {
        try {
            dispatch({type:CarsActionTypes.FETCH_CARS})
            const response = await axios.get(`${apiAdress}cars-model`)
            dispatch({type:CarsActionTypes.FETCH_SET_CARS, payload: response.data})
            // alert(response.data)
            console.log(response.data)
        } catch (e) {
            // dispatch()
        }
    }
}