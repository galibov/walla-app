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

        createCar: builder.mutation<ICar, ICar>({
            query: (car: ICar) => ({
                url: `/cars`,
                method: 'POST',
                body: car,
            }),
        }),

        editCar: builder.mutation<ICar, ICar>({
            query: (car: ICar) => ({
                url: `/cars`,
                method: 'PATCH',
                body: car,
            }),
        }),

        removeCar: builder.mutation<ICar, ICar>({
            query: (car: ICar) => ({
                url: `/cars/${car.id}`,
                method: 'DELETE',
            }),
        }),
    }),
});

export const {
    useLazyGetCarListQuery,
    useCreateCarMutation,
    useRemoveCarMutation,
    useEditCarMutation
} = carsApi