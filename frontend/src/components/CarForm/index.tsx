import React, { FC } from "react";

export const CarForm: FC = () => {
  return (
    <form>
      <div>
        <input
          type="text"
          placeholder="Model"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="mt-5">
        <input
          type="number"
          placeholder="Year"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <div className="mt-5">
        <input
          type="text"
          placeholder="Fuel"
          className="input input-bordered w-full max-w-xs"
        />
      </div>
      <button type="submit" className="btn btn-primary mt-5 w-full max-w-xs">
        Add car
      </button>
    </form>
  );
};
