import React, { useState } from "react";
import '../CSS/login.css';
import LoginSvg from '../assets/college students-amico.svg';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        setEmailError("");
        setPasswordError("");

        if (!email.trim()) {
            setEmailError("Please enter your email.");
            return;
        }

        if (!password.trim()) {
            setPasswordError("Please enter your password.");
            return;
        }

        
        axios.post('http://localhost:3001/login', { email, password })
            .then(result => {
                console.log(result)
                if (result.data.Status === "success") {
                    if (result.data.role === 'admin') {
                        navigate('/adminPage');
                    } else if (result.data.role === 'student') {
                        navigate('/studentPage');
                    } else {
                    }
                }
            })
            .catch(err => {
                console.log(err);
                setEmailError("Failed to login. Please try again.");
            });
    }

    return (
        <div id="login-container">
            <div className="form-container">
                <div className="form-container-style">
                    <h2 className="login-name">Login</h2>
                    <p className="sub-name">Enter your account detail</p>
                    <form onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <p className="input-name">Email</p>
                            <input
                                type="email"
                                className="input-style"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {emailError && <p className="error-message">{emailError}</p>}
                        </div>
                        <div className="input-wrapper">
                            <p className="input-name">Password</p>
                            <input
                                type="password"
                                className="input-style"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            {passwordError && <p className="error-message">{passwordError}</p>}
                        </div>
                        <p className="forget-password">forget password?</p>
                        <button className="button-style">Login</button>
                    </form>
                    <div className="signup-div">
                        <p className="key-txt">Don't have an account?</p>
                        <Link to="/signup"><p className="signup-button-style">Signup</p></Link>
                    </div>
                </div>
            </div>

            <div className="img-container">
                <div className="login--greeting">
                    <p className="login-greeting">Welcome to</p><br />
                    <p className="login---greeting">student portal</p>
                    <p className="sub-greeting">Login to access your account</p>
                </div>
                <img src={LoginSvg} alt="login-svg" className="img-style" />
            </div>
        </div>
    )
}

export default Login;
