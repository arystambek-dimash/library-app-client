import React, {useEffect, useState} from 'react';
import axios from "../api/axios";
import {Link, Route, Routes, useLocation} from "react-router-dom";
import Auth from "./Auth";
import {NotificationManager} from "react-notifications";
import NotificationContainer from "react-notifications/lib/NotificationContainer";

function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const location = useLocation();

    useEffect(() => {
        if (location.state) {
            NotificationManager.success(location.state.message, location.state.title, 3000)
        }
    }, [location]);

    const handleClick = async (event) => {
        event.preventDefault();

        try {
            const response = await axios.post('api/users/token/', {
                email: name,
                password: password
            });
            setName('')
            setPassword('')
            console.log(response.data);
        } catch (error) {
            if (error.response && error.response.status === 401) {
                setError("Invalid email or password. Please try again.");
            } else {
                setError("An error occurred. Please try again later.");
            }
        }
    }

    return (
        <div className="container">
            <NotificationContainer/>
            <div className="auth-box">
                <div className="auth-header">SIGN IN</div>
                <div className="auth-body">
                    <form className="login-form" onSubmit={handleClick}>
                        <input type="email" placeholder="EMAIL" name="email"
                               className="phoneNumberInput" autoComplete="off" value={name}
                               onChange={(event) => {
                                   setName(event.target.value)
                               }}/>
                        <input type="password" placeholder="PASSWORD" name="password" className="passwordInput"
                               autoComplete="off" value={password}
                               onChange={(event) => {
                                   setPassword(event.target.value)
                               }}/>
                        <div style={{width: "100%", display: "flex", justifyContent: "left", alignItems: "flex-start"}}>
                            <Link to="/forgot-password"><a style={{color: "red"}}>Forgot password?</a></Link>
                        </div>
                        <input type="submit" value="SIGN IN" className="signInButton"/>
                    </form>

                    {error && <div className="error-message" style={{
                        display: "flex",
                        textAlign: "center",
                        justifyContent: "center",
                        top: "15px",
                        position: "relative"
                    }}><p style={{color: "red"}}>{error}</p></div>}
                    <div className="forgetText">
                        <p>If you don’t have an account &nbsp;</p>
                        <Link to="/auth">click here!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
