import React,{useState,useEffect} from "react";
import {StudentViewer} from './studentViewer'
import {StudentEditor} from './studentEditor'


export const StudentList = ()=>
{
  const [students, setStudents] = useState([])
  const [viewNew, setViewNew] = useState(false)

    const refreshList = () => {
      fetch(process.env.REACT_APP_SERVER_URL, 
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
      const backendUrl = process.env.REACT_APP_SERVER_URL + '/' + id
      fetch(backendUrl,
      {
          method: "DELETE"
      }
      )
        .then(responce => {
          console.log(responce)
          refreshList()
        })
    }

    const togleNewForm = () => {
      setViewNew(!viewNew)
    }

    const editStudent = {gender:'male'}

    return(
    <div>
     {students.map(element => { 
       return <StudentViewer 
        student={element} 
        key={element.id} 
        onRefresh={refreshList}
        onDelete={deleteById} />
     })}
     {
        viewNew ? <StudentEditor init={editStudent} onCancel={togleNewForm} onRefresh={refreshList} /> :
      <button onClick={togleNewForm} >New Student</button> 
    }

     </div>
    )
}
 