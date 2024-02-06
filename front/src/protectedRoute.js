import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

//verification du token de connexion dans le store redux
const ProtectedRoute = ({ children }) => {
    const token = useSelector((state) => state.auth.token); //si token rendue à true, le composent rend ses enfants

    return token ? children : <Navigate to="/signin" />; //si token rendue à faux, redirection vers page signin
};

export default ProtectedRoute;