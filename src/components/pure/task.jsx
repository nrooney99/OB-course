import React from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

const TaskComponent = ({ task, completeTask }) => {
    return (
    <div >
        <p style={{display: 'inline'}}>{task.name} { task.description } { task.level } { task.completed ? 'completada':'pendiente' }</p>
        <button onClick={()=>completeTask(task)}>Completar</button>
    </div>
    )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task).isRequired,
    completeTask: PropTypes.func.isRequired,
}

export default TaskComponent