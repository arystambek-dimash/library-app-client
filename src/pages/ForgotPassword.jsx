import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "../api/axios";

function ForgotPassword(props) {
    const [email, setEmail] = useState(null);
    const handleClick = async (event) => {
        event.preventDefault();
        try {
            const response = axios.post("api/users/verify/", {
                email: email,
                action: 'reset'
            })
            setEmail('')

        } catch (err) {
            console.log(err.text)
        }
    }

    return (
        <div className="container">
            <div className="auth-box">
                <div className="auth-header">PASSWORD RESET</div>
                <div className="auth-body">
                    <form onSubmit={handleClick} className="login-form">
                        <input
                            type="email"
                            placeholder="EMAIL"
                            name="email"
                            className="phoneNumberInput"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            autoComplete="off"
                        />

                        <input type="submit" value="SEND CODE" className="signInButton"/>
                    </form>

                    <div className="forgetText">
                        <p>Go back &nbsp;</p>
                        <Link to="/login">click here!</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;