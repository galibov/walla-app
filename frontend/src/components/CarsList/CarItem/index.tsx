import React, {FC} from "react";
import {ICar} from "../../../interfaces/car";
interface ICarItem {
    car: ICar,
    onEdit: (car: ICar) => void,
    onRemove: (car: ICar) => void,
}
export const CarItem: FC<ICarItem> = ({car, onEdit, onRemove}) => {
    const {id, model, year, fuel} = car;
    return (
        <tr>
            <td>{id}</td>
            <td>{model}</td>
            <td>{year}</td>
            <td>{fuel}</td>
            <td>
                <button className="btn btn-ghost btn-xs" onClick={onEdit.bind(null, car)}>details</button>
            </td>
            <td>
                <button className="btn btn-warning btn-xs" onClick={onRemove.bind(null, car)}>remove</button>
            </td>
        </tr>
    );
};
