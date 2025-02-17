import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { authContext } from "../contexts/auth/authContext";


interface IPrivateProps {
    children: React.ReactNode;
}


export const PrivateRoute = ({ children }: IPrivateProps) => {
    const { authenticated } = useContext(authContext);

    return authenticated ? children : <Navigate to="/" />
    
}