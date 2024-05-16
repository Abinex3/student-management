import React, { useState } from "react";
import '../CSS/signup.css';
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2'

const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setRole] = useState("");
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Please enter your name.";
        } else {
            delete newErrors.name;
        }

        if (!email.trim()) {
            newErrors.email = "Please enter your email.";
        } else {
            delete newErrors.email;
        }

        if (!password.trim()) {
            newErrors.password = "Please enter your password.";
        } else {
            delete newErrors.password;
        }

        if (!role) {
            newErrors.role = "Please select your role.";
        } else {
            delete newErrors.role;
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const isValid = validateForm();
        if (!isValid) {
            return;
        }

        axios.post('http://localhost:3001/register', { name, email, password, role })
            .then(result => {
                console.log(result);
                navigate('/login');
            })
            .catch(err => console.log(err));
    };

    const handleClick = () => {
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Register Successfully",
            showConfirmButton: false,
            timer: 1500
          });
    }

    return (
        <div id="signup-container">
            <div className="form--container">
                <div className="form--container--style">
                    <h2 className="login--name">Register</h2>
                    <p className="sub--name">Enter your account detail</p>
                    <form onSubmit={handleSubmit}>
                        <p className="input--name">Name</p>
                        <input type="text" className="input--style" value={name} onChange={(e) => setName(e.target.value)} />
                        {errors.name && <p className="error-message">{errors.name}</p>}
                        <p className="input--name">Email</p>
                        <input type="email" className="input--style" value={email} onChange={(e) => setEmail(e.target.value)} />
                        {errors.email && <p className="error-message">{errors.email}</p>}
                        <p className="input--name">Password</p>
                        <input type="password" className="input--style" value={password} onChange={(e) => setPassword(e.target.value)} />
                        {errors.password && <p className="error-message">{errors.password}</p>}
                        <p className="input--name">Role</p>
                        <select className="input---style" value={role} onChange={(e) => setRole(e.target.value)}>
                            <option value="">Select Role</option>
                            <option value="student">Student</option>
                            <option value="admin">Admin</option>
                        </select><br />
                        {errors.role && <p className="error-message">{errors.role}</p>}
                        <button className="button--style" onClick={handleClick}>Signup</button>
                    </form>
                    <div className="signup-div">
                        <p className="key-txt">Already have an account?</p>
                        <Link to="/login"><p className="signup-button-style">Login</p></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup;
