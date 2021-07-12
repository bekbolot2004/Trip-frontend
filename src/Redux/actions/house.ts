import {HouseAction, HouseActionTypes} from "../Types/todo";
import {Dispatch} from "react";
import axios from "axios";
import {apiAdress} from "../../api";

export const fetchHouse = () => {
    return async (dispatch: Dispatch<HouseAction>) => {
        try {
            dispatch({type: HouseActionTypes.FETCH_HOUSE})
            const response = await axios.get(`http://192.168.43.121:8000/api/product/`)
            dispatch({type: HouseActionTypes.FETCH_SET_HOUSE, payload: response.data})
            console.log("product")
        } catch (e) {
        }
    }
}