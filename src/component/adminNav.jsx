import React from "react";
import '../CSS/adminNav.css';
import Logo from '../assets/school-logo.png';
import { Link } from "react-router-dom";

const AdminNav = () => {
    return(
        <div id="nav-container">
            <div className="img-flex">
             <div className="logo-container">
                    <img src={Logo} alt="logo" className="school--logo"/>
                </div>
            </div>
            
            <div className="content-left">
                <Link to="/adminPage"><p>Student Details</p></Link> 
                <Link to="/markInfo"><p>Student Mark Details</p></Link>  
                <Link to="/addStudent"><p>Add New Student</p></Link> 
            </div>
           
        </div>
    )
}

export default AdminNav;