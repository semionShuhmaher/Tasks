import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loadTasks, updateTask, deleteTask } from '../actions/task.actions'

export const TasksList = () => {
    const tasks = useSelector((state) => state.tasksList )
    const dispatch = useDispatch()
    
    const loadGlobalState = () => {
        fetch('http://localhost:3300/tasks')    
        .then(response => 
            response.json()
            .then(taskArray => {
                dispatch(loadTasks(taskArray))
            }
            )
        )
    }
    
    useEffect(()=>{
        loadGlobalState()
    },
    []
    )

    const taskDone = task => {
        task.done = !task.done
        fetch('http://localhost:3300/tasks/'+task.id, {
            method: 'PATCH',
            body: JSON.stringify(task),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })    
        .then(response => {
            dispatch(updateTask(task))
        })
    }

    const delTask = id => {
        fetch('http://localhost:3300/tasks/'+id, {
            method: 'DELETE'
        })
        .then(response =>{
            dispatch(deleteTask(id))
        })
    }

    return (
        <table>
            <thead>
                <tr><th>Title</th><th>description</th><th>priority</th><th>id</th><th>done</th><th>del</th></tr>
                </thead>
                <tbody>
            {tasks.map(task => { return (
                <tr key={task.id}>
                    <td>{task.title}</td>
                    <td>{task.description}</td>
                    <td>{task.priority}</td>
                    <td>{task.id}</td>
                    <td>
                        <input type='checkbox' checked={task.done} onChange={ event => {taskDone(task)} } /> 
                    </td>
                    <td><button onClick={(e) => {delTask(task.id)}}>Delete</button></td>
                </tr>
            )})}
            </tbody>
        </table>
    )
}