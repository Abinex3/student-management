import React from "react";
import AdminNav from "./adminNav";
import '../CSS/updateMark.css';
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2'

const UpdateMark = () => {

    const {id} = useParams();

    const [name, setName] = React.useState('');
    const [studentId, setStudentId] = React.useState('');
    const [maths, setMaths] = React.useState('');
    const [physics, setPhysics] = React.useState('');
    const [chemistry, setChemistry] = React.useState('');
    const [grade, setGrade] = React.useState('');
    const [avg, setAvg] = React.useState('');
    const [total, setTotal] = React.useState('');
    

    React.useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:3001/get/'+id);
                console.log(response);
                setName(response.data.name)
                setStudentId(response.data.studentId)
                setMaths(response.data.maths)
                setPhysics(response.data.physics)
                setChemistry(response.data.chemistry)
                setGrade(response.data.grade)
                setAvg(response.data.cutoff)
                setTotal(response.data.total)
            }
            catch(err){
                console.log(err);
            }
        }
        fetchData()
    }, [id])
    
    const navigate = useNavigate()
 
    const handleUpdate = (e) => {
        e.preventDefault()
        axios.put('http://localhost:3001/update/' + id, { name, studentId, maths, physics, chemistry, avg, total, grade })
        .then(res => {
            console.log(res);
            navigate('/markInfo')
        })
        .catch(err => console.log(err))


        
    }

    const updateChange = () => {
        Swal.fire({
            title: "Do you want to save the changes?",
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Save",
            denyButtonText: `Don't save`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire("Saved!", "", "success");
            } else if (result.isDenied) {
              Swal.fire("Changes are not saved", "", "info");
            }
          }); 
    }
 
    return(
        <div id="update-container">
            <AdminNav /> 
            <div>
            <div>
            <p className="add-txt">Add Student Details</p><br />
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
                    <p>Maths</p>
                    <input type="text" value={maths} onChange={(e) => setMaths(e.target.value)}/>
                    </div>
                    <div className="input_box">
                    <p>Physics</p>
                    <input type="text" value={physics} onChange={(e) => setPhysics(e.target.value)}/>
                    </div>
                    </div>


                    <div className="wrap">
                <div className="input_box">
                    <p>Chemistry</p>
                    <input type="text" value={chemistry} onChange={(e) => setChemistry(e.target.value)}/>
                    </div>
                    <div className="input_box">
                    <p>Grade</p>
                    <input type="text" value={grade} onChange={(e) => setGrade(e.target.value)}/>
                    </div>
                    </div>

                    <div className="wrap">
                <div className="input_box">
                    <p>Average</p>
                    <input type="text" value={avg} onChange={(e) => setAvg(e.target.value)}/>
                    </div>
                    <div className="input_box">
                    <p>Total</p>
                    <input type="text" value={total} onChange={(e) => setTotal(e.target.value)}/>
                    </div>
                    </div>

                    <div className="reg_btn">
                    <button onClick={updateChange}>Update</button>
                    </div>
                </form>
            </div>
            </div>
        </div>
    )
}

export default UpdateMark;
