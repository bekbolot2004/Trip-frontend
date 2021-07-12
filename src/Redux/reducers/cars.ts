import {CarsAction, CarsActionTypes, CarsState} from "../Types/todo";

const initialState: CarsState = {
    items: [],
    loading: false,
}

export const carsReducer = (state = initialState, action : CarsAction): CarsState  => {
    switch (action.type) {
        case CarsActionTypes.FETCH_CARS:
            return {loading: true, items: []}
        case CarsActionTypes.FETCH_SET_CARS:
            return {loading: true, items: action.payload}
        default:
            return state
    }
}
