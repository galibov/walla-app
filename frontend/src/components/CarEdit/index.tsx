import React, { FC } from "react";

export const CarEdit: FC = () => {
  return (
    <div className="modal">
      <div className="modal-box">
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
          <div className="modal-action">
            <button
              type="submit"
              className="btn btn-primary mt-5 w-full max-w-xs"
            >
              Edit car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
