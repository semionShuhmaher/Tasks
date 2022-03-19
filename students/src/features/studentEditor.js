import React, { useState } from "react";
//import React,{useState} from "react";
import './studentEditor.css'
const picUrl = 'https://www.w3schools.com/howto/img_avatar.png'

export const StudentEditor = (props) =>{
    const {onUpdate, init} = props
    const [student,setStudent] = useState(init)
    const [errorMessages,setErrorMessages] = useState({})

    const validate = (student)=>{
        let hasErrors = false
        setErrorMessages({})
        //name
        if(student.name.length < 2){
            setErrorMessages({...errorMessages,name: 'Name is too short'})
            hasErrors = true
        }
        else if((/[^A-Za-z]/.test(student.name)))
        {
            setErrorMessages({...errorMessages,name: 'Name is illegal'})
            hasErrors = true
        }
        //Surname
        if(student.surname.length < 2){
            setErrorMessages({...errorMessages,surname: 'Surname is too short'})
            hasErrors = true
        }
        else if((/[^A-Za-z]/.test(student.surname)))
        {
            setErrorMessages({...errorMessages,surname: 'Surname is illegal'})
            hasErrors = true
        }
        return hasErrors
    }

    const setNewName = (e) =>{
        const newobj = {...student}
        newobj.name =  e.target.value
        setStudent(newobj)
    }

 const setNewSurName = (e) =>{
    const newobj = {...student}
    newobj.surname =  e.target.value
    setStudent(newobj)
}

 const setNewUrl = (e) =>{
    const newobj = {...student}
    newobj.picUrl =  e.target.value
    setStudent(newobj)
}

 const setNewAge = (e) =>{
    const newobj = {...student}
    newobj.age =  e.target.value
    setStudent(newobj)
    }

 const setNewGender = (e) =>{
    const newobj = {...student}
    newobj.gender =  e.target.value
    setStudent(newobj)
    }

    const updateStudent = () =>{
        if(!validate(student))
        {
            onUpdate(student)
        }
    }

    return(
        <div className="myform">
            <label htmlFor="nameField">First Name</label>
            <input type="text" onChange={setNewName} id = "nameField"></input><br></br>
            <p className="errormessage">{errorMessages.name}</p><br></br>

            <label htmlFor="surnameField">Last Name</label>
            <input  type="text" onChange={setNewSurName} id = "surnameField"></input><br></br>
            <p className="errormessage">{errorMessages.surname}</p><br></br>

            <label htmlFor="newUrl">New URL</label>
            <input  className="myUrl" type="text" onChange={setNewUrl} id = "newUrl"></input><br></br>

            <label htmlFor="newAge">New Age</label>
            <input  type="number" onChange={setNewAge} id = "newAge" min = '1' max = '121'></input><br></br>

            <label htmlFor="newGender">New Gender</label>
            <select value={student.gender} onChange = {setNewGender}>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </select><br></br>

            <br></br><br></br><button onClick={updateStudent}>Submit</button>
        </div>

    )

}