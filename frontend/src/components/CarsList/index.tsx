import React, {FC} from "react";
import {ICar} from "../../interfaces/car";
import {CarItem} from "./CarItem";

interface ICarProps {
    carsList: ICar[];
    removeCar: (car: ICar) => Promise<void>
    editCar: (car: ICar) => void
}

export const CarList: FC<ICarProps> = ({carsList, editCar, removeCar}) => {
    return (
        <div className="overflow-x-auto mt-10">
            <table className="table w-full">
                <thead>
                <tr>
                    <th></th>
                    <th>Model</th>
                    <th>Year</th>
                    <th>Fuel</th>
                    <th colSpan={2}>Actions</th>
                </tr>
                </thead>
                <tbody>
                {carsList.map((car, i) => (
                    <CarItem
                        onEdit={editCar}
                        onRemove={removeCar}
                        key={`car_${i}`}
                        car={car}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};
