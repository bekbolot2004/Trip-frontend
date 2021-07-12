export interface HouseState {
    items: any[],
    loading: boolean,
}

export interface CarsState {
    items: any[],
    loading: boolean,
}

export enum HouseActionTypes {
    FETCH_HOUSE = "FETCH_HOUSE",
    FETCH_SET_HOUSE = "FETCH_SET_HOUSE",
}

export enum CarsActionTypes {
    FETCH_CARS = "FETCH_CARS",
    FETCH_SET_CARS = "FETCH_SET_CARS",
}

interface FetchHouseAction {
    type: HouseActionTypes.FETCH_HOUSE;
}

interface FetchCarsAction {
    type: CarsActionTypes.FETCH_CARS;
}

interface FetchSetHouseAction {
    type: HouseActionTypes.FETCH_SET_HOUSE;
    payload: any[]
}

interface FetchSetCarsAction {
    type: CarsActionTypes.FETCH_SET_CARS;
    payload: any[]
}

export type HouseAction = FetchHouseAction | FetchSetHouseAction
export type CarsAction = FetchCarsAction | FetchSetCarsAction
