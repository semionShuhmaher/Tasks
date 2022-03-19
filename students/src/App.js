import React,{useState} from "react";
import './App.css';
import {StudentViewer} from './features/studentViewer'
import {StudentEditor} from './features/studentEditor'

const picUrl = 'https://www.w3schools.com/howto/img_avatar.png'

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
      <StudentViewer student = {editStudent}/>
      <StudentEditor onUpdate = {updateStudent} init = {editStudent}/>
     </div>

  )

}

export default App;
