import React, {useState} from "react";
import './studentViewer.css'
import {StudentEditor} from './studentEditor'

export const StudentViewer = (props) =>{
    const{name, surname, age, gender, picUrl, id} = props.student
    const deleteStudent = props.onDelete
    const [edit, setEdit] = useState(false)

    function checkGender()
    {
        if (gender === 'female'){
            return (<i className="fa fa-female large-icon"></i>)
        }
        else{
            return (<i className="fa fa-male large-icon"></i>)
        }

    }

    const toggleEdit = () => {setEdit(!edit)}
    const updateStudent = () => {
        return false
    }

    if(!edit) {
    return(
            <div className="card">
                <img src={picUrl} alt="Avatar" className='picStyle' /> 
                <div className="container">
                    <h4><b>{name} {surname}</b></h4>
                    <p className={age >= 10 ? 'old' : 'young'}>Age: {age}</p>
                    <p>Gender: {gender}
                    {checkGender()}</p>
                    <button onClick={()=>deleteStudent(id)}>Delete Me</button>
                    <button onClick={toggleEdit}>Edit Me</button>
                </div>
          </div>
        )} else {
    return(
    <div>
    <StudentEditor onUpdate = {updateStudent} init = {props.student}/>
       <button onClick={toggleEdit}>View Me</button>
    </div>
    )
  }
}
