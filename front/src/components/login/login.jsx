import { NavLink, useNavigate } from "react-router-dom"
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { login  } from "../../store/authSlice";
import { fetchProfile } from "../fetchs/fetch-profile";
import { setUser } from "../../store/userSlice";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'
import "../login/login.scss"

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
                  "Content-Type": "application/json",
                }, 
                body: JSON.stringify({ email, password }), //transformation en chaine JSON + inclusion requete
            });
            const result = await response.json();
            const token = result.body.token; //extraction du token

            dispatch(login(token)); //action redux login renvoyer au store

            const responseProfile = await fetchProfile(result.body.token);
            
            dispatch(setUser(responseProfile.body));
            navigate('/user'); //si connexion réussi navigation vers la page
            
        } catch (error) {
            console.error("Une erreur s'est produite lors de la demande de connexion :", error);
        }
    };

    return (
        <main className="main bg-dark">
                    <section className="sign-in-content">
                        <FontAwesomeIcon icon={faUserCircle} />
                        <h1>Sign In</h1>
                        <form onSubmit={handleLogin}>
                            <div className="input-wrapper">
                                <label htmlFor="username">Username</label>
                                <input type="text" id="username" onChange={e => setEmail(e.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" onChange={e => setPassword(e.target.value)} />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button type="submit" className="sign-in-button">Sign In</button>
                        </form>
                    </section>
        </main>
    )
}

export default Login 