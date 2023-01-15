import React from 'react'
import { LEVELS } from '../../models/levels.enum'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TaskListComponent = () => {
    
    const defaultTask = new Task('Example', 'Default description', false, LEVELS.URGENT)
    
    const changeState = () => {

    }

    return (
        <div>
            <div>
                Your tasks:
            </div>
            <TaskComponent task={defaultTask}/>
        </div>
    )
}

export default TaskListComponent