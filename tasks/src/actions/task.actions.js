export const TASK_LOAD = "[TASK] Load TASK list from server";
export const TASK_UPDATE = "[TASK] Update task in list";
export const TASK_DELETE = "[TASK] Detele task from list";
export const TASK_CREATE = "[TASK] Add task to list";


export function loadTasks(tasksList){
        return {
            type: TASK_LOAD,
            payload: tasksList
        } 
}


/// Update
export function updateTask(task){
    return {
        type: TASK_UPDATE,
        payload: task
    } 
}


/// ADD 
export function createTask(task) {
    return {
        type: TASK_CREATE,
        payload: task
    }
}


// DELETE
export function deleteTask(id){
    return {
        type: TASK_DELETE,
        payload: id
    } 
}

