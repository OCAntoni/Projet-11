import { NavLink, useNavigate } from "react-router-dom"
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login  } from "../../store/authSlice";
import { Provider } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "../login/login.scss"
import store from "mongoose/lib/promise_provider";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch ("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                  accept: "application/json",
                  "content-type": "application/json",
                }, 
                body: JSON.stringify({ email, password }),
            });
            const token = response.data.body.token;
            dispatch(login(token));
            navigate('/user')
        } catch (error) {
            console.error("Une erreur s'est produite lors de la demande de connexion :", error);
        } 
    };

    return (
        <Provider store={store}>
            <main className="main bg-dark">
                    <section className="sign-in-content">
                        <FontAwesomeIcon icon={faUserCircle} />
                        <h1>Sign In</h1>
                        <form onSubmit={handleLogin}>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button type="submit" className="sign-in-button">Sign In</button>
                        </form>
                    </section>
            </main>
        </Provider>
    )
}

export default Login 