import { TASK_LOAD, TASK_DELETE, TASK_UPDATE, TASK_CREATE } from "../actions/task.actions";

const initialState = {
    tasksList: [
        {
            "id": 2,
            "title": "Dasha",
            "description": "qwerqwer",
            "priority": 1,
            "done": false
          }
    ]
}

export function taskReducer(state=initialState, action) {

    switch(action.type){
        case TASK_LOAD:
                return {...state, tasksList: action.payload}
        case TASK_UPDATE: 
                const tasks = state.tasksList.map((task)=>{
                    if(task.id == action.payload.id){
                        return {...action.payload};
                    }
                    else {
                        return {...task};
                    }
                })
                return {...state, tasksList: tasks}
        case TASK_DELETE:
            const filteredTasksArray = state.tasksList.filter((task, index)=>{
                return task.id != action.payload;
            })
            return {...state, tasksList: filteredTasksArray}
        case TASK_CREATE:
            const newTasks = [...state.tasksList, action.payload]
            return {...state, tasksList: newTasks}
        default:
            return state;
    }
}