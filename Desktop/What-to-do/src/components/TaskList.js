import React, { useContext } from "react";
import { TaskListContext } from "../contexts/TaskListContext";
import Task from "./Task";

const TaskList = () => {
  const { tasks } = useContext(TaskListContext);

  return (
    <div style={{marginTop:20,fontSize:25}}>
      {tasks.length ? (
        <h3>
        
      
          {tasks.map(task => {
            return <Task task={task} key={task.id} />;
          })}
         
          </h3>
        
      ) : (
       
        <div className="no-tasks">No Tasks Yet. Please add any task</div>
      )}
    </div>
  );
};

export default TaskList;
