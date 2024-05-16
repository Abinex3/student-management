import React from "react";
import '../CSS/home.css';
import Logo from '../assets/school-logo.png';

import { Link } from 'react-router-dom'



const Home = () => {

   
   
    return(
        <div id="home-container">
           
      
      <div className="home-nav">
      <div className="logo-container">
          <img src={Logo} alt="logo" className="school-logo"/>
      </div>
      <Link to="/signup"><button className="login-button">New Student</button></Link>
  </div>

  <div className="home-content">
      <div className="text-container">
      <p className="greeting">Welcome to High School</p>
      <p className="sub">Let us think of education as the means of developing our greatest abilities, because in each of us there is a private hope and dream which, fulfilled, can be translated into benefit for everyone and greater strength for our nation.</p> 
      <Link to="/login"><button className="button">Login</button></Link> 
      </div>
     
      <div className="imgg-container">
      {/* <img src={Student} alt="logo" className="school-girl"/> */}
      </div>
  </div>
  
            
            
           
        </div>
    )
}

export default Home;