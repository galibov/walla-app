import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {ICar} from "../interfaces/car";

const URL = 'http://localhost:8000/';
export const carsApi = createApi({
    reducerPath: 'cars',
    baseQuery: fetchBaseQuery({baseUrl: URL}),
    endpoints: (builder) => ({
        getCarList: builder.query<ICar[], null>(
            {
                query: () => ({
                    url: `/cars`,
                    method: 'GET',
                }),
            },
        ),
    }),
});

export const {
    useGetCarListQuery
} = carsApi