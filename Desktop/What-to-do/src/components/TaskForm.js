import React, { useState, useContext, useEffect } from 'react'
import { TaskListContext } from '../contexts/TaskListContext'
import { Button, Icon } from 'semantic-ui-react'
import { Segment, Input } from 'semantic-ui-react'
const TaskForm = () => {
  const { addTask, clearList, editTask, editItem } = useContext(TaskListContext)
  const [title, setTitle] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (!editItem) {
      addTask(title)
      setTitle('')
    } else {
      editTask(title, editItem.id)
    }
  }

  const handleChange = e => {
    setTitle(e.target.value)
  }

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title)
      console.log(editItem)
    } else {
      setTitle('')
    }
  }, [editItem])

  return (
    <form onSubmit={handleSubmit} className="form">
      <Segment inverted>
      <Input 
      inverted
      icon='add' 
      iconPosition='left'
      placeholder='Add tasks'
      value={title}
      onChange={handleChange}
      required />
      </Segment>
      <div className="buttons">
        
            <Button circular color='facebook' type="submit" style={{margin:10}}>
            <Icon name='plus' />
            {editItem ? 'Confirm' : 'Add Task'}
          </Button>
          <Button circular color='facebook' onClick={clearList} style={{margin:10}}>
            <Icon name='delete' />
            {editItem ? 'Clear List' : 'Clear List'}
          </Button>
      </div>
    </form>
  )
}

export default TaskForm
