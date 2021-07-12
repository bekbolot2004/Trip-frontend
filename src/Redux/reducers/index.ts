import { combineReducers } from 'redux';
import {houseReducer} from "./house";
import {carsReducer} from "./cars";

export const rootReducer = combineReducers({
    house: houseReducer,
    cars : carsReducer,
});

export type RootState = ReturnType<typeof rootReducer>