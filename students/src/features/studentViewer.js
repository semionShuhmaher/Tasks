import React from "react";
import './studentViewer.css'

export const StudentViewer = (props) =>{
    const{name, surname, age, gender, picUrl} = props.student
    function checkGender()
    {
        if (gender === 'female'){
            return (<i className="fa fa-female large-icon"></i>)
        }
        else{
            return (<i className="fa fa-male large-icon"></i>)
        }

    }
        return(
            <div className="card">
                <img src={picUrl} alt="Avatar" className='picStyle' /> 
                <div className="container">
                    <h4><b>{name} {surname}</b></h4>
                    <p className={age >= 10 ? 'old' : 'young'}>Age: {age}</p>
                    <p>Gender: {gender}
                    {checkGender()}</p>
                </div>
          </div>
        )
}
