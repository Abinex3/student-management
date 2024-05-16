import React, { useEffect, useState } from "react";
import '../CSS/adminPage.css';
import AdminNav from "../component/adminNav";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";

const MarkInfo = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [students, setStudents] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/input')
            .then(res => {
                setStudents(res.data);
            })
            .catch(err => console.log(err));
    }, [id]);

    const handleDelete = async (id) => {
        try {
            await axios.delete('http://localhost:3001/delete/' + id);
            window.location.reload();
        } catch (err) {
            console.log(err);
        }
    }

    const handleLogout = () => {
        navigate('/login');
    }

    useEffect(() => {
        const handleBackButton = (event) => {
            event.preventDefault();
            const isLoggedIn = true; 
            if (!isLoggedIn) {
                navigate('/login');
            }
        };

        window.history.pushState(null, document.title, window.location.href);
        window.addEventListener('popstate', handleBackButton);

        return () => {
            window.removeEventListener('popstate', handleBackButton);
        };
    }, []);

    return (
        <div id="admin-container">
            <AdminNav />
            <div className="content-right">
                <section>
                    <h2>Student Mark Information</h2>
                    <button onClick={handleLogout}>Logout</button>
                </section>
                <div className="content-table">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Roll No</th>
                                <th>Maths</th>
                                <th>Physics</th>
                                <th>Chemistry</th>
                                <th>Grade</th>
                                <th>Average</th>
                                <th>Total</th>
                                <th>Update</th>
                                <td>Delete</td>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr key={index}>
                                    <td>{student.name}</td>
                                    <td>{student.studentId}</td>
                                    <td>{student.maths}</td>
                                    <td>{student.physics}</td>
                                    <td>{student.chemistry}</td>
                                    <td>{student.grade}</td>
                                    <td>{student.cutoff}</td>
                                    <td>{student.total}</td>
                                    <td>
                                        <Link to={'/updateMark/' + student._id}>
                                            <button className="update-button">Update</button>
                                        </Link>
                                    </td>
                                    <td>
                                        <button onClick={() => handleDelete(student._id)} className="delete-button">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default MarkInfo;
