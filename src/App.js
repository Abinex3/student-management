import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Home from "./Pages/home";
import StudentPage from "./Pages/studentPage";
import AdminPage from "./Pages/adminPage";
import AddStudent from "./component/addStudent";
import AdminNav from "./component/adminNav";
import UpdateInfo from "./component/updateInfo";
import MarkInfo from "./Pages/markInfo";
import UpdateMark from "./component/updateMark";

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Routes>
            <Route index='/home' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/studentPage' element={<StudentPage />} />
            <Route path='/adminPage' element={<AdminPage />} />
            <Route path='/markInfo' element={<MarkInfo />} />
            <Route path='/addStudent' element={<AddStudent />} />
            <Route path='/adminNav' element={<AdminNav />} />
            <Route path='/updateInfo/:id' element={<UpdateInfo />} />
            <Route path="/updateMark/:id" element={<UpdateMark />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
