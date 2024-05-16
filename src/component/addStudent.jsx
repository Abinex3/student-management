import React from "react";
import AdminNav from "./adminNav";
import '../CSS/addStudent.css'
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const AddStudent = () => {

    const navigate = useNavigate()

    const [name, setName] = React.useState('');
    const [studentId, setStudentId] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [dob, setDob] = React.useState('');
    const [maths, setMaths] = React.useState('');
    const [physics, setPhysics] = React.useState('');
    const [chemistry, setChemistry] = React.useState('');
    const [total, setTotal] = React.useState('');
    const [cutoff, setCutoff] = React.useState('');
    const [grade, setGrade] = React.useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const findTotal = Number(maths) + Number(chemistry) + Number(physics);
        setTotal(findTotal);

        const findCutoff = Math.round(Number(findTotal/3));
        setCutoff(findCutoff);

        let findGrade;
        if(findCutoff > 90){
            findGrade = "A";
        }
        else if(findCutoff > 70){
            findGrade = "B";
        }
        else if(findCutoff > 50){
            findGrade = "C";
        }
        else if(findCutoff > 35){
            findGrade = "D";
        }
        else{
            findGrade = "F";
        }
        setGrade(findGrade);

        axios.post('http://localhost:3001/input', {name,studentId, email, dob, maths, physics, chemistry, grade: findGrade, total:findTotal, cutoff:findCutoff})
        .then(result => {
            console.log(result);
            navigate('/adminPage')
        })
        .catch(err => {
            console.log(err);
        })
    }

    

    return(
        <div id="addStudent-container">
            <AdminNav />
            <div className="conten">
            <div>
            <p className="add-txt">Add Student Details</p><br />
            </div>

            <div className="input-container">
                <form onSubmit={handleSubmit}>
                
                <div className="wrap">
                <div className="input_box">
                <p>Student Name</p>
                <input type="text" onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="input_box">
                <p>Student ID</p>
                <input type="text" onChange={(e) => setStudentId(e.target.value)}/>
                </div>
                </div>

                <div className="wrap">
                <div className="input_box">
                <p>Email</p>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input_box">
                <p>Date of Birth</p>
                <input type="text" onChange={(e) => setDob(e.target.value)}/>
                </div>
                </div>

                <div className="wrap">
                <div className="input_box">
                <p>Maths</p>
                <input type="text" onChange={(e) => setMaths(e.target.value)}/>
                </div>
                <div className="input_box">
                <p>Physics</p>
                <input type="text" onChange={(e) => setPhysics(e.target.value)}/>
                </div>
                </div>

                <div className="wrap">
                <div className="input_box">
                <p>Chemistry</p>
                <input type="text" onChange={(e) => setChemistry(e.target.value)}/>
                </div>
                </div>

                <div className="reg_btn">
                <button>Submit</button>
                </div>
                </form>
               
                
            </div>
            </div>
        </div>
    )
}

export default AddStudent;