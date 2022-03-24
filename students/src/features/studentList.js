import React,{useState,useEffect} from "react";
import {StudentViewer} from './studentViewer'
import {StudentEditor} from './studentEditor'

export const StudentList = ()=>
{
  const [students, setStudents] = useState([])

    const refreshList = () => {
      fetch('http://localhost:3300/students/', 
      {
        method:"GET"
      })
      .then(responce => responce.json())
      .then(obj => {setStudents(obj)})
    }

    useEffect(() => {
      refreshList()
    }, [])

    const deleteById = (id) => {
      fetch('http://localhost:3300/students/' + id,
      {
          method: "DELETE"
      }
      )
        .then(responce => {
          console.log(responce)
          refreshList()
        })
    }

    const updateStudent = () => {
      return false
    }

    const addStudent = (student) => {
      console.log(student)
      fetch('http://localhost:3300/students/',
      {
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
          method: "POST",
          body: JSON.stringify(student)
      }
      )
      .then(responce => {
        console.log(responce)
        refreshList()
      })
    }

    const editStudent = {}

    return(
    <div>
     {students.map(element => { 
       return <StudentViewer 
        student={element} 
        key={element.id} 
        onDelete={deleteById} />
     })}
    <StudentEditor onUpdate = {addStudent} init = {editStudent}/>
    {/* <StudentEditor /> */}

     </div>
    )
}
 