import React from "react";
import AdminNav from "./adminNav";
import '../CSS/updateInfo.css';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const UpdateInfo = () => {

    const {id} = useParams();

    const [name, setName] = React.useState('');
    const [studentId, setStudentId] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [dob, setDob] = React.useState('');

    React.useEffect(() => {
        const fetchData = async () => {
            try{
                const responce = await axios.get('http://localhost:3001/get/'+id);
                console.log(responce);
                setName(responce.data.name)
                setStudentId(responce.data.studentId)
                setEmail(responce.data.email)
                setDob(responce.data.dob)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData()
    }, [])
    
    const navigate = useNavigate()
 
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/update/' + id, { name, email, studentId, dob })
        .then(res => {
            console.log(res);
            navigate('/adminPage')
        })
        .catch(err => console.log(err))
    }
 
    


    return(
        <div id="update-container">
            <AdminNav /> 
            <div>
            <div>
            <p className="add-txt">Update Student Details</p><br />
            </div>
            <div className="input-container">
                <form onSubmit={handleUpdate}>

                <div className="wrap">
                <div className="input_box">
                <p>Student Name</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
                <div className="input_box">
                <p>Student ID</p>
                <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)}/>
                </div>
                </div>

                <div className="wrap">
                <div className="input_box">
                <p>Email</p>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className="input_box">
                <p>Date of Bitrh</p>
                <input type="text" value={dob} onChange={(e) => setDob(e.target.value)}/>
                </div>
                </div>


                <div className="reg_btn">
                <button>Update</button>
                </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default UpdateInfo;