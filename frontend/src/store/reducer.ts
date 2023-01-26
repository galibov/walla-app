import {combineReducers} from "@reduxjs/toolkit";
import {carsApi} from "../api";

export const reducer = combineReducers({
    [carsApi.reducerPath]: carsApi.reducer
});