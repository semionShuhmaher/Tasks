import { createTask } from '../actions/task.actions'
import { useDispatch } from 'react-redux'


export const NewTask = () => {
    
    const dispatch = useDispatch()

    const editedTask ={
        title: '',
        description: "",
        priority: 1,
        done: false
    }
    
    const handleSubmit = event => {
        event.preventDefault()
        fetch('http://localhost:3300/tasks',
            {
              headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
              },
                method: 'POST',
                body: JSON.stringify(editedTask)
            }
            )
            .then(responce => {
                dispatch(createTask(editedTask))
            })
    }

    const changeTask = e => {
        // console.log(e)
        editedTask[e.target.id] = e.target.value
        console.log(editedTask)
    }

    return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" onChange={changeTask}></input><br></br>

        <label htmlFor="description">Description</label>
        <input type="text" id="description" onChange={changeTask}></input><br></br>

        <label htmlFor="priority">Priority</label>
        <input type="number" id="priority" onChange={changeTask}></input><br></br>
        {/* <label htmlFor="doneField">Done</label>
        <input type="textarea" id="doneField"></input><br></br> */}

    
            
            <input type="submit" />
    </form>    
    )
}