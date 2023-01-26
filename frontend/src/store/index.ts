import { configureStore} from "@reduxjs/toolkit";
import {carsApi} from "../api";
import {reducer} from "./reducer";

export const store = configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({thunk: true}).concat(carsApi.middleware),
})