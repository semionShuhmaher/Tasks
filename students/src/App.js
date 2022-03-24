import React,{useState} from "react";
import './App.css';
import { StudentList } from "./features/studentList";

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
      <StudentList />
     </div>

  )

}

export default App;
