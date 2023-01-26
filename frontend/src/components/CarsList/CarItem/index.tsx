import React, { FC } from "react";
import { ICar } from "../../../interfaces/car";

export const CarItem: FC<ICar> = ({ fuel, year, id, model }) => {
  return (
    <tr>
      <th>{id}</th>
      <td>{model}</td>
      <td>{year}</td>
      <td>{fuel}</td>
      <td><button className="btn btn-ghost btn-xs">details</button></td>
    </tr>
  );
};
