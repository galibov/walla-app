import React, { FC } from "react";
import { ICar } from "../../interfaces/car";
import { CarItem } from "./CarItem";

interface ICarProps {
  carsList: ICar[];
}

export const CarList: FC<ICarProps> = ({ carsList }) => {
  return (
    <div className="overflow-x-auto mt-10">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Model</th>
            <th>Year</th>
            <th>Fuel</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {carsList.map((car, i) => (
              <CarItem
                key={`car_${i}`}
                model={car.model}
                year={car.year}
                fuel={car.fuel}
                id={car.id}
              />
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};
