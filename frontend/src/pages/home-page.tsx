import React, {FC, useEffect, useState} from "react";
import {CarList} from "../components/CarsList";
import {CarForm} from "../components/CarForm";
import {useCreateCarMutation, useEditCarMutation, useLazyGetCarListQuery, useRemoveCarMutation} from "../api";
import {Preloader} from "../components/Preloader";
import {Error} from "../components/Error";
import {ICar} from "../interfaces/car";

export const HomePage: FC = () => {
    const [getCars, {data, isLoading, isError}] = useLazyGetCarListQuery();
    const [createCar] = useCreateCarMutation();
    const [removeCar] = useRemoveCarMutation();
    const [editCar] = useEditCarMutation()
    const [error, setError] = useState<string>('');
    const [currentCar, setCurrentCar] = useState<ICar>({fuel: '', model: '', year: 0});

    useEffect(() => {
        getCars(null);
    }, []);

    const onEditCar = (car: ICar) => {
        setCurrentCar(car);
        console.log(car);
    }

    const onRemoveCar = async (car: ICar) => {
        try {
            await removeCar(car);
            await getCars(null)
            console.log('Car remove successfully')
        } catch (e) {
            setError('Error on removing car');
            setTimeout(() => {
                setError('')
            }, 3000)
        }
    }

    const onSaveCar = async (car: ICar) => {
        const saveFn = car.id ? editCar : createCar;
        console.log("sdsd", car)
        try {
            await saveFn(car);
            await getCars(null)
            setCurrentCar(null);
        } catch (e) {
            setError('Error on saving car');
            setTimeout(() => {
                setError('')
            }, 3000)
        }
    }



    return (
        <div className="container mx-auto w-1/2 text-center py-10">
            <CarForm key={`current_car_${currentCar ? currentCar.id : ''}`} car={currentCar} onSubmit={onSaveCar}/>
            {isLoading && !isError && <Preloader/>}
            {!isLoading && isError && <Error message={'Error get data'} />}
            {error && <Error message={error} />}
            {!isLoading && !isError && data && data.length === 0 && <p>The list is empty</p>}
            {!isLoading && !isError && data && data.length > 0
                && <CarList
                    editCar={onEditCar}
                    removeCar={onRemoveCar}
                    carsList={data}/>}
        </div>
    );
};
