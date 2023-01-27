import React, {FC} from "react";

interface IError {
    message: string;
}

export const Error: FC<IError> = ({message}) => {
    return (<h5>{message}</h5>)
}