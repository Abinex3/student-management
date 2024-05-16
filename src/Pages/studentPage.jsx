import React, { useState } from "react";
import axios from "axios";
import '../CSS/studentPage.css';
import Logo from '../assets/school-logo.png';
import { Link } from 'react-router-dom';

const GetResult = () => {
    const [studentId, setStudentId] = useState("");
    const [email, setEmail] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState("");

    const handleGetResult = async () => {
        try {
            const response = await axios.post('http://localhost:3001/findResult', { studentId, email });
            setResult(response.data);
            setError("");
        } catch (err) {
            console.error(err);
            setError("Failed to fetch result. Please try again.");
        }
    };

    return (
        <div id="student-container">
            <div className="home-nav">
                 <div className="logo-container">
                   <img src={Logo} alt="logo" className="school-logo"/>
                </div>
                <Link to="/login"><button className="login-button">Logout</button></Link>
                </div>


            <div className="body-content">
            <p className="scl-heading">High School Online Result</p>
                <div className="data-input">
                   
                <input 
    type="text" 
    placeholder="Email" 
    className="input-"  
    value={email}  
    onChange={(e) => setEmail(e.target.value)}
/>
<input 
    type="text" 
    placeholder="Student ID" 
    className="input-"  
    value={studentId}  
    onChange={(e) => setStudentId(e.target.value)}
/>
<button onClick={handleGetResult} className="sub-button">Get Result</button>
                </div>
            </div>

        
            {error && <p>{error}</p>}
            {result && (
                <div className="mark-table">
                    <div className="student-info">
                            <p className="inHead">Student basic info</p>
                            <p>name : <span>{result.name}</span></p>
                            <p>Student ID : <span>{result.studentId}</span></p>
                            <p>Date-of-birth :<span>{result.dob}</span></p>
                            <p>Email : <span>{result.email}</span></p>
                        </div>
                    <div className="body-header">

                        

                        <table>
                        <thead>
                          <tr className="t1">
                               <th>S.No</th>
                               <th>Course code</th>
                               <th>Subjects</th>
                               <th>Marks</th>
                           </tr>
                        </thead>
                       <tbody>
                                   <tr className="t2">
                                        <td>1</td>
                                        <td>e</td>
                                       <td>Maths</td>
                                       <td>{result.maths}</td>
                                   </tr>

                                   <tr className="t2">
                                        <td>2</td>
                                        <td>e</td>
                                       <td>Physics</td>
                                       <td>{result.physics}</td>
                                   </tr>

                                   <tr className="t2">
                                        <td>3</td>
                                        <td>e</td>
                                       <td>Chemistry</td>
                                       <td>{result.chemistry}</td>
                                   </tr>
                       </tbody>
                        </table> 
                        <div className="finalMark">
                        <p>Total Mark: {result.total}</p>
                        <p>Average : {result.cutoff}</p>
                        <p>Grade : {result.grade}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default GetResult;
