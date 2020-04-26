import React, { useContext } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import { Icon } from 'semantic-ui-react'
import { List } from 'semantic-ui-react'
const Task = ({ task }) => {
  const { removeTask, findItem } = useContext(TaskListContext)
  return (
    <List bulleted className="list-item">
    
    <List.Item style={{color:"white"}}>{task.title}</List.Item>
      <div>
        
        <button className="btn-edit task-btn" onClick={() => findItem(task.id)}>
        <Icon name='edit' />
        </button>
        <button 
          className="btn-delete task-btn"
          onClick={() => removeTask(task.id)}
        >
          <Icon name='delete' />
        </button>{' '}
      </div>
    
    </List>
  )
}

export default Task
