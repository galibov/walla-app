import React, {FC, FormEvent, useEffect, useRef, useState} from "react";
import {ICar} from "../../interfaces/car";

interface ICarForm {
    onSubmit: (car: ICar) => Promise<void>
    car?: ICar
}

export const CarForm: FC<ICarForm> = ({onSubmit, car}) => {
    const [model, setModel] = useState<string>( car && car.model ? car.model : '')
    const [year, setYear] = useState<string>(car && car.year ? car.year.toString() : '')
    const [fuel, setFuel] = useState<string>(car && car.fuel ? car.fuel : '')
    const [formValid, setFormValid] = useState<boolean>(false);

    useEffect(() => {
        if (model && year && fuel) {
            setFormValid(true)
        } else {
            setFormValid(false)
        }
    }, [model, year, fuel]);

    const clearForm = () => {
        setFuel('')
        setModel('')
        setYear('')
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit({
            id:  car && car.id ? car.id : null,
            fuel: fuel,
            model: model,
            year: parseInt(year)
        }).then(() => {
            clearForm()
        })
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <input
                    type="text"
                    placeholder="Model"
                    className="input input-bordered w-full max-w-xs"
                    value={model}
                    onChange={(e) => {
                        setModel(e.target.value)
                    }}
                />
            </div>
            <div className="mt-5">
                <input
                    type="number"
                    placeholder="Year"
                    className="input input-bordered w-full max-w-xs"
                    value={year}
                    onChange={(e) => {
                        setYear(e.target.value)
                    }}
                />
            </div>
            <div className="mt-5">
                <input
                    type="text"
                    placeholder="Fuel"
                    className="input input-bordered w-full max-w-xs"
                    value={fuel}
                    onChange={(e) => {
                        setFuel(e.target.value)
                    }}
                />
            </div>
            <button disabled={!formValid} type="submit" className="btn btn-primary mt-5 w-full max-w-xs">
                Save
            </button>
        </form>
    );
};
