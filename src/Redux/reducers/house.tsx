import {HouseAction, HouseActionTypes, HouseState} from "../Types/todo";

const initialState: HouseState = {
    items: [],
    loading: false,
}

export const houseReducer = (state = initialState, action : HouseAction): HouseState  => {
    switch (action.type) {
        case HouseActionTypes.FETCH_HOUSE:
            return {loading: true, items: []}
        case HouseActionTypes.FETCH_SET_HOUSE:
            return {loading: true, items: action.payload}
        default:
            return state
    }
}
