import React, { FC } from "react";
import { CarList } from "../components/CarsList";
import { CarForm } from "../components/CarForm";

export const HomePage: FC = () => {
  return (
    <div className="container mx-auto w-1/2 text-center py-10">
      <CarForm />
      <CarList carsList={[]} />
    </div>
  );
};
