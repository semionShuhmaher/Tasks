import React,{useState} from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom"
import './App.css';
import { StudentList } from "./features/studentList";
import { StudentEditor } from "./features/studentEditor";

const picUrl = 'https://www.w3schools.com/howto/img_avatar.png'

function Root() {
  const navigate = useNavigate();

  const retToList = () => {
    navigate('/')
  }

  return (
    <div>
      <ul className="menu">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/new">Add Student</Link>
      </li>
      </ul>

        <Routes>
          <Route exact path='/' element={< StudentList />}></Route>
          <Route exact path='/new' element={< StudentEditor  init={{gender:'male'}} onCancel={retToList} onRefresh={retToList} />}></Route>
        </Routes>
    </div>
  );
}

const App = () =>{

  const [editStudent, setEditStudent] = useState(
    {
      name: 'Vasia',
      surname: 'Pupkin',
      picUrl,
      age: 22,
      gender: 'male'
    }
  )
  const updateStudent = (editStudent) =>{
    setEditStudent(editStudent)
  }

  

  
  return(
    <div>
      <BrowserRouter >
        <Root />
      </BrowserRouter>
     </div>

  )

}

export default App;
